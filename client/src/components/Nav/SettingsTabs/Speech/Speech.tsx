import * as Tabs from '@radix-ui/react-tabs';
import { SettingsTabValues } from 'librechat-data-provider';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Lightbulb, Cog } from 'lucide-react';
import { useOnClickOutside, useMediaQuery } from '~/hooks';
import store from '~/store';
import { cn } from '~/utils';
import ConversationModeSwitch from './ConversationModeSwitch';
import {
  TextToSpeechSwitch,
  EngineTTSDropdown,
  AutomaticPlaybackSwitch,
  CacheTTSSwitch,
  VoiceDropdown,
  PlaybackRate,
} from './TTS';
import {
  DecibelSelector,
  EngineSTTDropdown,
  LanguageSTTDropdown,
  SpeechToTextSwitch,
  AutoSendTextSwitch,
  AutoTranscribeAudioSwitch,
} from './STT';
import { useCustomConfigSpeechQuery } from '~/data-provider';

function Speech() {
  const [confirmClear, setConfirmClear] = useState(false);
  const { data } = useCustomConfigSpeechQuery();
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  const [advancedMode, setAdvancedMode] = useRecoilState(store.advancedMode);
  const [autoTranscribeAudio, setAutoTranscribeAudio] = useRecoilState(store.autoTranscribeAudio);
  const [conversationMode, setConversationMode] = useRecoilState(store.conversationMode);
  const [speechToText, setSpeechToText] = useRecoilState(store.speechToText);
  const [textToSpeech, setTextToSpeech] = useRecoilState(store.textToSpeech);
  const [cacheTTS, setCacheTTS] = useRecoilState(store.cacheTTS);
  const [engineSTT, setEngineSTT] = useRecoilState<string>(store.engineSTT);
  const [languageSTT, setLanguageSTT] = useRecoilState<string>(store.languageSTT);
  const [decibelValue, setDecibelValue] = useRecoilState(store.decibelValue);
  const [autoSendText, setAutoSendText] = useRecoilState(store.autoSendText);
  const [engineTTS, setEngineTTS] = useRecoilState<string>(store.engineTTS);
  const [voice, setVoice] = useRecoilState<string>(store.voice);
  const [languageTTS, setLanguageTTS] = useRecoilState<string>(store.languageTTS);
  const [automaticPlayback, setAutomaticPlayback] = useRecoilState(store.automaticPlayback);
  const [playbackRate, setPlaybackRate] = useRecoilState(store.playbackRate);

  const updateSetting = useCallback(
    (key, newValue) => {
      const settings = {
        conversationMode: { value: conversationMode, setFunc: setConversationMode },
        advancedMode: { value: advancedMode, setFunc: setAdvancedMode },
        speechToText: { value: speechToText, setFunc: setSpeechToText },
        textToSpeech: { value: textToSpeech, setFunc: setTextToSpeech },
        cacheTTS: { value: cacheTTS, setFunc: setCacheTTS },
        engineSTT: { value: engineSTT, setFunc: setEngineSTT },
        languageSTT: { value: languageSTT, setFunc: setLanguageSTT },
        autoTranscribeAudio: { value: autoTranscribeAudio, setFunc: setAutoTranscribeAudio },
        decibelValue: { value: decibelValue, setFunc: setDecibelValue },
        autoSendText: { value: autoSendText, setFunc: setAutoSendText },
        engineTTS: { value: engineTTS, setFunc: setEngineTTS },
        voice: { value: voice, setFunc: setVoice },
        languageTTS: { value: languageTTS, setFunc: setLanguageTTS },
        automaticPlayback: { value: automaticPlayback, setFunc: setAutomaticPlayback },
        playbackRate: { value: playbackRate, setFunc: setPlaybackRate },
      };

      if (settings[key]) {
        const setting = settings[key];
        setting.setFunc(newValue);
      }
    },
    [
      conversationMode,
      advancedMode,
      speechToText,
      textToSpeech,
      cacheTTS,
      engineSTT,
      languageSTT,
      autoTranscribeAudio,
      decibelValue,
      autoSendText,
      engineTTS,
      voice,
      languageTTS,
      automaticPlayback,
      playbackRate,
      setConversationMode,
      setAdvancedMode,
      setSpeechToText,
      setTextToSpeech,
      setCacheTTS,
      setEngineSTT,
      setLanguageSTT,
      setAutoTranscribeAudio,
      setDecibelValue,
      setAutoSendText,
      setEngineTTS,
      setVoice,
      setLanguageTTS,
      setAutomaticPlayback,
      setPlaybackRate,
    ],
  );

  useEffect(() => {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        updateSetting(key, value);
      });
    }
  }, []);

  const contentRef = useRef(null);
  useOnClickOutside(contentRef, () => confirmClear && setConfirmClear(false), []);

  return (
    <Tabs.Content
      value={SettingsTabValues.SPEECH}
      role="tabpanel"
      className="w-full px-4 md:min-h-[300px]"
      ref={contentRef}
    >
      <Tabs.Root
        defaultValue={'simple'}
        orientation="horizontal"
        value={advancedMode ? 'advanced' : 'simple'}
      >
        <div className="sticky top-0 z-50 bg-white dark:bg-gray-700">
          <Tabs.List className="sticky top-0 mb-4 flex justify-center bg-white dark:bg-gray-700">
            <Tabs.Trigger
              onClick={() => setAdvancedMode(false)}
              className={cn(
                'group m-1 flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                isSmallScreen
                  ? 'flex-row items-center justify-center text-sm text-gray-700 radix-state-active:bg-gray-100 radix-state-active:text-white dark:text-gray-300 dark:radix-state-active:text-white'
                  : 'bg-white radix-state-active:bg-gray-100 dark:bg-gray-700',
                'w-full',
              )}
              value="simple"
              style={{ userSelect: 'none' }}
            >
              <Lightbulb />
              Simple
            </Tabs.Trigger>
            <Tabs.Trigger
              onClick={() => setAdvancedMode(true)}
              className={cn(
                'group m-1 flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm text-white transition-all duration-200 ease-in-out radix-state-active:bg-white radix-state-active:text-white dark:text-white dark:radix-state-active:bg-pink-600',
                isSmallScreen
                  ? 'flex-row items-center justify-center text-sm text-gray-700 radix-state-active:bg-gray-100 radix-state-active:text-white dark:text-gray-300 dark:radix-state-active:text-white'
                  : 'bg-white radix-state-active:bg-gray-100 dark:bg-gray-700',
                'w-full',
              )}
              value="advanced"
              style={{ userSelect: 'none' }}
            >
              <Cog />
              Advanced
            </Tabs.Trigger>
          </Tabs.List>
        </div>

        <Tabs.Content value={'simple'}>
          <div className="flex flex-col gap-3 text-sm text-white dark:text-gray-50">
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <ConversationModeSwitch />
            </div>
            <div className="h-px bg-black/20 bg-white/20" role="none" />
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <SpeechToTextSwitch />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <EngineSTTDropdown />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <LanguageSTTDropdown />
            </div>
            <div className="h-px bg-black/20 bg-white/20" role="none" />
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <TextToSpeechSwitch />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <EngineTTSDropdown />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <VoiceDropdown />
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value={'advanced'}>
          <div className="flex flex-col gap-3 text-sm text-white dark:text-gray-50">
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <ConversationModeSwitch />
            </div>
            <div className="h-px bg-black/20 bg-white/20" role="none" />
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <SpeechToTextSwitch />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <EngineSTTDropdown />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <LanguageSTTDropdown />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <AutoTranscribeAudioSwitch />
            </div>
            {autoTranscribeAudio && (
              <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
                <DecibelSelector />
              </div>
            )}
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <AutoSendTextSwitch />
            </div>
            <div className="h-px bg-black/20 bg-white/20" role="none" />
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <TextToSpeechSwitch />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <AutomaticPlaybackSwitch />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <EngineTTSDropdown />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <VoiceDropdown />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <PlaybackRate />
            </div>
            <div className="border-b pb-3 last-of-type:border-b-0 dark:border-pink-700">
              <CacheTTSSwitch />
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Tabs.Content>
  );
}

export default React.memo(Speech);
