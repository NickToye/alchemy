import React from 'react';
import { Link, IndexLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="c-header  o-flex  o-flex--row  o-flex--align-center  o-flex--justify-between">

      <IndexLink to="/" className="u-padding-small a-logo" activeClassName="active">
        <img src={require('../../images/Alchemy@3x.png')} className="a-patch  a-patch--alchemy" />
      </IndexLink>
      <nav className="a-navigation  o-flex  o-flex--row">
        <Link to="/colours" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Colours@3x.png')} className="a-patch" />
          <span>Colours</span>
        </Link>
        <Link to="/typography" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Typography@3x.png')} className="a-patch" />
          <span>Typography</span>
        </Link>
        <Link to="/forms" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Buttons@3x.png')} className="a-patch" />
          <span>Forms</span>
        </Link>
        <Link to="/layout" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Layout@3x.png')} className="a-patch" />
          <span>Layout</span>
        </Link>
        <Link to="/animations" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Animation@3x.png')} className="a-patch" />
          <span>Animations</span>
        </Link>
        <Link to="/surfaces" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Surfaces@3x.png')} className="a-patch" />
          <span>Surfaces</span>
        </Link>
        <Link to="/components" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Components@3x.png')} className="a-patch" />
          <span>Components</span>
        </Link>
        <Link to="/code" className="u-padding-horizontal-small o-flex__item" activeClassName="active">
          <img src={require('../../images/Code@3x.png')} className="a-patch" />
          <span>Code</span>
        </Link>
      </nav>
      <div className="a-toolbar__mq u-padding">
        <small className="a-alchemy-secondary-colour">MQ</small>
        <div className="a-devices o-flex  o-flex--center u-padding-vertical-tiny a-alchemy-tertiary-colour">
          <FontAwesomeIcon icon="desktop" />
        </div>
      </div>
    </header>
  );
};

export default Header;
