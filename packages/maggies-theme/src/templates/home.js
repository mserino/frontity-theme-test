import React from 'react';
import { connect, styled } from 'frontity';

const Home = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const homepage = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <Content>
      <Html2React html={homepage.content.rendered} />
    </Content>
  ) : null;
};

const Content = styled.div`
  width: 100%;
  position: relative;
`;

export default connect(Home);
