import { css } from 'frontity';

// import * as stylesConfig from '../../styles/config';

const styles = css`
  &.-landscape {
    background-color: red;

    & .image__wrapper {
      background-color: var(--color-grey-light);
      height: 0;
      padding-bottom: 56.25%;
      position: relative;

      & > img,
      & > noscript img,
      & > video,
      & > iframe,
      & > object,
      & > embed {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }
`;

export default styles;
