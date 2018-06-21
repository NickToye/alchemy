import React from 'react';

import { Link, IndexLink } from 'react-router';
import DesignList from '../data/designList';
import ComponentList from '../data/componentList';
import CodeList from '../data/codeList';
import LinksCard from '../common/LinksCard';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designMenu: false,
      componentMenu: false,
      codeMenu: false,
      designContents: DesignList,
      componentContents: ComponentList,
      codeContents: CodeList,
      activeLink: '',
    };
    this.designMenuToggle = this.designMenuToggle.bind(this);
    this.componentMenuToggle = this.componentMenuToggle.bind(this);
    this.codeMenuToggle = this.codeMenuToggle.bind(this);
  }

  designMenuToggle() {
    this.setState(prev => ({ designMenu: !prev.designMenu }));
    if (this.state.componentMenu) {
      this.setState({
        componentMenu: false,
      });
    } else if (this.state.codeMenu) {
      this.setState({
        codeMenu: false,
      });
    }
  }

  componentMenuToggle() {
    this.setState(prev => ({ componentMenu: !prev.componentMenu }));
    if (this.state.designMenu) {
      this.setState({
        designMenu: false,
      });
    } else if (this.state.codeMenu) {
      this.setState({
        codeMenu: false,
      });
    }
  }

  codeMenuToggle() {
    this.setState(prev => ({ codeMenu: !prev.codeMenu }));
    if (this.state.designMenu) {
      this.setState({
        designMenu: false,
      });
    } else if (this.state.componentMenu) {
      this.setState({
        componentMenu: false,
      });
    }
  }

  render() {
    return (
      <aside className="u-2/8 a-alchemy-alchemy1-bg u-padding-horizontal-large">
        <IndexLink
          to="/"
          className="u-padding-small o-flex  o-flex--align-center  u-margin-bottom-large"
          activeClassName="active"
        >
          <img src={require('../../images/Alchemy@3x.png')} className="a-patch  a-patch--logo" />
          <h2 className="u-margin-none">Alchemy</h2>
        </IndexLink>
        <nav className="a-navigation">
          <div>
            <Link
              to="/design"
              className={`u-padding-vertical-small u-block ` + (this.state.designMenu ? 'active' : '')}
              activeClassName="active"
              onClick={this.designMenuToggle}
            >
              <div className="o-flex o-flex--row o-flex--align-center">
                <img src={require('../../images/Colours@3x.png')} className="a-patch--alchemy" />
                <span className="u-h3 u-margin-none u-margin-left-tiny">Designs</span>
              </div>
            </Link>
            <div className={`a-navigation__sub ` + (this.state.designMenu ? 'active' : '')}>
              {Object.keys(this.state.designContents).map(key => (
                <LinksCard
                  key={key}
                  details={this.state.designContents[key]}
                  activeLink={this.state.activeLink}

                />
              ))}
            </div>
          </div>
          <div>
            <Link
              to="/components"
              className={`u-padding-vertical-small u-block ` + (this.state.componentMenu ? 'active' : '')}
              activeClassName="active"
              onClick={this.componentMenuToggle}
            >
              <div className="o-flex o-flex--row o-flex--align-center">
                <img src={require('../../images/Components@3x.png')} className="a-patch--alchemy" />
                <span className="u-h3 u-margin-none u-margin-left-tiny">Components</span>
              </div>
            </Link>
            <div className={`a-navigation__sub ` + (this.state.componentMenu ? 'active' : '')}>
              {Object.keys(this.state.componentContents).map(key => (
                <LinksCard
                  key={key}
                  details={this.state.componentContents[key]}
                  activeLink={this.state.activeLink}
                />
              ))}
            </div>
          </div>
          <div>
            <Link
              to="/code"
              className={`u-padding-vertical-small u-block ` + (this.state.codeMenu ? 'active' : '')}
              activeClassName="active"
              onClick={this.codeMenuToggle}
            >
              <div className="o-flex o-flex--row o-flex--align-center">
                <img src={require('../../images/Code@3x.png')} className="a-patch--alchemy" />
                <span className="u-h3 u-margin-none u-margin-left-tiny">Code</span>
              </div>
            </Link>
            <div className={`a-navigation__sub ` + (this.state.codeMenu ? 'active' : '')}>
              {Object.keys(this.state.codeContents).map(key => (
                <LinksCard
                  key={key}
                  details={this.state.codeContents[key]}
                  activeLink={this.state.activeLink}
                />
              ))}
            </div>
          </div>
        </nav>
      </aside>
    );
  }
}

export default Aside;
