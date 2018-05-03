import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (<header className="c-header  u-padding-tiny u-padding-top-huge">
    <div className="c-toolbar__mq u-padding-tiny">
      <small>Current Media Query:
      </small>
    </div>
    <nav className="c-navigation">
      <IndexLink to="/" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Alchemy@3x.png')} className="patch  patch--alchemy"/>
      </IndexLink>
      <Link to="/colours" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Colours@3x.png')} className="patch"/>
      </Link>
      <Link to="/typography" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Typography@3x.png')} className="patch"/>
      </Link>
      <Link to="/buttons" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Buttons@3x.png')} className="patch"/>
      </Link>
      <Link to="/layout" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Layout@3x.png')} className="patch"/>
      </Link>
      <Link to="/animations" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Animation@3x.png')} className="patch"/>
      </Link>
      <Link to="/surfaces" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Surfaces@3x.png')} className="patch"/>
      </Link>
      <Link to="/components" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Components@3x.png')} className="patch"/>
      </Link>
      <Link to="/code" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Code@3x.png')} className="patch"/>
      </Link>
    </nav>
  </header>);
};

export default Header;
