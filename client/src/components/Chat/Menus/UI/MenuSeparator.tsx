import type { FC } from 'react';

const MenuSeparator: FC = () => (
  <div
    role="separator"
    aria-orientation="horizontal"
    className="my-1.5 border-b bg-blue-200 dark:border-pink-700"
  />
);

export default MenuSeparator;
