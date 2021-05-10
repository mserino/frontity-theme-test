import { css } from 'frontity';

const styles = css`
  &.pagination {
    display: flex;
    justify-content: space-around;
    margin: var(--spacing-components) 0;

    & .pagination__button {
      background-color: var(--color-carolina-blue);
      border: 0;
      color: var(--color-white);
      cursor: pointer;
      font-weight: var(--font-weight-bold);
      padding: var(--spacing-padding);

      &:hover,
      &:focus {
        background-color: var(--color-orange-web);
      }
    }
  }
`;

export default styles;
