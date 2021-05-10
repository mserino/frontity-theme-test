import React from 'react';
import { connect, css, Head } from 'frontity';
import dayjs from 'dayjs';

import Image from '../../components/Image/Image';
import Ad from '../../components/Ad/Ad';

import styles from './styles';

const Post = ({ state, libraries }) => {
  const Html2React = libraries.html2react.Component;

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const image = state.source.attachment[post.featured_media];
  const formattedDate = dayjs(post.date).format('DD MMMM YYYY');

  return (
    <>
      <Head>
        <title>{ post.title.rendered }</title>
        <meta name="description" content={ post.excerpt.rendered }/>
      </Head>
      <div css={styles}>
        <main className="post-grid">
          <div className="post-grid__header">
            <h1>{ post.title.rendered }</h1>
            <div className="post-meta">
              <p className="-has-font-size-small">
                <strong>Posted: </strong>
                { formattedDate }
              </p>
              <p className="-has-font-size-small">
                <strong>Author: </strong>
                { author.name }
              </p>
            </div>
          </div>
          <div className="post-grid__main">
            {image && (
              <Image
                src={image.source_url}
                alt={image.alt_text}
                isLandscape
                extraClassNames={{
                  'primary-media': true,
                }}
              />
            )}
            <Html2React html={post.content.rendered} />
          </div>
          <aside className="post-grid__aside">
            <Ad extraClassNames={{
              '-is-sticky': true,
            }}/>
          </aside>
        </main>
      </div>
      {/* <img src={image.source_url} />
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
      <Html2React html={post.content.rendered} /> */}
    </>
  );
}

// const PostInfo = styled.div`
//   background-image: linear-gradient(to right, #f4f4f4, #fff);
//   margin-bottom: 1em;
//   padding: 0.5em;
//   border-left: 4px solid lightseagreen;
//   font-size: 0.8em;

//   & > p {
//     margin: 0;
//   }
// `;

export default connect(Post);
