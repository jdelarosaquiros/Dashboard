@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Variables */
:root {
  --white:#e4e800;
  --black:#00FFFF;
  --gray-20: #9965f4;
  --gray-50: #9965f4;
  --gray-100: #9965f4;
  --gray-200: #b794f6;
  --gray-300: #9965f4;
  --gray-400: #7e3ff2;
  --gray-500: #6002ee;
  --gray-600: #5300e8;
  --gray-700: #3d00e0;
  --gray-800: #1c00db;
  --gray-850: #0000d6;
  --gray-900: #0000c5;
  --gizmo-gray-500:#fc2108;
  --gizmo-gray-600:#ee1302;
  --gizmo-gray-950:#ee1302
}
html {
  --text-primary:var(--gray-800);
  --text-secondary:var(--gray-600);
  --text-secondary-alt:var(--gray-500);
  --text-tertiary:var(--gray-500);
  --surface-primary:var(--white);
  --surface-primary-alt:var(--white);
  --surface-primary-contrast:var(--gray-100);
  --surface-secondary:var(--gray-50);
  --surface-tertiary:var(--gray-100);
  --surface-tertiary-alt:var(--white);
  --border-light:var(--gray-100);
  --border-medium-alt:var(--gray-300);
  --border-medium:var(--gray-200);
  --border-heavy:var(--gray-300);
  --border-xheavy:var(--gray-400)
}
.dark {
  --text-primary:var(--gray-100);
  --text-secondary:var(--gray-300);
  --text-secondary-alt:var(--gray-400);
  --text-tertiary:var(--gray-500);
  --surface-primary:var(--gray-900);
  --surface-primary-alt:var(--gray-850);
  --surface-primary-contrast:var(--gray-850);
  --surface-secondary:var(--gray-800);
  --surface-tertiary:var(--gray-700);
  --surface-tertiary-alt:var(--gray-700);
  --border-light:var(--gray-700);
  --border-medium-alt:var(--gray-600);
  --border-medium:var(--gray-600);
  --border-heavy:var(--gray-500);
  --border-xheavy:var(--gray-400)
}
.gizmo {
  --text-primary:var(--gizmo-gray-950);
  --text-secondary:var(--gizmo-gray-600);
  --text-tertiary:var(--gizmo-gray-500);
  --surface-primary:var(--white);
  --surface-secondary:var(--gray-50);
  --surface-tertiary:var(--gray-100);
  --border-light:rgba(20, 247, 20, 0.818);
  --border-medium:rgba(0, 255, 0, 0.863);
  --border-heavy:rgba(0, 255, 0, 0.918);
  --border-xheavy:rgba(0,255,0,.918)
}
.gizmo.dark {
  --text-primary:var(--gray-100);
  --text-secondary:var(--gray-300);
  --text-tertiary:var(--gizmo-gray-500);
  --surface-primary:var(--gray-900);
  --surface-secondary:var(--gray-800);
  --surface-tertiary:var(--gray-700);
  --border-light:rgba(226, 4, 4, 0.904);
  --border-medium:rgba(217, 0, 0, 0.879);
  --border-heavy:rgba(217, 0, 0, 0.934);
  --border-xheavy:rgba(217,0,0,.934)
}

.text-token-text-primary {
  color:#5300e8;
  color:var(--text-primary)
}
.text-token-text-secondary {
  color:#5300e8;
  color:var(--text-secondary)
}
.text-token-text-tertiary {
  color:#5300e8;
  color:var(--text-tertiary)
}

.icon-xs {
  stroke-width:1.5;
  height:.75rem;
  width:.75rem
}
.icon-sm {
  stroke-width:2;
  height:1rem;
  width:1rem
}
.icon-md, .icon-md-heavy {
  stroke-width:1.5;
  height:1.125rem;
  width:1.125rem
}
.icon-md-heavy {
  stroke-width: 2.5;
}
.icon-lg {
  stroke-width:1.5;
  height:1.5rem;
  width:1.5rem
}
.icon-xl {
  stroke-width:1.5;
  height:1.75rem;
  width:1.75rem
}
.icon-2xl {
  stroke-width:1.5;
  height:2rem;
  width:2rem
}
.icon-cover {
  stroke-width:1.5;
  height:234px;
  width:234px
}

.border-token-border-heavy {
  border-color: #5300e8;
  border-color: var(--border-heavy)
}

.border-token-border-light {
  border-color: #5300e8;
  border-color: var(--border-light)
}

.border-token-border-medium {
  border-color: #5300e8;
  border-color: var(--border-medium)
}

.border-token-surface-primary {
  border-color: #5300e8;
  border-color: var(--surface-primary)
}

.border-token-surface-secondary {
  border-color: var(--surface-secondary)
}

.border-token-surface-tertiary {
  border-color: #5300e8;
  border-color: var(--surface-tertiary)
}

.bg-token-surface-secondary {
  background-color: var(--surface-secondary);
}

@media (max-width: 640px) {
  .no-gradient-sm {
    background: none !important;
  }
}

.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  src: url("$fonts/Inter-Regular.woff2") format("woff2");
  size-adjust: 94%;
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: italic;
  font-weight: 400;
  src: url("$fonts/Inter-Italic.woff2") format("woff2");
  size-adjust: 94%;
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  src: url("$fonts/Inter-SemiBold.woff2") format("woff2");
  size-adjust: 94%;
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: italic;
  font-weight: 500;
  src: url("$fonts/Inter-SemiBoldItalic.woff2") format("woff2");
  size-adjust: 94%;
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  src: url("$fonts/Inter-Bold.woff2") format("woff2");
  size-adjust: 94%;
}

@font-face {
  font-display: swap;
  font-family: Inter;
  font-style: italic;
  font-weight: 600;
  src: url("$fonts/Inter-BoldItalic.woff2") format("woff2");
  size-adjust: 94%;
}

@font-face {
  font-display: swap;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 400;
  src: url("$fonts/roboto-mono-latin-400-normal.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 700;
  src: url("$fonts/roboto-mono-latin-700-normal.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Roboto Mono;
  font-style: italic;
  font-weight: 400;
  src: url("$fonts/roboto-mono-latin-400-italic.woff2") format("woff2")
}

/*

The default ChatGPT fonts, according to OpenAI's brand guidelines, are proprietary and require appropriate font license according to your use case.

They can be purchased here: https://klim.co.nz/buy/soehne/

The fonts in question are (9 total):

> - Söhne (Buch Kursiv, Buch, Halbfett Kursiv, Halbfett, Kraftig Kursiv, Kraftig, Mono Buch Kursiv, Mono Buch, Mono Halbfett)

If you have purchased a license, you can use the commented-out `@font-face` declarations below to include them in your project.

Step 1: Buy whatever license applies to you and allows use of `.woff2` font files (likely web font license).
Step 2: Place them in ./client/public/fonts/ directory.
Step 3: Replace the current `fontFamily` config in ./client/tailwind.config.cjs with the following:

```
    fontFamily: {
      sans: ['Söhne', 'sans-serif'],
      mono: ['Söhne Mono', 'monospace'],
    },
```

Step 4: Uncomment all Söhne font-face declarations below.
Step 5: rebuild frontend code: `npm run frontend` (or rebuild docker).

*/

/* @font-face {
  font-display: swap;
  font-family: Söhne;
  font-style: normal;
  font-weight: 400;
  src: url("$fonts/soehne-buch.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne;
  font-style: italic;
  font-weight: 400;
  src: url("$fonts/soehne-buch-kursiv.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne;
  font-style: normal;
  font-weight: 500;
  src: url("$fonts/soehne-kraftig.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne;
  font-style: italic;
  font-weight: 500;
  src: url("$fonts/soehne-kraftig-kursiv.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne;
  font-style: normal;
  font-weight: 600;
  src: url("$fonts/soehne-halbfett.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne;
  font-style: italic;
  font-weight: 600;
  src: url("$fonts/soehne-halbfett-kursiv.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne Mono;
  font-style: normal;
  font-weight: 400;
  src: url("$fonts/soehne-mono-buch.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne Mono;
  font-style: normal;
  font-weight: 700;
  src: url("$fonts/soehne-mono-halbfett.woff2") format("woff2")
}

@font-face {
  font-display: swap;
  font-family: Söhne Mono;
  font-style: italic;
  font-weight: 400;
  src: url("$fonts/soehne-mono-buch-kursiv.woff2") format("woff2")
} */

/* * {
  box-sizing: border-box;
  outline: 1px solid limegreen !important;
} */

/* p small {
  opacity: 0;
  animation: fadeIn 3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */

/* .LazyLoad {
  opacity: 0;
  transition: all 1s ease-in-out;
} */

select {
  --tw-shadow: 0 0 transparent;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%238e8ea0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E");
  background-position: right .5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  background-color: #5300e8;
  border-color: #5300e8;
  border-radius: 0;
  border-width: 1px;
  font-size: 1rem;
  line-height: 1.5rem;
}

.overflow-y-auto {
  overflow-y: overlay;
}

.overflow-x-auto {
  overflow-x: overlay;
}

.reset-rc-number-input input {
  width: 100%;
  border: none !important;
  background: transparent;
}

.reset-rc-number-input-text-right input {
  text-align: right;
}

.option-buttons {
  pointer-events: none;
  opacity: 0;
  transition: all 0.25s ease-in-out;
}

.option-buttons.full-opacity {
  pointer-events: fill;
  opacity: 1;
}

.option-buttons.show {
  pointer-events: fill;
  opacity: 1;
}

.options-bar {
  pointer-events: none;
  opacity: 0;
  transition: all 0.25s ease-in-out;
}

.options-bar.full-opacity {
  pointer-events: fill;
  opacity: 1;
}

.options-bar.show {
  pointer-events: fill;
  opacity: 0.3;
}

.hidden {
  display: none;
}

.creative-tab {
  /* background: linear-gradient(90deg, #904887 10.79%, #8B257E 87.08%); */
  background: linear-gradient(90deg, #5300e8 10.79%, #8B257E 87.08%);
}

.fast-tab {
  background: linear-gradient(90deg, #2870EA 10.79%, #1B4AEF 87.08%);
}

.balanced-tab {
  background: linear-gradient(90deg, #D7871A 10.79%, #9F6005 87.08%);
}

.precise-tab {
  background: linear-gradient(90deg, #006880 10.79%, #005366 87.08%)
}

p > small {
  opacity: 0;
  animation: fadein 3s forwards;
}

.fade-in {
  animation: fadeInWithOutTranslate 0.3s ease-in-out;
}

@keyframes fadeInWithOutTranslate {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

blockquote, dd, dl, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
	margin: 0;
}

.scroll-down-enter {
  opacity: 0;
}
/* .scroll-down-appear {
  opacity: 0;
} */

.scroll-down-enter-active {
  opacity: 1;
  transition: opacity 400ms;
}

.scroll-down-exit {
  opacity: 1;
}

.scroll-down-exit-active {
  opacity: 0;
  transition: opacity 400ms;
}

.blink {
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.cursorBlink {
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  79% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.blink2 {
  animation: blink 1500ms linear infinite;
}
@keyframes blink2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.prose {
  color:var(--tw-prose-body);
  max-width:65ch
 }
 .prose :where([class~=lead]):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-lead);
  font-size:1.25em;
  line-height:1.6;
  margin-bottom:1.2em;
  margin-top:1.2em
 }
 .prose :where(a):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-links);
  font-weight:500;
  text-decoration:underline
 }
 .prose :where(strong):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-bold);
  font-weight:600
 }
 .prose :where(a strong):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(blockquote strong):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(thead th strong):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(ul):not(:where([class~=not-prose] *)) {
  list-style-type:disc;
  margin-bottom:0.1em;
  margin-top:0.1em;
  padding-left:1.625em
 }
 .prose :where(ul>li):not(:where([class~=not-prose] *))::marker {
  color:var(--tw-prose-bullets)
 }
 .prose :where(hr):not(:where([class~=not-prose] *)) {
  border-color:var(--tw-prose-hr);
  border-top-width:1px;
  margin-bottom:3em;
  margin-top:3em
 }
 .prose :where(blockquote):not(:where([class~=not-prose] *)) {
  border-left-color:var(--tw-prose-quote-borders);
  border-left-width:.25rem;
  color:var(--tw-prose-quotes);
  font-style:italic;
  font-style:normal;
  font-weight:500;
  margin-bottom:1.6em;
  margin-top:1.6em;
  padding-left:1em;
  quotes:"\201C""\201D""\2018""\2019"
 }
 .prose :where(blockquote p:first-of-type):not(:where([class~=not-prose] *)):before {
  content:open-quote
 }
 .prose :where(blockquote p:last-of-type):not(:where([class~=not-prose] *)):after {
  content:close-quote
 }
 .prose :where(h1):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-headings);
  font-size:2.25em;
  font-weight:800;
  line-height:1.1111111;
  margin-bottom:.8888889em;
  margin-top:0
 }
 .prose :where(h1 strong):not(:where([class~=not-prose] *)) {
  color:inherit;
  font-weight:900
 }
 .prose :where(h2):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-headings);
  font-size:1.5em;
  font-weight:700;
  line-height:1.3333333;
  margin-bottom:1em;
  margin-top:2em
 }
 .prose :where(h2 strong):not(:where([class~=not-prose] *)) {
  color:inherit;
  font-weight:800
 }
 .prose :where(h3):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-headings);
  font-size:1.25em;
  font-weight:600;
  line-height:1.6;
  margin-bottom:.6em;
  margin-top:1.6em
 }
 .prose :where(h3 strong):not(:where([class~=not-prose] *)) {
  color:inherit;
  font-weight:700
 }
 .prose :where(h4):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-headings);
  font-weight:600;
  line-height:1.5;
  margin-bottom:.5em;
  margin-top:1.5em
 }
 .prose :where(h4 strong):not(:where([class~=not-prose] *)) {
  color:inherit;
  font-weight:700
 }
 .prose :where(img):not(:where([class~=not-prose] *)) {
  margin-bottom:2em;
  margin-top:2em
 }
 .prose :where(figure>*):not(:where([class~=not-prose] *)) {
  margin-bottom:0;
  margin-top:0
 }
 .prose :where(figcaption):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-captions);
  font-size:.875em;
  line-height:1.4285714;
  margin-top:.8571429em
 }
 .prose :where(code):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-code);
  font-size:.875em;
  font-weight:600;
 }
 .prose :where(code):not(:where([class~=not-prose] *)):before {
  content:"`"
 }
 .prose :where(code):not(:where([class~=not-prose] *)):after {
  content:"`"
 }
 .prose :where(a code):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(h1 code):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(h2 code):not(:where([class~=not-prose] *)) {
  color:inherit;
  font-size:.875em
 }
 .prose :where(h3 code):not(:where([class~=not-prose] *)) {
  color:inherit;
  font-size:.9em
 }
 .prose :where(h4 code):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(blockquote code):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(thead th code):not(:where([class~=not-prose] *)) {
  color:inherit
 }
 .prose :where(pre):not(:where([class~=not-prose] *)) {
  background-color:transparent;
  border-radius:.375rem;
  color:currentColor;
  font-size:.875em;
  font-weight:400;
  line-height:1.7142857;
  margin:0;
  overflow-x:auto;
  padding:0
 }
 .prose :where(pre code):not(:where([class~=not-prose] *)) {
  background-color:transparent;
  border-radius:0;
  border-width:0;
  color:inherit;
  font-family:inherit;
  font-size:inherit;
  font-weight:inherit;
  line-height:inherit;
  padding:0
 }
 .prose :where(pre code):not(:where([class~=not-prose] *)):before {
  content:none
 }
 .prose :where(pre code):not(:where([class~=not-prose] *)):after {
  content:none
 }
 .prose :where(table):not(:where([class~=not-prose] *)) {
  font-size:.875em;
  line-height:1.7142857;
  margin-bottom:2em;
  margin-top:2em;
  table-layout:auto;
  text-align:left;
  width:100%
 }
 .prose :where(thead):not(:where([class~=not-prose] *)) {
  border-bottom-color:var(--tw-prose-th-borders);
  border-bottom-width:1px
 }
 .prose :where(thead th):not(:where([class~=not-prose] *)) {
  color:var(--tw-prose-headings);
  font-weight:600;
  padding-bottom:.5714286em;
  padding-left:.5714286em;
  padding-right:.5714286em;
  vertical-align:bottom
 }
 .prose :where(tbody tr):not(:where([class~=not-prose] *)) {
  border-bottom-color:var(--tw-prose-td-borders);
  border-bottom-width:1px
 }
 .prose :where(tbody tr:last-child):not(:where([class~=not-prose] *)) {
  border-bottom-width:0
 }
 .prose :where(tbody td):not(:where([class~=not-prose] *)) {
  vertical-align:baseline
 }
 .prose :where(tfoot):not(:where([class~=not-prose] *)) {
  border-top-color:var(--tw-prose-th-borders);
  border-top-width:1px
 }
 .prose :where(tfoot td):not(:where([class~=not-prose] *)) {
  vertical-align:top
 }
 .prose {
  --tw-prose-body:#5300e8;
  --tw-prose-headings:#5300e8;
  --tw-prose-lead:#5300e8;
  --tw-prose-links:#5300e8;
  --tw-prose-bold:#5300e8;
  --tw-prose-counters:#5300e8;
  --tw-prose-bullets:#5300e8;
  --tw-prose-hr:#5300e8;
  --tw-prose-quotes:#111827;
  --tw-prose-quote-borders:#5300e8;
  --tw-prose-captions:#5300e8;
  --tw-prose-code:#5300e8;
  --tw-prose-pre-code:#5300e8;
  --tw-prose-pre-bg:#5300e8;
  --tw-prose-th-borders:#5300e8;
  --tw-prose-td-borders:#5300e8;
  --tw-prose-invert-body:#5300e8;
  --tw-prose-invert-headings:#5300e8;
  --tw-prose-invert-lead:#5300e8;
  --tw-prose-invert-links:#5300e8;
  --tw-prose-invert-bold:#5300e8;
  --tw-prose-invert-counters:#5300e8;
  --tw-prose-invert-bullets:#5300e8;
  --tw-prose-invert-hr:#5300e8;
  --tw-prose-invert-quotes:#5300e8;
  --tw-prose-invert-quote-borders:#5300e8;
  --tw-prose-invert-captions:#5300e8;
  --tw-prose-invert-code:#5300e8;
  --tw-prose-invert-pre-code:#5300e8;
  --tw-prose-invert-pre-bg:#5300e8;
  --tw-prose-invert-th-borders:#5300e8;
  --tw-prose-invert-td-borders:#5300e8;
  font-size:1rem;
  line-height:1.75
 }
 .prose :where(p):not(:where([class~=not-prose] *)) {
  margin-bottom: 1.25em;
  margin-top: 1.25em
 }
 .prose :where(video):not(:where([class~=not-prose] *)) {
  margin-bottom:2em;
  margin-top:2em
 }
 .prose :where(figure):not(:where([class~=not-prose] *)) {
  margin-bottom:2em;
  margin-top:2em
 }
 .prose :where(li):not(:where([class~=not-prose] *)) {
  margin-bottom:.5em;
  margin-top:.5em
 }
 .prose :where(ul>li):not(:where([class~=not-prose] *)) {
  padding-left:.375em
 }
 .prose :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
  margin-bottom:.75em;
  margin-top:.75em
 }
 .prose :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.25em
 }
 .prose :where(hr+*):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose :where(h2+*):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose :where(h3+*):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose :where(h4+*):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose :where(thead th:first-child):not(:where([class~=not-prose] *)) {
  padding-left:0
 }
 .prose :where(thead th:last-child):not(:where([class~=not-prose] *)) {
  padding-right:0
 }
 .prose :where(tbody td,
 tfoot td):not(:where([class~=not-prose] *)) {
  padding:.5714286em
 }
 .prose :where(tbody td:first-child,
 tfoot td:first-child):not(:where([class~=not-prose] *)) {
  padding-left:0
 }
 .prose :where(tbody td:last-child,
 tfoot td:last-child):not(:where([class~=not-prose] *)) {
  padding-right:0
 }
 .prose :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:0
 }
 .prose-sm :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
  margin-bottom:.5714286em;
  margin-top:.5714286em
 }
 .prose-sm :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.1428571em
 }
 .prose-sm :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.1428571em
 }
 .prose-sm :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose-sm :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:0
 }
 .prose-base :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
  margin-bottom:.75em;
  margin-top:.75em
 }
 .prose-base :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose-base :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.25em
 }
 .prose-base :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose-base :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:0
 }
 .prose-lg :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
  margin-bottom:.8888889em;
  margin-top:.8888889em
 }
 .prose-lg :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.3333333em
 }
 .prose-lg :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.3333333em
 }
 .prose-lg :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose-lg :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:0
 }
 .prose-xl :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
  margin-bottom:.8em;
  margin-top:.8em
 }
 .prose-xl :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.2em
 }
 .prose-xl :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.2em
 }
 .prose-xl :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose-xl :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:0
 }
 .prose-2xl :where(.prose>ul>li p):not(:where([class~=not-prose] *)) {
  margin-bottom:.8333333em;
  margin-top:.8333333em
 }
 .prose-2xl :where(.prose>ul>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.3333333em
 }
 .prose-2xl :where(.prose>ul>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.3333333em
 }
 .prose-2xl :where(.prose>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
 }
 .prose-2xl :where(.prose>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:0
 }

code,
pre {
  font-family: Consolas, Söhne Mono, Monaco, Andale Mono, Ubuntu Mono, monospace !important;
}
code[class='language-plaintext'] {
  white-space: pre-line;
}
code.hljs,
code[class*='language-'],
pre[class*='language-'] {
  word-wrap: normal;
  background: none;
  color: #5300e8;
  -webkit-hyphens: none;
  hyphens: none;
  font-size: .85rem;
  line-height: 1.5;
  tab-size: 4;
  text-align: left;
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
}
pre[class*='language-'] {
  border-radius: 0.3em;
  overflow: auto;
}
:not(pre) > code.hljs,
:not(pre) > code[class*='language-'] {
  border-radius: 0.3em;
  padding: 0.1em;
  white-space: normal;
}
.hljs-comment {
  color: hsla(0, 68%, 62%, 0.983);
}
.hljs-meta {
  color: hsla(0, 91%, 48%, 0.925);
}
.hljs-built_in,
.hljs-class .hljs-title {
  color: #5300e8;
}
.hljs-doctag,
.hljs-formula,
.hljs-keyword,
.hljs-literal {
  color: #5300e8;
}
.hljs-addition,
.hljs-attribute,
.hljs-meta-string,
.hljs-regexp,
.hljs-string {
  color: #5300e8;
}
.hljs-attr,
.hljs-number,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-template-variable,
.hljs-type,
.hljs-variable {
  color: #5300e8;
}
.hljs-bullet,
.hljs-link,
.hljs-selector-id,
.hljs-symbol,
.hljs-title {
  color: #5300e8;
}

[role='button'],
button {
  cursor: pointer;
}

.btn {
  align-items:center;
  border-color:transparent;
  border-radius:.5rem;
  border-width:1px;
  display:inline-flex;
  font-size:.875rem;
  font-weight:500;
  line-height:1.25rem;
  padding:.5rem .75rem;
  pointer-events:auto;
  transition: all 0.1s ease-in-out;
}
.custom-btn {
  align-items: center;
  border-color: transparent;
  border-radius: 0.25rem;
  border-width: 1px;
  display: inline-flex;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.1s ease-in-out;
}
.btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.btn-primary {
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: rgba(0, 0, 255, var(--tw-bg-opacity));
  color: rgba(255, 0, 0, var(--tw-text-opacity));
}
.btn-primary:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 255, 0, var(--tw-bg-opacity));
}
.btn-primary:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
    var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width))
    var(--tw-ring-color);
  --tw-ring-offset-width: 2px;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 transparent;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
    var(--tw-shadow, 0 0 transparent);
}
.btn-primary.focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(255, 255, 0, var(--tw-ring-opacity));
}
.btn-primary:focus-visible {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgba(255, 255, 0, var(--tw-ring-opacity));
}
.btn-primary:disabled:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 165, 0, var(--tw-bg-opacity));
}
.btn-secondary {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: transparent;
  background-color: rgba(0, 0, 255, var(--tw-bg-opacity));
  color: rgba(255, 0, 0, var(--tw-text-opacity));
}
.btn-secondary:hover {
  --tw-bg-opacity: 1;
  border-color: rgba(255, 0, 0, 0.1);
  color: rgba(0, 255, 0, var(--tw-text-opacity));
  background-color: rgba(255, 255, 0, var(--tw-bg-opacity));
}
.dark .btn-secondary:hover {
  --tw-bg-opacity: 1;
  border-color: rgba(8, 82, 78, var(--tw-border-opacity));
  color: rgba(0, 255, 0, var(--tw-text-opacity));
  background-color: rgba(255, 255, 0, var(--tw-bg-opacity));
}
.btn-neutral {
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: rgba(0, 255, 0, var(--tw-bg-opacity));
  border-color: rgba(255, 0, 0, 0.904);
  border-width: 1px;
  color: rgba(255, 0, 0, var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.btn-neutral:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 255, 0, var(--tw-bg-opacity));
}
.dark .btn-neutral {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: transparent;
  border-color: rgba(0, 255, 0, var(--tw-border-opacity));
  color: rgba(255, 0, 0, var(--tw-text-opacity));
}
.dark .btn-neutral:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 0, 0, var(--tw-bg-opacity));
}
.btn-small {
  padding: 0.25rem 0.5rem;
}

.from-token-surface-secondary {
  --tw-gradient-from: var(--surface-secondary) var(--tw-gradient-from-position);
  --tw-gradient-to: hsla(0, 92%, 48%, 0.914) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to);
}

/* Webkit scrollbar */
::-webkit-scrollbar {
  height: 0.1em;
  width: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(255, 38, 0);
  border-radius: 9999px;
}

.dark ::-webkit-scrollbar-thumb {
  background-color: hsla(0, 100%, 50%, 0.887);
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 9999px;
}

.scrollbar-transparent::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.dark .scrollbar-transparent::-webkit-scrollbar-thumb {
  background-color: transparent;
}

body,
html {
  height: 100%;
}

.dark body,
.dark html {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 0, 0, var(--tw-bg-opacity));
}

#__next,
#root {
  height: 100%;
}

.markdown ul li {
  display: block;
  margin: 0;
  position: relative;
}

.markdown ul li:before {
  content: '•';
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: -1rem;
  position: absolute;
}

.markdown {
  max-width: none;
}

.markdown h1,
.markdown h2 {
  font-weight: 600;
}

.markdown h2 {
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.markdown h3 {
  font-weight: 600;
}

.markdown h3,
.markdown h4 {
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.markdown h4 {
  font-weight: 400;
}

.markdown h5 {
  font-weight: 600;
}

.markdown blockquote {
  --tw-border-opacity: 1;
  border-color: rgba(255, 255, 0, var(--tw-border-opacity));
  border-left-width: 2px;
  line-height: 1rem;
  padding-left: 1rem;
}

/* .markdown ol, */
.markdown ul {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

.markdown table {
  --tw-border-spacing-x: 0px;
  --tw-border-spacing-y: 0px;
  border-collapse: separate;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
  width: 100%;
}

.markdown th {
  background-color: rgba(0, 255, 0, 1);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-top-width: 1px;
  padding: 0.25rem 0.75rem;
}

.markdown th:first-child {
  border-top-left-radius: 0.375rem;
}

.markdown th:last-child {
  border-right-width: 1px;
  border-top-right-radius: 0.375rem;
}

.markdown td {
  border-bottom-width: 1px;
  border-left-width: 1px;
  padding: 0.25rem 0.75rem;
}

.markdown td:last-child {
  border-right-width: 1px;
}

.markdown tbody tr:last-child td:first-child {
  border-bottom-left-radius: 0.375rem;
}

.markdown tbody tr:last-child td:last-child {
  border-bottom-right-radius: 0.375rem;
}

.markdown a {
  text-decoration-line: underline;
  text-underline-offset: 2px;
}

.animate-flash {
  -webkit-animation: flash 2s steps(60, start);
  animation: flash 2s steps(60, start);
}

@-webkit-keyframes flash {
  0% {
    background-color: hsla(0, 100%, 51%, 0.961);
  }
}

@keyframes flash {
  0% {
    background-color: hsl(0, 86%, 49%);
  }
}

.truncate {
  overflow: hidden;
  white-space: nowrap;
}

.text-ellipsis,
.truncate {
  text-overflow: ellipsis;
}

.group:hover .group-hover\:visible {
  visibility: visible;
}
.group:hover .group-hover\:from-\[\#\] {
  --tw-gradient-from: #5300e8;
  --tw-gradient-to: rgba(255, 0, 0, 1);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.group:hover .group-hover\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgba(255, 0, 0, var(--tw-text-opacity));
}
.group:hover .group-hover\:text-gray-700 {
  --tw-text-opacity: 1;
  color: rgba(255, 0, 0, var(--tw-text-opacity));
}
.dark .dark\:prose-invert {
  --tw-prose-body: var(--tw-prose-invert-body);
  --tw-prose-headings: var(--tw-prose-invert-headings);
  --tw-prose-lead: var(--tw-prose-invert-lead);
  --tw-prose-links: var(--tw-prose-invert-links);
  --tw-prose-bold: var(--tw-prose-invert-bold);
  --tw-prose-counters: var(--tw-prose-invert-counters);
  --tw-prose-bullets: var(--tw-prose-invert-bullets);
  --tw-prose-hr: var(--tw-prose-invert-hr);
  --tw-prose-quotes: var(--tw-prose-invert-quotes);
  --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);
  --tw-prose-captions: var(--tw-prose-invert-captions);
  --tw-prose-code: var(--tw-prose-invert-code);
  --tw-prose-pre-code: var(--tw-prose-invert-pre-code);
  --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);
  --tw-prose-th-borders: var(--tw-prose-invert-th-borders);
  --tw-prose-td-borders: var(--tw-prose-invert-td-borders);
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes spin {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

.form-input,
.form-multiselect,
.form-select,
.form-textarea {
 --tw-shadow:0 0 transparent;
 -webkit-appearance:none;
 appearance:none;
 background-color:#5300e8;
 border-color:#f0088f;
 border-radius:0;
 border-width:1px;
 font-size:1rem;
 line-height:1.5rem;
 padding:.5rem .75rem
}
.form-input:focus,
.form-multiselect:focus,
.form-select:focus,
.form-textarea:focus {
 --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);
 --tw-ring-offset-width:0px;
 --tw-ring-offset-color:#5300e8;
 --tw-ring-color:#5300e8;
 --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
 --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
 border-color:#5300e8;
 box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);
 outline:2px solid transparent;
 outline-offset:2px
}
.form-input::-webkit-input-placeholder,
.form-textarea::-webkit-input-placeholder {
 color:#5300e8;
 opacity:1
}
.form-input::placeholder,
.form-textarea::placeholder {
 color:#5300e8;
 opacity:1
}
.form-input::-webkit-datetime-edit-fields-wrapper {
 padding:0
}
.form-input::-webkit-date-and-time-value {
 min-height:1.5em
}
.form-input::-webkit-datetime-edit,
.form-input::-webkit-datetime-edit-day-field,
.form-input::-webkit-datetime-edit-hour-field,
.form-input::-webkit-datetime-edit-meridiem-field,
.form-input::-webkit-datetime-edit-millisecond-field,
.form-input::-webkit-datetime-edit-minute-field,
.form-input::-webkit-datetime-edit-month-field,
.form-input::-webkit-datetime-edit-second-field,
.form-input::-webkit-datetime-edit-year-field {
 padding-bottom:0;
 padding-top:0
}

.grow {
 flex-grow:1
}

.transform {
 -webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
 transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
body,
html {
 height:100%
}
.dark body,
.dark html {
 --tw-bg-opacity:1;
 background-color:rgba(255,255,0,var(--tw-bg-opacity))
}
#__next,
#root {
 height:100%
}


.markdown ul li {
 display:block;
 margin:0;
 position:relative
}
.markdown ul li:before {
 content:"•";
 font-size:.875rem;
 line-height:1.25rem;
 margin-left:-1rem;
 position:absolute
}
.markdown {
 max-width:none
}
.markdown h1,
.markdown h2 {
 font-weight:600
}
.markdown h2 {
 margin-bottom:1rem;
 margin-top:2rem
}
.markdown h3 {
 font-weight:600
}
.markdown h3,
.markdown h4 {
 margin-bottom:.5rem;
 margin-top:1rem
}
.markdown h4 {
 font-weight:400
}
.markdown h5 {
 font-weight:600
}
.markdown blockquote {
 --tw-border-opacity:1;
 border-color:rgba(0,0,255,var(--tw-border-opacity));
 border-left-width:2px;
 line-height:1rem;
 padding-left:1rem
}
.markdown table {
 --tw-border-spacing-x:0px;
 --tw-border-spacing-y:0px;
 border-collapse:separate;
 border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);
 width:100%
}
.markdown th {
 background-color:rgba(0,0,255,1);
 border-bottom-width:1px;
 border-left-width:1px;
 border-top-width:1px;
 padding:.25rem .75rem
}
.markdown th:first-child {
 border-top-left-radius:.375rem
}
.markdown th:last-child {
 border-right-width:1px;
 border-top-right-radius:.375rem
}
.markdown td {
 border-bottom-width:1px;
 border-left-width:1px;
 padding:.25rem .75rem
}
.markdown td:last-child {
 border-right-width:1px
}
.markdown tbody tr:last-child td:first-child {
 border-bottom-left-radius:.375rem
}
.markdown tbody tr:last-child td:last-child {
 border-bottom-right-radius:.375rem
}
.markdown a {
 text-decoration-line:underline;
 text-underline-offset:2px
}
.conversation-item-time:before {
 content:attr(data-time)
}
.tooltip-label:before {
 content:attr(data-content)
}
button.scroll-convo {
 display:none
}
@-webkit-keyframes blink {
 to {
  visibility:hidden
 }
}
@keyframes blink {
 to {
  visibility:hidden
 }
}
.animate-flash {
 -webkit-animation:flash 2s steps(60,start);
 animation:flash 2s steps(60,start)
}
@-webkit-keyframes flash {
 0% {
  background-color:hsl(0, 95%, 49%)
 }
}
@keyframes flash {
 0% {
  background-color:hsla(0, 95%, 49%, 0.995)
 }
}
.hidden-visibility {
  visibility: hidden;
}

.toast-root {
  align-items:center;
  display:flex;
  flex-direction:column;
  height:0;
  transition:all .24s cubic-bezier(0,0,.2,1)
}

.toast-root[data-state=open] {
  -webkit-animation:toast-open .24s cubic-bezier(.175,.885,.32,1.175) both;
  animation:toast-open .24s cubic-bezier(.175,.885,.32,1.175) both
}
.toast-root[data-state=closed] {
  -webkit-animation:toast-close .12s cubic-bezier(.4,0,1,1) both;
  animation:toast-close .12s cubic-bezier(.4,0,1,1) both
}
.toast-root .alert-root {
  box-shadow:0 0 1px rgba(255,0,0,1),0 5px 8px -4px rgba(67,90,111,1);
  flex-shrink:0;
  pointer-events:all
}

@-webkit-keyframes toast-open {
  0% {
    opacity:0;
    -webkit-transform:translateY(-100%);
    transform:translateY(-100%)
  }
  to {
    -webkit-transform:translateY(0);
    transform:translateY(0)
  }
}
@keyframes toast-open {
  0% {
    opacity:0;
    -webkit-transform:translateY(-100%);
    transform:translateY(-100%)
  }
  to {
    -webkit-transform:translateY(0);
    transform:translateY(0)
  }
}
@-webkit-keyframes toast-close {
  0% {
    opacity:1
  }
  to {
    opacity:0
  }
}
@keyframes toast-close {
  0% {
    opacity:1
  }
  to {
    opacity:0
  }
}

@-webkit-keyframes pulseSize {
  0%,
  to {
    -webkit-transform:scaleX(1);
    transform:scaleX(1)
  }
  50% {
    -webkit-transform:scale3d(1.25,1.25,1);
    transform:scale3d(1.25,1.25,1)
  }
}
@keyframes pulseSize {
  0%,
  to {
    -webkit-transform:scaleX(1);
    transform:scaleX(1)
  }
  50% {
    -webkit-transform:scale3d(1.25,1.25,1);
    transform:scale3d(1.25,1.25,1)
  }
}
.result-thinking:empty:last-child:after {
  -webkit-font-smoothing:subpixel-antialiased;
  -webkit-animation:pulseSize 1.25s ease-in-out infinite;
  animation:pulseSize 1.25s ease-in-out infinite;
  -webkit-backface-visibility:hidden;
  backface-visibility:hidden;
  background-color:#5300e8;
  background-color:var(--text-primary);
  border-radius:50%;
  box-sizing:border-box;
  content:" ";
  display:block;
  height:12px;
  position:absolute;
  top:-11px;
  -webkit-transform:translateZ(0);
  transform:translateZ(0);
  -webkit-transform-origin:center;
  transform-origin:center;
  width:12px;
  will-change:transform
}

.shadow-stroke {
  position:relative
}
.shadow-stroke:after {
  --tw-shadow:inset 0 0 0 1px rgba(236, 20, 20, 1);
  --tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color);
  border-radius:9999px;
  bottom:0;
  content:"";
  left:0;
  position:absolute;
  right:0;
  top:0
}
.dark .shadow-stroke:after,
.shadow-stroke:after {
  box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);
  box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)
}
.dark .shadow-stroke:after {
  --tw-shadow:inset 0 0 0 1px hsl(0, 100%, 50%);
  --tw-shadow-colored:inset 0 0 0 1px var(--tw-shadow-color)
}

.assistant-item {
  position: relative;
}

.assistant-item:after {
  --tw-shadow: inset 0 0 0 1px rgba(220, 37, 13, 0.903);
  --tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color);
  border-radius: 9999px;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
}

.dark .assistant-item:after {
  --tw-shadow: inset 0 0 0 1px rgba(255, 0, 0, 0.434);
  --tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color);
}

.result-streaming>:not(ol):not(ul):not(pre):last-child:after,
.result-streaming>pre:last-child code:after {
  display: inline-block;
  content:"⬤";
  width: 12px;
  height: 12px;
  font-family:system-ui,Inter,Söhne Circle,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
  line-height:normal;
  margin-left:.25rem;
  vertical-align:middle;
  font-size: 0.5rem;
}

@supports (selector(:has(*))) {
  .result-streaming>ol:last-child>li:last-child>ol:last-child>li:last-child:after,
  .result-streaming>ol:last-child>li:last-child>ol:last-child>li:last-child>ol:last-child>li:last-child:after,
  .result-streaming>ol:last-child>li:last-child>ol:last-child>li:last-child>ul:last-child>li:last-child:after,
  .result-streaming>ol:last-child>li:last-child>ul:last-child>li:last-child:after,
  .result-streaming>ol:last-child>li:last-child>ul:last-child>li:last-child>ol:last-child>li:last-child:after,
  .result-streaming>ol:last-child>li:last-child>ul:last-child>li:last-child>ul:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child>ol:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child>ol:last-child>li:last-child>ol:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child>ol:last-child>li:last-child>ul:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child>ul:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child>ul:last-child>li:last-child>ol:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child>ul:last-child>li:last-child>ul:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child[*|\:not-has\(]:after {
    content:"⬤";
    font-family:system-ui,Inter,Söhne Circle,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    line-height:normal;
    margin-left:.25rem;
    vertical-align:middle;
    font-size: 0.5rem;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
  .result-streaming>ul:last-child>li:last-child:not(:has(*>li)):after {
    content:"⬤";
    font-family:system-ui,Inter,Söhne Circle,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    line-height:normal;
    margin-left:.25rem;
    vertical-align:middle;
    font-size: 0.5rem;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
  .result-streaming>ol:last-child>li:last-child[*|\:not-has\(]:after {
    content:"⬤";
    font-family:system-ui,Inter,Söhne Circle,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    line-height:normal;
    margin-left:.25rem;
    vertical-align:middle;
    font-size: 0.5rem;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
  .result-streaming>ol:last-child>li:last-child:not(:has(*>li)):after {
    content:"⬤";
    font-family:system-ui,Inter,Söhne Circle,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    line-height:normal;
    margin-left:.25rem;
    vertical-align:middle;
    font-size: 0.5rem;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
}
@supports not (selector(:has(*))) {
  .result-streaming>ol:last-child>li:last-child:after,
  .result-streaming>ul:last-child>li:last-child:after {
    content:"⬤";
    font-family:system-ui,Inter,Söhne Circle,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    line-height:normal;
    margin-left:.25rem;
    vertical-align:middle;
    font-size: 0.5rem;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
}

.webkit-dark-styles,
.webkit-dark-styles:focus {
  background-clip: content-box;
  -webkit-box-shadow: 0 0 0 50vh #5300e8 inset;
}

.dark .webkit-dark-styles,
.dark .webkit-dark-styles:focus {
  -webkit-text-fill-color: #fff;
  background-clip: content-box;
  -webkit-box-shadow: 0 0 0 50vh #e603ff inset;
}

/* Ordered Listing */
.prose :where(ol):not(:where([class~=not-prose] *)) {
  list-style-type:decimal;
  margin-bottom:1.25em;
  margin-top:0;
  padding-left:1.625em
}
.prose :where(ol[type=A]):not(:where([class~=not-prose] *)) {
  list-style-type:upper-alpha
}
.prose :where(ol[type=a]):not(:where([class~=not-prose] *)) {
  list-style-type:lower-alpha
}
.prose :where(ol[type=A s]):not(:where([class~=not-prose] *)) {
  list-style-type:upper-alpha
}
.prose :where(ol[type=a s]):not(:where([class~=not-prose] *)) {
  list-style-type:lower-alpha
}
.prose :where(ol[type=I]):not(:where([class~=not-prose] *)) {
  list-style-type:upper-roman
}
.prose :where(ol[type=i]):not(:where([class~=not-prose] *)) {
  list-style-type:lower-roman
}
.prose :where(ol[type=I s]):not(:where([class~=not-prose] *)) {
  list-style-type:upper-roman
}
.prose :where(ol[type=i s]):not(:where([class~=not-prose] *)) {
  list-style-type:lower-roman
}
.prose :where(ol[type="1"]):not(:where([class~=not-prose] *)) {
  list-style-type:decimal
}
.prose :where(ol>li):not(:where([class~=not-prose] *))::marker {
  color:var(--tw-prose-counters);
  font-weight:400
}
.prose :where(ol>li):not(:where([class~=not-prose] *)) {
  padding-left:.375em
}
.prose :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
}
.prose :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.25em
}
.prose :where(ul ul,
ul ol,
ol ul,
ol ol):not(:where([class~=not-prose] *)) {
  margin-bottom:.75em;
  margin-top:.75em
}
.prose-sm :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.1428571em
}
.prose-sm :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.1428571em
}
.prose-base :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:0
}
.prose-base :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.25em
}
.prose-lg :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.3333333em
}
.prose-lg :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.3333333em
}
.prose-xl :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.2em
}
.prose-xl :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.2em
}
.prose-2xl :where(.prose>ol>li>:first-child):not(:where([class~=not-prose] *)) {
  margin-top:1.3333333em
}
.prose-2xl :where(.prose>ol>li>:last-child):not(:where([class~=not-prose] *)) {
  margin-bottom:1.3333333em
}

.markdown .prose ol,
.markdown .prose p,
.markdown .prose ul {
  margin-bottom:1rem
}
.markdown .prose ol:last-child,
.markdown .prose p:last-child,
.markdown .prose ul:last-child {
  margin-bottom:0
}
.markdown .prose ol,
.markdown .prose ul {
  display:contents;
  list-style-position:inside;
  list-style-type:none;
  margin-top:0
}
.markdown .prose ol>li,
.markdown .prose ul>li {
  margin-bottom:0;
  margin-top:0;
  position:relative
}
.markdown .prose ol>li[\:has\(\.title-citation\)],
.markdown .prose ul>li[\:has\(\.title-citation\)] {
  margin-bottom:.75rem
}
.markdown .prose ol>li:has(.title-citation),
.markdown .prose ul>li:has(.title-citation) {
  margin-bottom:.75rem
}
.markdown .prose ol>li[\:has\(\.title-citation\)]:last-child,
.markdown .prose ul>li[\:has\(\.title-citation\)]:last-child {
  margin-bottom:0
}
.markdown .prose ol>li:has(.title-citation):last-child,
.markdown .prose ul>li:has(.title-citation):last-child {
  margin-bottom:0
}
.markdown .prose ol>li:before,
.markdown .prose ul>li:before {
  left:0;
  position:absolute
}
.markdown .prose ol>li button,
.markdown .prose ol>li>a,
.markdown .prose ul>li button,
.markdown .prose ul>li>a {
  margin-bottom:0;
  margin-top:0
}
.markdown .prose ol>li p,
.markdown .prose ul>li p {
  margin-bottom:.5rem;
  margin-top:0
}
.markdown .prose ol>li ol,
.markdown .prose ol>li ul,
.markdown .prose ul>li ol,
.markdown .prose ul>li ul {
  display:block;
  margin-bottom:0;
  margin-left:1rem;
  margin-top:0;
  padding:0
}
.markdown .prose ol {
  counter-reset:list-counter
}
.markdown .prose ol>li {
  counter-increment:list-counter;
  padding-left:2rem
}
.markdown .prose ol>li:before {
  color:var(--text-secondary);
  content:counter(list-counter) "."
}
.markdown .prose ul>li {
  padding-left:1.5rem
}

/* Keyframes */

@keyframes slideFromLeftToRightAndFade {
  0% {
    opacity: 0;
    transform: translateX(-10%); 
  }
  20% {
    opacity: 1;
    transform: translateX(0); 
  }
  70% {
    opacity: 1;
    transform: translateX(0); 
  }
  75% {
    opacity: 1;
    transform: translateX(10%); 
  }
  80% {
    opacity: 0;
    transform: translateX(20%); 
  }
  85%, 100% {
    opacity: 0;
    transform: translateX(30%); 
  }
}

.slide-from-left {
  animation: slideFromLeftToRightAndFade 2s ease-in-out infinite;
}

@keyframes slideDownAndFadeOut {
  0% {
    opacity: 1;
    transform: translateY(-10%); 
  }
  20% {
    opacity: 1;
    transform: translateY(0); 
  }
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 1;
    transform: translateY(10%); 
  }
  80% {
    opacity: 0;
    transform: translateY(20%);
  }
  85%, 100% {
    opacity: 0;
    transform: translateY(30%); 
  }
}

.slide-to-down {
  animation: slideDownAndFadeOut 2s ease-in-out infinite;
}


@keyframes rotateAdjustAndBack {
  0% {
    transform: rotate(-33deg)  scale(1);
  }
  5% {
    transform: rotate(67deg)  scale(1);
  }
  6%, 20% {
    transform: rotate(57deg)  scale(1);
  }
  22% {
    transform: rotate(65deg)  scale(1);
  }
  26%, 40% {
    transform: rotate(-33deg)  scale(1);
  }
  42% {
    transform: rotate(-40deg)  scale(1);
  }
  45%, 75% {
    transform: rotate(30deg)  scale(0.7);
  }
  77%, 85% {
    transform: rotate(57deg)  scale(1);
  }
  87% {
    transform: rotate(65deg)  scale(1); 
  }
  90%,100% {
    transform: rotate(-33deg)  scale(1);
  }
}

.rotate-adjust-and-back {
  animation: rotateAdjustAndBack 10s ease-in-out infinite;
  transform-origin: 50% 50%;
}

@keyframes moonRise {
  0% {
    transform: translate(4px, 1px) rotate(-45deg);
    opacity: 0;
  }
  10% {
    transform: translate(4px, 1px) rotate(-45deg);
    opacity: 0;
  }
  20% {
    transform: translate(0, 0px) rotate(34deg);
    opacity: 1;
  }
  50% {
    transform: translate(0, 0px) rotate(34deg);
    opacity: 1;
  }
  60%,100% {
    transform: translate(0, 0px) rotate(34deg);
    opacity: 1;
  }
}

.moon-rise {
  animation: moonRise 4s ease-in-out infinite; /* 'forwards' mantém a lua na posição final após a animação */
  transform-origin: 45% 50%; /* Ajuste dependendo da posição relativa do morro */
}

@keyframes moveUp {
  0% {
    transform: translateY(0.5px); /* Move um pouco para cima */
    opacity: 0.8;
  }
  10% {
    transform: translateY(0.5px); /* Move um pouco para cima */
    opacity: 1;
  }
  20% {
    transform: translateY(0px); /* Move um pouco para cima */
    opacity: 1;
  }
  50% {
    transform: translateY(0px); /* Move um pouco para cima */
    opacity: 1;
  }
  60%,100% {
    transform: translateY(0px); /* Move um pouco para cima */
    opacity: 1;
  }
}

.move-up {
  animation: moveUp 4s ease-in-out infinite;
  
}
