import * as Tabs from '@radix-ui/react-tabs';
import { MessageSquare } from 'lucide-react';
import { SettingsTabValues } from 'librechat-data-provider';
import type { TDialogProps } from '~/common';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui';
import { GearIcon, DataIcon, SpeechIcon, UserIcon, ExperimentIcon } from '~/components/svg';
import { General, Messages, Speech, Beta, Data, Account } from './SettingsTabs';
import { useMediaQuery, useLocalize } from '~/hooks';
import { cn } from '~/utils';

export default function Settings({ open, onOpenChange }: TDialogProps) {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const localize = useLocalize();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        disableScroll={isSmallScreen}
        className={cn(
          'max-h-[90vh] overflow-auto shadow-2xl md:min-h-[500px] md:w-[680px]',
          isSmallScreen ? 'min-h-[200px]' : '',
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-medium leading-6 text-gray-800 dark:text-gray-20">
            {localize('com_nav_settings')}
          </DialogTitle>
        </DialogHeader>
        <div className="max-h-[373px] overflow-auto px-6 md:min-h-[373px] md:w-[680px]">
          <Tabs.Root
            defaultValue={SettingsTabValues.GENERAL}
            className="flex flex-col gap-3 md:flex-row"
            orientation="horizontal"
          >
            <Tabs.List
              aria-label="Settings"
              role="tablist"
              aria-orientation="horizontal"
              className={cn(
                isSmallScreen
                  ? 'hide-scrollbar flex flex-row space-x-4 overflow-x-auto'
                  : 'min-w-auto max-w-auto -ml-[8px] flex flex-shrink-0 flex-col flex-col flex-wrap overflow-auto sm:max-w-none',
              )}
              style={{ outline: 'none' }}
            >
              <Tabs.Trigger
                className={cn(
                  'group m-1 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                  isSmallScreen
                    ? 'flex-row items-center justify-center text-sm radix-state-active:bg-gray-100'
                    : 'bg-white radix-state-active:bg-gray-100',
                  isSmallScreen ? '' : 'dark:bg-gray-700',
                )}
                value={SettingsTabValues.GENERAL}
                style={{ userSelect: 'none' }}
              >
                <GearIcon />
                {localize('com_nav_setting_general')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className={cn(
                  'group m-1 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                  isSmallScreen
                    ? 'flex-row items-center justify-center text-sm radix-state-active:bg-gray-100'
                    : 'bg-white radix-state-active:bg-gray-100',
                  isSmallScreen ? '' : 'dark:bg-gray-700',
                )}
                value={SettingsTabValues.MESSAGES}
                style={{ userSelect: 'none' }}
              >
                <MessageSquare className="icon-sm" />
                {localize('com_endpoint_messages')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className={cn(
                  'group m-1 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                  isSmallScreen
                    ? 'flex-row items-center justify-center text-sm radix-state-active:bg-gray-100'
                    : 'bg-white radix-state-active:bg-gray-100',
                  isSmallScreen ? '' : 'dark:bg-gray-700',
                )}
                value={SettingsTabValues.BETA}
                style={{ userSelect: 'none' }}
              >
                <ExperimentIcon />
                {localize('com_nav_setting_beta')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className={cn(
                  'group m-1 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                  isSmallScreen
                    ? 'flex-row items-center justify-center text-sm radix-state-active:bg-gray-100'
                    : 'bg-white radix-state-active:bg-gray-100',
                  isSmallScreen ? '' : 'dark:bg-gray-700',
                )}
                value={SettingsTabValues.SPEECH}
                style={{ userSelect: 'none' }}
              >
                <SpeechIcon className="icon-sm" />
                {localize('com_nav_setting_speech')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className={cn(
                  'group m-1 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                  isSmallScreen
                    ? 'flex-row items-center justify-center text-sm radix-state-active:bg-gray-100'
                    : 'bg-white radix-state-active:bg-gray-100',
                  isSmallScreen ? '' : 'dark:bg-gray-700',
                )}
                value={SettingsTabValues.DATA}
                style={{ userSelect: 'none' }}
              >
                <DataIcon />
                {localize('com_nav_setting_data')}
              </Tabs.Trigger>
              <Tabs.Trigger
                className={cn(
                  'group m-1 flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                  isSmallScreen
                    ? 'flex-row items-center justify-center text-sm radix-state-active:bg-gray-100'
                    : 'bg-white radix-state-active:bg-gray-100',
                  isSmallScreen ? '' : 'dark:bg-gray-700',
                )}
                value={SettingsTabValues.ACCOUNT}
                style={{ userSelect: 'none' }}
              >
                <UserIcon />
                {localize('com_nav_setting_account')}
              </Tabs.Trigger>
            </Tabs.List>
            <div className="h-auto min-h-[280px] overflow-auto sm:w-full sm:max-w-none">
              <General />
              <Messages />
              <Beta />
              <Speech />
              <Data />
              <Account />
            </div>
          </Tabs.Root>
        </div>
      </DialogContent>
    </Dialog>
  );
}
