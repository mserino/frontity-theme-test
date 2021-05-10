import React from 'react';
import { Global, css } from "frontity";

import normalize from './config/normalize.css';
import gutenberg from './gutenberg/style.css';

import variables from './config/variables';
import body from './global/body';
import layout from './global/layout';
import typography from './global/typography';
import grid from './global/grid';

const GlobalStyles = () => {
  return (
    <>
      <Global styles={css(normalize)} />
      <Global styles={css(variables)} />
      <Global styles={css(gutenberg)} />
      <Global styles={css(typography)} />
      <Global styles={css(body)} />
      <Global styles={css(layout)} />
      <Global styles={css(grid)} />
    </>
  );
};

export default GlobalStyles;
