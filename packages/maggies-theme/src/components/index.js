import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import List from './list/list';
import Post from './post';
import Page from './page';
import Header from './header/header';
import Home from './home';
// import Destination from './destination';
import Loading from './loading';
import Error from './error';

import styleVariables from '../styles/global/variables.css';
import normalizeCss from '../styles/global/normalize.css';
import globalStyles from '../styles/global/index.css';
import gutenbergStyles from '../styles/gutenberg/style.css';

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>Maggies Frontity Test</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Global styles={css(normalizeCss)} />
      <Global styles={css(styleVariables)} />
      <Global styles={css(globalStyles)} />
      <Global styles={css(gutenbergStyles)} />
      <Header />
      <Main>
        <Switch>
          <Loading when={ data.isFetching } />
          <Home when={ data.isHome } />
          <List when={ data.isArchive } />
          <Post when={ data.isPost } />
          <Page when={ data.isPage } />
          {/* <Destination when={ data.isDestinations } /> */}
          <Error when={ data.isError } />
        </Switch>
      </Main>
    </>
  )
};


// const globalStyles = css`
//   :root {
//     --brand: #5B3BE8;
//     --black: #000000;
//     --white: #ffffff;
//     --bodycolor: #EAF6FF;
//   }
//   body {
//     margin: 0;
//     color:var(--bodycolor);
//     font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
//       "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
//     font-feature-settings: "kern";
//     -webkit-font-smoothing: antialiased;
//     min-height: -webkit-fill-available;
//   }
//   html {
//     height: -webkit-fill-available;
//   },
//   a,
//   a:visited {  
//     text-decoration: none;
//     &:hover {
//       text-decoration: none;
//     }
//   }
//   h1, h2, h3, h4, h5, h6 {
//     color:var(--black);
//   }
//   p {
//     line-height:24px;
//     font-size:18px;
//   }
//   // #root {
//   //   display:flex;
//   //   flex-direction: column;
//   //   height: auto;
//   // }
//   .container {
//     max-width: 1200px;
//     width:100%;
//     margin: 0 auto;
//     position: relative;
//     padding-right: 15px;
//     padding-left: 15px;
//   }
//   .section{
//     padding: 34px 0;
//     @media (min-width: 992px) {
//       padding: 50px 0;
//     }
//   }
// `;

const Main = styled.main`
  max-width: 1260px;
  padding: 1em;
  margin: auto;

  img {
    height: auto;
    max-width: 100%;
  }

  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;

export default connect(Root);