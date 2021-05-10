import React from 'react';
import classNames from 'classnames';
import { css } from "frontity";

import styles from './styles';

const Ad = ({ extraClassNames }) => {
  return (
    <div
      css={css(styles)}
      className={classNames({
        'advertisement': true,
        ...extraClassNames,
      })}
    >
      <div className="advertisement__wrapper">
        Advertisement
      </div>
    </div>
  );
};

export default Ad;
