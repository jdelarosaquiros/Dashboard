import { Trigger } from '@radix-ui/react-popover';
import type { TModelSpec, TEndpointsConfig } from 'librechat-data-provider';
import { useLocalize } from '~/hooks';
import SpecIcon from './SpecIcon';
import { cn } from '~/utils';

export default function MenuButton({
  selected,
  className = '',
  textClassName = '',
  primaryText = '',
  secondaryText = '',
  endpointsConfig,
}: {
  selected?: TModelSpec;
  className?: string;
  textClassName?: string;
  primaryText?: string;
  secondaryText?: string;
  endpointsConfig: TEndpointsConfig;
}) {
  const localize = useLocalize();
  return (
    <Trigger asChild>
      <div
        className={cn(
          'group flex cursor-pointer items-center gap-1 rounded-xl px-3 py-2 text-lg font-medium border border-blue-200 dark:border-pink-700 hover:bg-blue-50 radix-state-open:bg-blue-50 dark:hover:bg-pink-700 dark:radix-state-open:bg-pink-700',
          className,
        )}
        // type="button"
      >
        {selected && selected.showIconInHeader && (
          <SpecIcon currentSpec={selected} endpointsConfig={endpointsConfig} />
        )}
        <div className={textClassName}>
          {!selected ? localize('com_ui_none_selected') : primaryText}{' '}
          {!!secondaryText && <span className="text-token-text-secondary">{secondaryText}</span>}
        </div>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          className="text-token-text-tertiary"
        >
          <path
            d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Trigger>
  );
}
