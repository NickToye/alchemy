import React from 'react';

import colours from '../data/colours';
import typefaces from '../data/typefaces';
import typography from '../data/typography';

import Droplet from '../colours/Droplet';
import Canvas from '../colours/Canvas';
import Type from '../typography/Type';
import Face from '../typography/Face';

class TypographyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBaseline: false,
      showMargin: false,
      showContraster: false,
      showDropletsPopover: false,
      showCanvasPopover: false,
      dropPickDisabled: false,
      colours: colours,
      type: typography,
      face: typefaces,
      dropPick: 'white', // TODO Try and pick a colour from an array
      canvasPick: 'dark-grey', // TODO Try and pick a colour from an array
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
      <section className="o-section  u-padding  u-relative">
        <div className="u-margin-bottom  u-margin-right  c-toolbar">
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

          <button
            className={'c-toolbar__btn ' + (this.state.showContraster ? 'active' : '')}
            onClick={this.showContrasterAction}
          >
            <i className="fas fa-adjust fa-lg" />
          </button>
        </div>
        <header className="u-margin-bottom-large">
          <h2 className="u-h2  u-margin-bottom-none">Typography</h2>
          <p>A tool that will display the correct typography.</p>
        </header>

        <h3 className="u-h3">Type Sizes</h3>
        <div
          className={
            `u-alchemy-${this.state.canvasPick}-bg o-pod  u-padding  u-margin-bottom-huge ` +
            (this.state.showBaseline ? 'u-baseline-wrapper' : '')
          }
        >
          <div
            className={
              `u-alchemy-${this.state.dropPick}-colour ` + (this.state.showBaseline ? 'u-baseline' : '')
            }
          >
            {Object.keys(this.state.type).map(key => (
              <Type key={key} details={this.state.type[key]} margin={this.state.showMargin} />
            ))}
          </div>
        </div>

        <h3 className="u-h3">Typefaces</h3>
        <div className="o-pod  u-padding  u-margin-bottom  u-alchemy-white-bg">
          {Object.keys(this.state.face).map(key => <Face key={key} details={this.state.face[key]} />)}
        </div>
      </section>
    );
  }
}

export default TypographyCard;
