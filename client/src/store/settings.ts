import { atom } from 'recoil';
import { SettingsViews } from 'librechat-data-provider';
import { atomWithLocalStorage } from '~/store/utils';
import type { TOptionSettings } from '~/common';

// Static atoms without localStorage
const staticAtoms = {
  abortScroll: atom<boolean>({ key: 'abortScroll', default: false }),
  showFiles: atom<boolean>({ key: 'showFiles', default: false }),
  optionSettings: atom<TOptionSettings>({ key: 'optionSettings', default: {} }),
  showPluginStoreDialog: atom<boolean>({ key: 'showPluginStoreDialog', default: false }),
  showTrustAssesmentDialog: atom<boolean>({ key: 'showTrustAssesmentDialog', default: false }),
  showAgentSettings: atom<boolean>({ key: 'showAgentSettings', default: false }),
  currentSettingsView: atom<SettingsViews>({
    key: 'currentSettingsView',
    default: SettingsViews.default,
  }),
  showBingToneSetting: atom<boolean>({ key: 'showBingToneSetting', default: false }),
  showPopover: atom<boolean>({ key: 'showPopover', default: false }),
};

const localStorageAtoms = {
  // General settings
  autoScroll: atomWithLocalStorage('autoScroll', false),
  hideSidePanel: atomWithLocalStorage('hideSidePanel', false),

  // Messages settings
  enterToSend: atomWithLocalStorage('enterToSend', true),
  showCode: atomWithLocalStorage('showCode', false),
  saveDrafts: atomWithLocalStorage('saveDrafts', false),
  forkSetting: atomWithLocalStorage('forkSetting', ''),
  splitAtTarget: atomWithLocalStorage('splitAtTarget', false),

  rememberForkOption: atomWithLocalStorage('rememberForkOption', true),

  // Beta features settings
  modularChat: atomWithLocalStorage('modularChat', true),
  LaTeXParsing: atomWithLocalStorage('LaTeXParsing', true),

  // Speech settings
  conversationMode: atomWithLocalStorage('conversationMode', false),
  advancedMode: atomWithLocalStorage('advancedMode', false),

  speechToText: atomWithLocalStorage('speechToText', true),
  engineSTT: atomWithLocalStorage('engineSTT', 'browser'),
  languageSTT: atomWithLocalStorage('languageSTT', ''),
  autoTranscribeAudio: atomWithLocalStorage('autoTranscribeAudio', false),
  decibelValue: atomWithLocalStorage('decibelValue', -45),
  autoSendText: atomWithLocalStorage('autoSendText', false),

  textToSpeech: atomWithLocalStorage('textToSpeech', true),
  engineTTS: atomWithLocalStorage('engineTTS', 'browser'),
  voice: atomWithLocalStorage('voice', ''),
  languageTTS: atomWithLocalStorage('languageTTS', ''),
  automaticPlayback: atomWithLocalStorage('automaticPlayback', false),
  playbackRate: atomWithLocalStorage<number | null>('playbackRate', null),
  cacheTTS: atomWithLocalStorage('cacheTTS', true),

  // Account settings
  UsernameDisplay: atomWithLocalStorage('UsernameDisplay', true),
};

export default { ...staticAtoms, ...localStorageAtoms };
