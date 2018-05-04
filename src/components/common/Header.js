import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (<header className="c-header  u-padding-tiny">
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
        <span>Colours</span>
      </Link>
      <Link to="/typography" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Typography@3x.png')} className="patch"/>
        <span>Typography</span>
      </Link>
      <Link to="/buttons" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Buttons@3x.png')} className="patch"/>
        <span>Forms</span>
      </Link>
      <Link to="/layout" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Layout@3x.png')} className="patch"/>
        <span>Layout</span>
      </Link>
      <Link to="/animations" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Animation@3x.png')} className="patch"/>
        <span>Animations</span>
      </Link>
      <Link to="/surfaces" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Surfaces@3x.png')} className="patch"/>
        <span>Surfaces</span>
      </Link>
      <Link to="/components" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Components@3x.png')} className="patch"/>
        <span>Components</span>
      </Link>
      <Link to="/code" className="u-padding-horizontal-small" activeClassName="active">
        <img src={require('../../images/Code@3x.png')} className="patch"/>
        <span>Code Guidelines</span>
      </Link>
    </nav>
  </header>);
};

export default Header;
