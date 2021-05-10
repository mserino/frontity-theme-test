import React from 'react';
import { connect } from 'frontity';

import styles from './styles';

const Pagination = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <div className="pagination" css={styles}>
      {data.previous && (
        <button
          className="pagination__button"
          onClick={() => {
            actions.router.set(data.previous)
          }}
        >
          Prev
        </button>
      )}
      {data.next && (
        <button
          className="pagination__button"
          onClick={() => {
            actions.router.set(data.next)
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default connect(Pagination);
