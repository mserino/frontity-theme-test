import React from 'react';
import { connect, css } from "frontity";
import Link from "@frontity/components/link";

import styles from './styles';

const Header = ({ state, actions }) => {
  return (
    <header
      css={css(styles)}
      className="header"
    >
      <div className="header__container -container">
        <nav className="header__nav">
          <ul>
            <li><Link link="/">Home</Link></li>
            <li><Link link="/posts">All Posts</Link></li>
            <li><Link link="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default connect(Header);

