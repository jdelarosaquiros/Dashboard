import { Search, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import type { TResult } from 'librechat-data-provider';
import { useResultsDialogHelpers, useLocalize } from '~/hooks';
import { useTrustAssesment } from 'librechat-data-provider/react-query';

import ResultsPagination from './ResultsPagination';
import ResultsItem from './ResultsItem';

type TResultsDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
//   results: TResult[];
};

function TrustAssesmentDialog({ 
  isOpen, setIsOpen 
}: TResultsDialogProps) {
    const localize = useLocalize();
    const { data: trustAssesment } = useTrustAssesment();
    const availableResults = trustAssesment?.results;
  
    const {
      maxPage,
      setMaxPage,
      currentPage,
      setCurrentPage,
      itemsPerPage,
      searchChanged,
      setSearchChanged,
      searchValue,
      setSearchValue,
      gridRef,
      handleSearch,
      handleChangePage,
    } = useResultsDialogHelpers();
  
    const filteredResults = availableResults?.filter((result) =>
      result.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  
    useEffect(() => {
      if (filteredResults) {
        setMaxPage(Math.ceil(filteredResults.length / itemsPerPage));
        if (searchChanged) {
          setCurrentPage(1);
          setSearchChanged(false);
        }
      }
    }, [
      availableResults,
      itemsPerPage,
      searchValue,
      filteredResults,
      searchChanged,
      setMaxPage,
      setCurrentPage,
      setSearchChanged,
    ]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        setCurrentPage(1);
        setSearchValue('');
      }}
      className="relative z-[102]"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-gray-600/65 transition-opacity dark:bg-black/80" />
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className="relative w-full transform overflow-hidden overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-700 max-sm:h-full sm:mx-7 sm:my-8 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl"
          style={{ minHeight: '610px' }}
        >
          <div className="flex items-center justify-between border-b-[1px] border-black/10 p-6 pb-4 dark:border-pink-600">
            <div className="flex items-center">
              <div className="text-center sm:text-left">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-20">
                  {localize('com_nav_results')}
                </Dialog.Title>
              </div>
            </div>
            <div>
              <div className="sm:mt-0">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentPage(1);
                  }}
                  className="inline-block text-gray-500 hover:text-gray-100"
                  tabIndex={0}
                >
                  <X />
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 sm:pt-4">
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center">
                <div className="relative flex items-center">
                  <Search className="absolute left-2 h-6 w-6 text-gray-500" />
                  <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearch}
                    placeholder={localize('com_nav_results_search')}
                    className="flex rounded-md border border-gray-200 bg-transparent py-2 pl-10 pr-2 shadow-[0_0_10px_rgba(0,0,0,0.05)] outline-none placeholder:text-gray-400 focus:border-gray-400 focus:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-opacity-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-pink-600 dark:bg-gray-700 dark:text-gray-50 dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] dark:hover:border-pink-500 focus:dark:bg-gray-600 dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-pink-500 dark:focus:ring-offset-0 dark:focus:ring-offset-pink-900"
                  />
                </div>
              </div>
              {/* <div
                ref={gridRef}
                className="grid grid-cols-1 grid-rows-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{ minHeight: '410px' }}
              >
                {filteredResults &&
                  filteredResults
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((result, index) => (
                      <ResultsItem result={result} />
                    ))}
              </div> */}
              <div
                ref={gridRef}
                className="grid grid-cols-1 grid-rows-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                style={{ minHeight: '410px' }}
            >
                {filteredResults &&
                    filteredResults
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((result, index) => (
                        <ResultsItem result={result} />
                    ))}
                </div>
            </div>
            <div className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
              {maxPage > 0 ? (
                <ResultsPagination
                  currentPage={currentPage}
                  maxPage={maxPage}
                  onChangePage={handleChangePage}
                />
              ) : (
                <div style={{ height: '21px' }}></div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default TrustAssesmentDialog;
