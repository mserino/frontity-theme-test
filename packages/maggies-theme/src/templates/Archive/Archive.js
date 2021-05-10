import React from 'react';
import { connect } from 'frontity';
import Link from "@frontity/components/link";
import dayjs from 'dayjs';

import Image from '../../components/Image/Image';
import Pagination from '../../components/Pagination/Pagination';

import styles from './styles';

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  return (
    <div css={styles}>
      <div className="archive">
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          const image = state.source.attachment[post.featured_media];
          const formattedDate = dayjs(post.date).format('DD MMMM YYYY');

          return (
            <div className="archive__item" key={item.id}>
              <Image
                src={image.source_url}
                alt={image.alt_text}
                isLandscape
                extraClassNames={{
                  'archive__image': true,
                }}
              />
              <span className="archive__date -has-font-size-small">
                {formattedDate}
              </span>
              <span className="archive__category -has-font-size-small">
                {post.category}
              </span>
              <Link link={post.link}>
                {post.title.rendered}
              </Link>
              
              {/* <Html2React html={post.excerpt.rendered} /> */}
            </div>
          )
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default connect(List);
