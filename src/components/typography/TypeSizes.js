import React from 'react';
import PropTypes from 'prop-types';

import colours from '../data/colours';
import Type from './Type';
import typography from '../data/typography';
import Droplet from '../colours/Droplet';
import Canvas from '../colours/Canvas';
import ScrollableAnchor from 'react-scrollable-anchor';

class TypeSizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBaseline: false,
      type: typography,
      dropPick: '',
      canvasPick: '',
      showMargin: false,
      showContraster: false,
      showDropletsPopover: false,
      showCanvasPopover: false,
      dropPickDisabled: false,
      colours: colours,
    };

    this.showBaselineAction = this.showBaselineAction.bind(this);
    this.showMarginAction = this.showMarginAction.bind(this);
    this.showDropPick = this.showDropPick.bind(this);
    this.showCanvasPick = this.showCanvasPick.bind(this);
    this.showContrasterAction = this.showContrasterAction.bind(this);
    this.showDropletsPopoverAction = this.showDropletsPopoverAction.bind(this);
    this.showCanvasPopoverAction = this.showCanvasPopoverAction.bind(this);
  }

  showBaselineAction() {
    this.setState(prev => ({ showBaseline: !prev.showBaseline }));
  }

  showMarginAction() {
    this.setState(prev => ({ showMargin: !prev.showMargin }));
  }

  showDropPick(e) {
    this.setState({ dropPick: e.target.value });
    this.setState({ showContraster: false });
  }

  showDropletsPopoverAction() {
    this.setState(prev => ({ showDropletsPopover: !prev.showDropletsPopover }));
    this.setState({ showCanvasPopover: false });
  }

  showCanvasPopoverAction() {
    this.setState(prev => ({ showCanvasPopover: !prev.showCanvasPopover }));
    this.setState({ showDropletsPopover: false });
  }

  showCanvasPick(e) {
    this.setState({ canvasPick: e.target.value });
  }

  showContrasterAction() {
    this.setState(prev => ({ showContraster: !prev.showContraster }));
    this.setState({ dropPick: '' });
    this.setState(prev => ({ dropPickDisabled: !prev.dropPickDisabled }));
  }

  render() {
    const dropPick = this.state.dropPick;
    const canvasPick = this.state.canvasPick;

    return (
      <ScrollableAnchor id="type-sizes">
        <section className="u-margin-bottom u-relative">
          <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Type Sizes</h2>
            <div className="o-surface--l1 o-flex o-flex--row">
              <div className="tools-wrapper">
                <button
                  className={'c-toolbar__btn ' + (this.state.showBaseline ? 'active' : ' ')}
                  onClick={this.showBaselineAction}
                >
                  <i className="fas fa-th fa-lg" />
                </button>
                <button
                  className={'c-toolbar__btn ' + (this.state.showMargin ? 'active' : ' ')}
                  onClick={this.showMarginAction}
                >
                  <i className="fas fa-expand fa-lg" />
                </button>
              </div>

              <div className="tools-wrapper">
                <button
                  className={
                    'c-toolbar__btn ' +
                    (this.state.showDropletsPopover ? 'active ' : '') +
                    `u-alchemy-${this.state.dropPick}-colour`
                  }
                  onClick={this.showDropletsPopoverAction}
                >
                  <i className="fas fa-tint fa-lg" />
                </button>
                {this.state.showDropletsPopover ? (
                  <div className="c-toolbar__popover  animated fadeInUp">
                    {Object.keys(this.state.colours).map(key => (
                      <Droplet key={key} details={this.state.colours[key]} action={this.showDropPick} />
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>

              <div className="tools-wrapper">
                <button
                  className={
                    'c-toolbar__btn ' +
                    (this.state.showCanvasPopover ? 'active ' : '') +
                    `u-alchemy-${this.state.canvasPick}-colour`
                  }
                  onClick={this.showCanvasPopoverAction}
                >
                  <i className="fas fa-paint-brush fa-lg" />
                </button>
                {this.state.showCanvasPopover ? (
                  <div className="c-toolbar__popover  animated fadeInUp">
                    {Object.keys(this.state.colours).map(key => (
                      <Canvas key={key} details={this.state.colours[key]} action={this.showCanvasPick} />
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="tools-wrapper">
                <button
                  className={'c-toolbar__btn ' + (this.state.showContraster ? 'active' : '')}
                  onClick={this.showContrasterAction}
                >
                  <i className="fas fa-adjust fa-lg" />
                </button>
              </div>
            </div>
          </div>
          <div key={this.key} className="u-alchemy-white-bg">
            <div
              className={
                `u-alchemy-${canvasPick}-bg o-pod  u-padding  u-margin-bottom-huge ` +
                (this.state.showBaseline ? 'u-baseline-wrapper' : '')
              }
            >
              <div
                className={`u-alchemy-${dropPick}-colour ` + (this.state.showBaseline ? 'u-baseline' : '')}
              >
                {Object.keys(this.state.type).map(key => (
                  <Type key={key} details={this.state.type[key]} margin={this.state.showMargin} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

TypeSizes.propTypes = {
  dropPick: PropTypes.string,
  canvasPick: PropTypes.string,
};

export default TypeSizes;
