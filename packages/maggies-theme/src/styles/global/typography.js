import { css } from 'frontity';

const typography = css`
  h1 {
    font-size: var(--font-size-title-1);
    line-height: var(--font-size-line-height);
  }

  a {
    color: var(--color-base-link);
    transition: all ease-in-out var(--transition-time);

    &:hover,
    &:focus {
      color: var(--color-base-link-hover);
      transition: all ease-in-out var(--transition-time);
    }
  }

  .-has-font-size-small {
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
  }
`;

export default typography;
