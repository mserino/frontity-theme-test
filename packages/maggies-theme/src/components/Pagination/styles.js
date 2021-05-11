import { css } from 'frontity';

const styles = css`
  &.pagination {
    display: flex;
    justify-content: space-around;
    margin: var(--spacing-components) 0;

    & .pagination__button {
      background-color: var(--color-button-primary-bg);
      border: 0;
      border-radius: var(--border-radius);
      color: var(--color-button-primary-text);
      cursor: pointer;
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      line-height: var(--line-height-small);
      padding: var(--spacing-padding);
      text-transform: uppercase;
      transition: all ease-in-out var(--transition-time);

      &:hover,
      &:focus {
        background-color: var(--color-button-primary-bg-hover);
        transition: all ease-in-out var(--transition-time);
      }
    }
  }
`;

export default styles;
