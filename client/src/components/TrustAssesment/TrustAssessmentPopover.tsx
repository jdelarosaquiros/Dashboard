import { useRef } from 'react';
import { X } from 'lucide-react';
import { Portal, Content } from '@radix-ui/react-popover';
import type { ReactNode } from 'react';
import { useLocalize, useOnClickOutside } from '~/hooks';
import { cn, removeFocusOutlines } from '~/utils';
import { Button } from '~/components/ui';
import { useTrustAssessment } from 'librechat-data-provider/react-query';
import ResultsDataTable from './ResultsDataTable';
import { Dialog } from '@headlessui/react';

type TrustAssessmentPopoverProps = {
  visible: boolean;
  closePopover: () => void;
};

export default function TrustAssessmentPopover({
  visible,
  closePopover,
}: TrustAssessmentPopoverProps) {
  const popoverRef = useRef(null);
  useOnClickOutside(
    popoverRef,
    () => closePopover(),
    []
  );

  const localize = useLocalize();
  const { data: trustAssesment } = useTrustAssessment();
  const availableResults = trustAssesment?.assessments;

  const columns = [
    {
      accessorKey: 'time',
      header: 'Time',
      cell: (info: any) => info.getValue(),
    },
    ...trustAssesment?.tests.map((test, index) => ({
      accessorKey: `results.${index}`,
      header: test,
      cell: (info: any) => {
        let score = info.getValue();
        let color = '';

        if (score >= 0.7) {
          color = 'text-green-500';
        } else if (score >= 0.4) {
          color = 'text-yellow-500';
        } else {
          color = 'text-red-500';
        }
        score = (score * 100).toFixed(2);

        return <span className={color}>{score}</span>;
      },
    })) ?? [],
  ];

  if (!visible) {
    return null;
  }

  return (
    <Portal>
      <Content sideOffset={8} align="start" ref={popoverRef} asChild>
        <div className="z-[70] flex w-screen flex-col items-center md:w-full md:px-4">
          <div className={cn(
              'shadow-xl rounded-md min-w-[75px] font-normal bg-white border-black/10 border dark:bg-gray-700 text-white dark:text-white',
              'dark:bg-gray-700 border-d-0 flex w-full flex-col overflow-hidden rounded-none border-s-0 border-t bg-white px-0 pb-[10px] dark:border-pink-600 md:rounded-md md:border lg:w-[736px]',
            )}
          >
            <div className="flex w-full items-center bg-blue-50 px-2 py-2 dark:bg-gray-700">
              {/* <Dialog.Title className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-20"> */}
                {/* {trustAssesment?.model} */}
              {/* </Dialog.Title> */}
              <Button
                type="button"
                className={cn(
                  'ml-auto h-auto bg-transparent px-3 py-2 text-xs font-medium font-normal text-white hover:bg-blue-100 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-pink-700 dark:hover:text-white',
                  removeFocusOutlines
                )}
                onClick={closePopover}
              >
                <X />
              </Button>
            </div>
            <div className="p-4 sm:p-6 sm:pt-4">
              <div className="mt-4 flex flex-col gap-4">
                {availableResults && <ResultsDataTable columns={columns} data={availableResults} />}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Portal>
  );
}
