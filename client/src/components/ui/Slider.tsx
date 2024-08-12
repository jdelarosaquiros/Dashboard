import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { useDoubleClick } from '@zattoo/use-double-click';
import type { clickEvent } from '@zattoo/use-double-click';
import { cn } from '../../utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  doubleClickHandler?: clickEvent;
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, doubleClickHandler, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn('relative flex w-full touch-none select-none items-center', className ?? '')}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-blue-850">
        <SliderPrimitive.Range className="absolute h-full bg-gray-400  dark:bg-blue-400" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        onClick={
          useDoubleClick(doubleClickHandler as clickEvent) ??
          (() => {
            return;
          })
        }
        // className="block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-pink-200 dark:bg-gray-400 dark:focus:ring-pink-400 dark:focus:ring-offset-pink-800"
        className="block h-4 w-4 cursor-pointer rounded-full border-2 border-gray-400 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-blue-200 dark:bg-blue-400 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-800"
      />
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
