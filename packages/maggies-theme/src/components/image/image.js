import React from 'react';
import classNames from 'classnames';
import { css } from "frontity";

import styles from './styles';

const Image = ({ src, alt, isLandscape, extraClassNames }) => {
  return (
    <div
      css={css(styles)}
      className={classNames({
        'image': true,
        '-landscape': isLandscape,
        ...extraClassNames,
      })}
    >
      <div className="image__wrapper">
        <img
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default Image;
