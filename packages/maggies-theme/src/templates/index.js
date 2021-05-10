import React from "react";
import { connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";

// Templates
import Archive from './Archive/Archive';
import Post from './Post/Post';
import Home from './home';
import Error from './error';
// import Destination from './destination';

// Components
import Header from '../components/Header/Header';
import Loading from './loading';

// Global styles
import GlobalStyles from '../styles/GlobalStyles';

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
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Loading when={ data.isFetching } />
          <Home when={ data.isHome } />
          <Archive when={ data.isArchive } />
          <Post when={ data.isPost } />
          <Post when={ data.isPage } />
          {/* <Destination when={ data.isDestinations } /> */}
          <Error when={ data.isError } />
        </Switch>
      </Main>
    </>
  )
};

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