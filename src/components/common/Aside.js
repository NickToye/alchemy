import React from 'react';
import PropTypes from 'prop-types';

import { Link, IndexLink } from 'react-router';
import DesignList from '../data/designList';
import LinksCard from '../common/LinksCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designMenu: false,
        contents: DesignList,
        activeLink: '',
    };
    this.designMenuToggle = this.designMenuToggle.bind(this);
  }



  designMenuToggle() {
    this.setState(prev => ({ designMenu: !prev.designMenu }));
  }

  render() {
    const mqIcon = this.props.mq;
    const mqIconRotate = this.props.mqRotate;
    return (
      <aside className="u-2/8 a-alchemy-alchemy1-bg u-padding-horizontal-large">
        <IndexLink to="/" className="u-padding-small o-flex  o-flex--align-center  u-margin-bottom-large" activeClassName="active">
          <img src={require('../../images/Alchemy@3x.png')} className="a-patch  a-patch--logo" />
          <h2 className="u-margin-none">Alchemy</h2>

        </IndexLink>
        <nav className="a-navigation">
          <div>
            <Link
              to="#"
              className="u-padding-vertical-small u-block"
              activeClassName="active"
              onClick={this.designMenuToggle}
            >
              <div className="o-flex o-flex--row o-flex--align-center">
              <img src={require('../../images/Colours@3x.png')} className="a-patch--alchemy" />
              <span className="u-h3 u-margin-none u-margin-left-tiny">Designs</span>
              </div>
            </Link>
              <div className={`a-navigation__sub ` + (this.state.designMenu ? 'active' : '')}>
                {Object.keys(this.state.contents).map(key => (
                  <LinksCard
                    key={key}
                    details={this.state.contents[key]}
                    activeLink={this.state.activeLink}
                  />
                ))}

              </div>
            </div>
          <Link
            to="/components"
            className="u-padding-vertical-small o-flex o-flex--row o-flex--align-center"
            activeClassName="active"
          >
            <img src={require('../../images/Components@3x.png')} className="a-patch--alchemy" />
            <span className="u-h3 u-margin-none u-margin-left-tiny">Components</span>
          </Link>
          <Link
            to="/code"
            className="u-padding-vertical-small o-flex o-flex--row o-flex--align-center"
            activeClassName="active"
          >
            <img src={require('../../images/Code@3x.png')} className="a-patch--alchemy" />
            <span className="u-h3 u-margin-none u-margin-left-tiny">Code</span>
          </Link>
        </nav>
        <div className="a-toolbar__mq u-padding-tiny">
          <small className="a-alchemy-secondary-colour">MQ</small>
          <div className="a-devices o-flex  o-flex--center u-padding-vertical-tiny a-alchemy-tertiary-colour">
            <FontAwesomeIcon icon={mqIcon} rotation={mqIconRotate} />
          </div>
        </div>
      </aside>
    );
  }
}

Aside.propTypes = {
  mq: PropTypes.string,
  mqRotate: PropTypes.number,
};

export default Aside;
