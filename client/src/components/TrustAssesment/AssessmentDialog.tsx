import { Search, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { useResultsDialogHelpers, useLocalize } from '~/hooks';
import { useTrustAssessment } from 'librechat-data-provider/react-query';
import ResultsDataTable from './ResultsDataTable';

type TAssessmentDialogProps = {
  endpoint: string,
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function AssessmentDialog({ endpoint, isOpen, setIsOpen }: TAssessmentDialogProps) {
  const localize = useLocalize();
  const { data: trustAssessment } = useTrustAssessment(endpoint);
  
  const columns = trustAssessment?.columns.map((col: string) => ({ 
    accessorKey: col, 
    header: col,
  }));

  const rows = trustAssessment?.values.map((row: any[]) => {
    const rowObject: Record<string, any> = {};
    trustAssessment.columns.forEach((col: string, index: number) => {
      rowObject[col] = row[index];
    });
    return rowObject;
  });

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
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
                  {endpoint}
                </Dialog.Title>
              </div>
            </div>
            <div>
              <div className="sm:mt-0">
                <button
                  onClick={() => {
                    setIsOpen(false);
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
              {rows && columns && <ResultsDataTable columns={columns} data={rows} />}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default AssessmentDialog;
