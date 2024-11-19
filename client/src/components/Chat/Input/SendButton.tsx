import React, { forwardRef } from 'react';
import { useWatch } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '~/components/ui';
import { SendIcon } from '~/components/svg';
import { useLocalize } from '~/hooks';
import { cn } from '~/utils';
// import type { Option, ExtendedFile } from 'client/src/common/types.ts';
// import { useChatContext } from '~/Providers';

type SendButtonProps = {
  disabled: boolean;
  control: Control<{ text: string }>;
  // files: Map<string, ExtendedFile>;
};

const SubmitButton = React.memo(
  forwardRef((props: { disabled: boolean }, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const localize = useLocalize();
    return (
      <TooltipProvider delayDuration={250}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              ref={ref}
              disabled={props.disabled}
              className={cn(
                'absolute bottom-1.5 right-2 rounded-lg border border-black p-0.5 text-white transition-colors enabled:bg-black disabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:disabled:bg-white md:bottom-3 md:right-3',
              )}
              data-testid="send-button"
              type="submit"
            >
              <span className="" data-state="closed">
                <SendIcon size={24} />
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={10}>
            {localize('com_nav_send_message')}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }),
);

const SendButton = React.memo(
  forwardRef((props: SendButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const data = useWatch({ control: props.control });
    // const { files } = useChatContext(); // Access 'files' from context
    // const hasText = data?.text;
    // const hasFiles = files && files.size > 0;
    // const isDisabled = props.disabled || (!hasText && !hasFiles);
    // return <SubmitButton ref={ref} disabled={isDisabled} />;
    return <SubmitButton ref={ref} disabled={props.disabled || !data?.text} />;
  }),
);

export default SendButton;
