import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useState, useRef, useEffect, useMemo, memo, useCallback } from 'react';
import type { TPromptGroup } from 'librechat-data-provider';
import type { PromptOption } from '~/common';
import { removeCharIfLast, mapPromptGroups, detectVariables } from '~/utils';
import VariableDialog from '~/components/Prompts/Groups/VariableDialog';
import CategoryIcon from '~/components/Prompts/Groups/CategoryIcon';
import { useGetAllPromptGroups } from '~/data-provider';
import { useLocalize, useCombobox } from '~/hooks';
import { Spinner } from '~/components/svg';
import MentionItem from './MentionItem';
import store from '~/store';

const commandChar = '/';

const PopoverContainer = memo(
  ({
    index,
    children,
    isVariableDialogOpen,
    variableGroup,
    setVariableDialogOpen,
  }: {
    index: number;
    children: React.ReactNode;
    isVariableDialogOpen: boolean;
    variableGroup: TPromptGroup | null;
    setVariableDialogOpen: (isOpen: boolean) => void;
  }) => {
    const showPromptsPopover = useRecoilValue(store.showPromptsPopoverFamily(index));
    return (
      <>
        {showPromptsPopover ? children : null}
        <VariableDialog
          open={isVariableDialogOpen}
          onClose={() => setVariableDialogOpen(false)}
          group={variableGroup}
        />
      </>
    );
  },
);

function PromptsCommand({
  index,
  textAreaRef,
  submitPrompt,
}: {
  index: number;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  submitPrompt: (textPrompt: string) => void;
}) {
  const localize = useLocalize();

  const { data, isLoading } = useGetAllPromptGroups(undefined, {
    select: (data) => {
      const mappedArray = data.map((group) => ({
        id: group._id,
        value: group.command ?? group.name,
        label: `${group.command ? `/${group.command} - ` : ''}${group.name}: ${
          group.oneliner?.length ? group.oneliner : group.productionPrompt?.prompt ?? ''
        }`,
        icon: <CategoryIcon category={group.category ?? ''} />,
      }));

      const promptsMap = mapPromptGroups(data);

      return {
        promptsMap,
        promptGroups: mappedArray,
      };
    },
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isVariableDialogOpen, setVariableDialogOpen] = useState(false);
  const [variableGroup, setVariableGroup] = useState<TPromptGroup | null>(null);
  const setShowPromptsPopover = useSetRecoilState(store.showPromptsPopoverFamily(index));

  const prompts = useMemo(() => data?.promptGroups ?? [], [data]);
  const promptsMap = useMemo(() => data?.promptsMap ?? {}, [data]);

  const { open, setOpen, searchValue, setSearchValue, matches } = useCombobox({
    value: '',
    options: prompts,
  });

  const handleSelect = useCallback(
    (mention?: PromptOption, e?: React.KeyboardEvent<HTMLInputElement>) => {
      if (!mention) {
        return;
      }

      setSearchValue('');
      setOpen(false);
      setShowPromptsPopover(false);

      if (textAreaRef.current) {
        removeCharIfLast(textAreaRef.current, commandChar);
      }

      const isValidPrompt = mention && promptsMap && promptsMap[mention.id];

      if (!isValidPrompt) {
        return;
      }

      const group = promptsMap[mention.id];
      const hasVariables = detectVariables(group?.productionPrompt?.prompt ?? '');
      if (group && hasVariables) {
        if (e && e.key === 'Tab') {
          e.preventDefault();
        }
        setVariableGroup(group);
        setVariableDialogOpen(true);
        return;
      } else if (group) {
        submitPrompt(group.productionPrompt?.prompt ?? '');
      }
    },
    [setSearchValue, setOpen, setShowPromptsPopover, textAreaRef, promptsMap, submitPrompt],
  );

  useEffect(() => {
    if (!open) {
      setActiveIndex(0);
    } else {
      setVariableGroup(null);
    }
  }, [open]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const currentActiveItem = document.getElementById(`prompt-item-${activeIndex}`);
    currentActiveItem?.scrollIntoView({ behavior: 'instant', block: 'nearest' });
  }, [activeIndex]);

  return (
    <PopoverContainer
      index={index}
      isVariableDialogOpen={isVariableDialogOpen}
      variableGroup={variableGroup}
      setVariableDialogOpen={setVariableDialogOpen}
    >
      <div className="absolute bottom-16 z-10 w-full space-y-2">
        <div className="popover border-token-border-light rounded-2xl border bg-surface-tertiary-alt p-2 shadow-lg">
          <input
            autoFocus
            ref={inputRef}
            placeholder={localize('com_ui_command_usage_placeholder')}
            className="mb-1 w-full border-0 bg-surface-tertiary-alt p-2 text-sm focus:outline-none dark:text-gray-20"
            autoComplete="off"
            value={searchValue}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setOpen(false);
                setShowPromptsPopover(false);
                textAreaRef.current?.focus();
              }
              if (e.key === 'ArrowDown') {
                setActiveIndex((prevIndex) => (prevIndex + 1) % matches.length);
              } else if (e.key === 'ArrowUp') {
                setActiveIndex((prevIndex) => (prevIndex - 1 + matches.length) % matches.length);
              } else if (e.key === 'Enter' || e.key === 'Tab') {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
                handleSelect(matches[activeIndex] as PromptOption | undefined, e);
              } else if (e.key === 'Backspace' && searchValue === '') {
                setOpen(false);
                setShowPromptsPopover(false);
                textAreaRef.current?.focus();
              }
            }}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => {
              timeoutRef.current = setTimeout(() => {
                setOpen(false);
                setShowPromptsPopover(false);
              }, 150);
            }}
          />
          <div className="max-h-40 overflow-y-auto">
            {(() => {
              if (isLoading && open) {
                return (
                  <div className="flex h-32 items-center justify-center text-text-primary">
                    <Spinner />
                  </div>
                );
              }

              if (!isLoading && open) {
                return (matches as PromptOption[]).map((mention, index) => (
                  <MentionItem
                    index={index}
                    key={`${mention.value}-${index}`}
                    onClick={() => {
                      if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                      }
                      timeoutRef.current = null;
                      handleSelect(mention);
                    }}
                    name={mention.label ?? ''}
                    icon={mention.icon}
                    description={mention.description}
                    isActive={index === activeIndex}
                  />
                ));
              }
              return null;
            })()}
          </div>
        </div>
      </div>
    </PopoverContainer>
  );
}

export default memo(PromptsCommand);
