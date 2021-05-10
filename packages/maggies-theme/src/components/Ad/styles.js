import { css } from 'frontity';

// import * as stylesConfig from '../../styles/config';

const styles = css`
  &.advertisement {
    background-color: var(--color-background-focus);
    height: 150px;
    padding: var(--spacing-padding) 0;
    position: sticky;
    text-align: center;
    top: var(--spacing-internal);
    width: 100%;
  }
`;

export default styles;
