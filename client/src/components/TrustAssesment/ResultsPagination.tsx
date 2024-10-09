import React from 'react';

type TResultsPaginationProps = {
  currentPage: number;
  maxPage: number;
  onChangePage: (page: number) => void;
};

const ResultsPagination: React.FC<TResultsPaginationProps> = ({
  currentPage,
  maxPage,
  onChangePage,
}) => {
  const pages = [...Array(maxPage).keys()].map((i) => i + 1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > maxPage) {
      return;
    }
    onChangePage(page);
  };

  return (
    <div className="flex gap-2 text-sm text-white/60 dark:text-white/70">
      <div
        role="button"
        aria-label="Previous page"
        onClick={() => handlePageChange(currentPage - 1)}
        className={`flex cursor-default items-center text-sm ${
          currentPage === 1
            ? 'text-white/70 opacity-50 dark:text-white/70'
            : 'text-white/70 hover:text-white/50 dark:text-white/70 dark:hover:text-white/50'
        }`}
        style={{ userSelect: 'none' }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Prev
      </div>
      {pages.map((page) => (
        <div
          role="button"
          key={page}
          className={`flex h-5 w-5 items-center justify-center text-sm ${
            currentPage === page
              ? 'text-blue-600 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-600'
              : 'text-white/70 hover:text-white/50 dark:text-white/70 dark:hover:text-white/50'
          }`}
          style={{ userSelect: 'none' }}
          onClick={() => onChangePage(page)}
        >
          {page}
        </div>
      ))}
      <div
        role="button"
        aria-label="Next page"
        onClick={() => handlePageChange(currentPage + 1)}
        className={`flex cursor-default items-center text-sm ${
          currentPage === maxPage
            ? 'text-white/70 opacity-50 dark:text-white/70'
            : 'text-white/70 hover:text-white/50 dark:text-white/70 dark:hover:text-white/50'
        }`}
        style={{ userSelect: 'none' }}
      >
        Next
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default ResultsPagination;
