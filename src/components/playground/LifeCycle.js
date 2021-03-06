import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      didMount: false,
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      val: this.state.val + 1,
    });
  }

  componentWillMount() {
    // console.log('componentWillMount...');
    this.setState({ m: 2 });
  }

  render() {
    // const didMount = this.props.didMount;
    // console.log('render...');
    return (
      <div id="lifeforce">
        <h3>LifeCycle Component</h3>
        <button className="c-btn  c-btn--block  c-btn--secondary1" onClick={this.update}>
          {this.state.val * this.state.m}
        </button>
      </div>
    );
  }

  componentDidMount() {
    // console.log('componentDidMount...');
    // this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount...');
    clearInterval(this.inc);
  }
}

LifeCycle.propTypes = {
  didMount: PropTypes.string,
};

class LifeForce extends React.Component {
  constructor() {
    super();
    this.state = {
      willMount: false,
      willUnmount: null,
    };
  }
  mount() {
    ReactDOM.render(<LifeCycle />, document.getElementById('mountee'));
    this.setState({
      willMount: true,
      willUnmount: false,
      didMount: true,
    });
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('mountee'));
    this.setState({
      willMount: false,
      willUnmount: true,
      didMount: false,
    });
  }
  render() {
    return (
      <div className="u-margin-bottom-huge">
        <div className="o-flex  o-flex--row u-alchemy-dark-grey-bg u-border-radius u-margin-bottom">
          <small className={`o-flex__item  o-flex  o-flex--row u-padding`}>
            <div className={`a-indicator u-margin-right-small ` + (this.state.willMount ? 'active' : '')} />
            <span className={'a-lifecycle ' + (this.state.willMount ? 'active' : '')}>
              componentWillMount
            </span>
          </small>
          <small
            className={`o-flex__item o-flex o-flex--row u-padding  ` + (this.state.didMount ? 'active' : '')}
          >
            <div className={`a-indicator u-margin-right-small ` + (this.state.didMount ? 'active' : '')} />
            <span className={'a-lifecycle ' + (this.state.didMount ? 'active' : '')}>componentDidMount</span>
          </small>
          <small
            className={
              `o-flex__item o-flex o-flex--row u-padding  ` + (this.state.willUnmount ? 'active' : '')
            }
          >
            <div className={`a-indicator u-margin-right-small ` + (this.state.willUnmount ? 'active' : '')} />
            <span className={'a-lifecycle ' + (this.state.willUnmount ? 'active' : '')}>
              componentWillUnmount
            </span>
          </small>
        </div>
        <div className="o-grid o-grid--start">
          <div className="o-grid__el">
            <button className="c-btn c-btn--block u-alchemy-positive-bg" onClick={this.mount.bind(this)}>
              Mount LifeCycle Component
            </button>
          </div>
          <div className="o-grid__el">
            <button className="c-btn c-btn--block u-alchemy-negative-bg" onClick={this.unmount.bind(this)}>
              Unmount LifeCycle Component
            </button>
          </div>
        </div>
        <div id="mountee" />
      </div>
    );
  }
}

export default LifeForce;
