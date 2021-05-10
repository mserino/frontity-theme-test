import { css } from 'frontity';

import * as stylesConfig from '../../styles/config';

const grid = css`
  .post-grid {
    @media ${stylesConfig.mq.tablet} {
      display: grid;
      grid-template-columns: 1.6fr 0.4fr;
      gap: var(--spacing-related);
      grid-template-areas:
        "Header Header"
        "Main Aside";
    }
  }

  .post-grid__header {
    grid-area: Header;
  }

  .post-grid__main {
    grid-area: Main;
  }

  .post-grid__aside {
    grid-area: Aside;
  }
`;

export default grid;
