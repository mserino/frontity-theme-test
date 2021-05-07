import React from 'react';
import { connect, styled, Head } from 'frontity';
import dayjs from 'dayjs';

const Post = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const image = state.source.attachment[post.featured_media];
  const formattedDate = dayjs(post.date).format('DD MMMM YYYY');

  console.log('image >>>', image);

  return (
    <>
      <Head>
        <title>{ post.title.rendered }</title>
        <meta name="description" content={ post.excerpt.rendered }/>
      </Head>
      <img src={image.source_url} />
      <h2>{ post.title.rendered }</h2>
      {data.isPost && (
        <PostInfo>
          <p>
            <strong>Posted:</strong>
            { formattedDate }
          </p>
          <p>
            <strong>Author:</strong>
            { author.name }
          </p>
        </PostInfo>
      )}
      <Html2React html={post.content.rendered} />
    </>
  );
}

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`;

export default connect(Post);
