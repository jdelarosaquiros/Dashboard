import { Trigger } from '@radix-ui/react-popover';

export default function TitleButton({ primaryText = '', secondaryText = '' }) {
  return (
    <Trigger asChild>
      <div
        className="group flex cursor-pointer items-center gap-1 rounded-xl px-3 py-2 text-lg font-medium border border-blue-200 dark:border-pink-700 hover:bg-blue-50 radix-state-open:bg-blue-50 dark:hover:bg-pink-700 dark:radix-state-open:bg-pink-700"
        // type="button"
      >
        <div>
          {primaryText}{' '}
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
