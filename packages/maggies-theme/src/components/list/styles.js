import { css } from 'frontity';

import * as stylesConfig from '../../styles/config';

const styles = css`
  & .archive {
    @media ${stylesConfig.mq.tablet} {
      display: grid;
      grid-gap: var(--spacing-components);
      grid-template-columns: repeat(4, 1fr);
    }

    & .archive__date {
      display: block;
      font-weight: var(--font-weight-bold);
      margin-bottom: var(--spacing-internal);
      text-transform: uppercase;
    }

    & .archive__image {
      margin-bottom: var(--spacing-internal);
    }

    & .archive__item {
      @media ${stylesConfig.mq.tabletMax} {
        margin-bottom: var(--spacing-components);
      }
    }
  }
`;

export default styles;
