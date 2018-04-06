import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <header className="c-header  u-padding-tiny">
      <nav className="c-navigation">
        <IndexLink
          to="/"
          className="u-padding-horizontal-small"
          activeClassName="active"
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Alchemy%403x.png"
            className="patch  patch--alchemy"
          />
        </IndexLink>
        <Link
          to="/colours"
          className="u-padding-horizontal-small"
          activeClassName="active"
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Colours%403x.png"
            className="patch"
          />
        </Link>
        <Link
          to="/typography"
          className="u-padding-horizontal-small"
          activeClassName="active"
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Typography%403x.png"
            className="patch"
          />
        </Link>
        <Link
          to="/buttons"
          className="u-padding-horizontal-small"
          activeClassName="active"
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Buttons%403x.png"
            className="patch"
          />
        </Link>
        <Link
          to="/layout"
          className="u-padding-horizontal-small"
          activeClassName="active"
        >
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Buttons%403x.png"
            className="patch"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
