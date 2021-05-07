import { css } from 'frontity';

const styles = css`
  &.header {
    background-color: var(--color-background-main);
    padding: var(--spacing-vertical-large);

    & .header__nav ul {
      display: flex;
      list-style-type: none;
    }

    & .header__nav li {
      padding: 0 var(--spacing-padding-small);

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }
    }
  }
`;

export default styles;
