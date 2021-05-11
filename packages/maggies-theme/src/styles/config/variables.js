import { css } from 'frontity';

const variables = css`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-orange-web: #FFA400;
    --color-carolina-blue: #009FFD;
    --color-st-patricks-blue: #2A2A72;
    --color-raisin-black: #232528;
    --color-alice-blue: #EAF6FF;
    --color-grey-very-light: #F2F2F2;
    --color-grey-light: #D5D4D4;
    --color-grey-dim: #686868;
    --color-grey-eclipse: #393939;

    --color-base-font: var(--color-raisin-black);
    --color-base-link: var(--color-st-patricks-blue);
    --color-base-link-hover: var(--color-carolina-blue);
    --color-background-main: var(--color-alice-blue);
    --color-background-focus: var(--color-grey-very-light);

    --color-button-primary-text: var(--color-white);
    --color-button-primary-bg: var(--color-st-patricks-blue);
    --color-button-primary-bg-hover: var(--color-orange-web);

    --transition-time: .2s;
    --border-radius: 3px;

    --max-width: 1260px;

    --spacing-base: 4px;
    --spacing-base-2x: 8px;
    --spacing-base-3x: 12px;
    --spacing-base-4x: 16px;
    --spacing-base-5x: 20px;
    --spacing-base-6x: 24px;
    --spacing-base-7x: 28px;
    --spacing-base-8x: 32px;
    --spacing-base-9x: 36px;
    --spacing-base-10x: 40px;

    /**
    * Padding small: 8px;
    * Padding: 12px;
    * Padding large: 20px;
    * Vertical spacing small: 20px;
    * Vertical spacing large: 40px;
    */
    --spacing-padding-small: var(--spacing-base-2x);
    --spacing-padding: var(--spacing-base-3x);
    --spacing-padding-large: var(--spacing-base-5x);
    --spacing-vertical-small: var(--spacing-base-5x);
    --spacing-vertical-large: var(--spacing-base-10x);

    /**
    * Spacing between internal components: 8px;
    * Spacing between related components: 16px;
    * Spacing between unrelated components: 40px;
    */
    --spacing-internal: var(--spacing-base-2x);
    --spacing-related: var(--spacing-base-4x);
    --spacing-components: var(--spacing-base-10x);

    /* Typography */
    --font-size-base: 16px;
    --line-height-base: 20px;
    --font-size-small: 14px;
    --line-height-small: 18px;
    --font-size-smaller: 12px;
    --line-height-smaller: 16px;
    --font-size-large: 20px;
    --line-height-large: 24px;

    --font-size-title-1: 50px;
    --line-height-title-1: 50px;
    --font-size-title-2: 40px;
    --line-height-title-2: 40px;
    --font-size-title-3: 30px;
    --line-height-title-3: 30px;
    --font-size-title-4: 20px;
    --line-height-title-4: 20px;
    --font-size-title-5: 16px;
    --line-height-title-5: 16px;
    --font-size-title-6: 14px;
    --line-height-title-6: 14px;

    --font-weight-thin: 100;
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semi-bold: 600;
    --font-weight-bold: 700;
    --font-weight-extra-bold: 800;
    --font-weight-black: 900;

    /* Breakpoints */
    @custom-media --bp-small (min-width: 360px);
    @custom-media --bp-tablet (min-width: 768px);
    @custom-media --bp-header (min-width: 960px);
    @custom-media --bp-desktop (min-width: 1024px);
    @custom-media --bp-wide (min-width: 1260px);
  }
`;

export default variables;
