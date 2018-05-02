import React from 'react';

import colours from '../../data/colours';
// import Droplet from '../../colours/Droplet';
import Canvas from '../../colours/Canvas';
import Banner from './Banner';
import Position from '../../layout/Position';
import gridPosition from '../../data/gridPosition';
import Range from '../../forms/Range';

class BannerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropletsPopover: false,
      showCanvasPopover: false,
      showTextCanvasPopover: false,
      showTextBlockPositionPopover: false,
      showTextBlock: false,
      colours: colours,
      dropPick: '',
      canvasPick: 'secondary2',
      textCanvasPick: 'secondary3',
      textBlockPositions: gridPosition,
      textBlockPositionPick: 'top',
      showHalfLeft: false,
      showHalfRight: false,
      showOpacityPopover: false,
      opacity: 0,
    };

    this.showDropPick = this.showDropPick.bind(this);
    this.showCanvasPick = this.showCanvasPick.bind(this);
    this.showTextCanvasPick = this.showTextCanvasPick.bind(this);
    this.showDropletsPopoverAction = this.showDropletsPopoverAction.bind(this);
    this.showCanvasPopoverAction = this.showCanvasPopoverAction.bind(this);
    this.showTextCanvasPopoverAction = this.showTextCanvasPopoverAction.bind(this);
    this.showTextBlockPositionPopoverAction = this.showTextBlockPositionPopoverAction.bind(this);
    this.showTextBlockAction = this.showTextBlockAction.bind(this);
    this.updateTextBlockPositionPick = this.updateTextBlockPositionPick.bind(this);
    this.showHalfLeftAction = this.showHalfLeftAction.bind(this);
    this.showHalfRightAction = this.showHalfRightAction.bind(this);
    this.showOpacityPopoverAction = this.showOpacityPopoverAction.bind(this);
    this.updateOpacity = this.updateOpacity.bind(this);
  }

  showDropPick(e) {
    this.setState({ dropPick: e.target.value });
    this.setState({ showContraster: false });
  }

  showCanvasPick(e) {
    this.setState({ canvasPick: e.target.value });
  }

  showTextCanvasPick(e) {
    this.setState({ textCanvasPick: e.target.value });
  }

  showDropletsPopoverAction() {
    this.setState(prev => ({ showDropletsPopover: !prev.showDropletsPopover }));
    this.setState({ showCanvasPopover: false });
  }

  showCanvasPopoverAction() {
    this.setState(prev => ({ showCanvasPopover: !prev.showCanvasPopover }));
    this.setState({ showDropletsPopover: false });
    this.setState({ showTextCanvasPopover: false });
    this.setState({ showTextBlockPositionPopover: false });
    this.setState({ showOpacityPopover: false });
  }

  showTextCanvasPopoverAction() {
    this.setState(prev => ({ showTextCanvasPopover: !prev.showTextCanvasPopover }));
    this.setState({ showCanvasPopover: false });
    this.setState({ showTextBlockPositionPopover: false });
    this.setState({ showOpacityPopover: false });
  }

  showTextBlockAction() {
    this.setState(prev => ({ showTextBlock: !prev.showTextBlock }));
    this.setState({ showCanvasPopover: false });
    this.setState({ showTextCanvasPopover: false });
    this.setState({ showOpacityPopover: false });
  }

  showTextBlockPositionPopoverAction() {
    this.setState(prev => ({ showTextBlockPositionPopover: !prev.showTextBlockPositionPopover }));
    this.setState({ showCanvasPopover: false });
    this.setState({ showTextCanvasPopover: false });
    this.setState({ showOpacityPopover: false });
  }

  updateTextBlockPositionPick(e) {
    this.setState({ textBlockPositionPick: e.target.value });
  }

  showHalfLeftAction() {
    this.setState(prev => ({ showHalfLeft: !prev.showHalfLeft }));
    this.setState({ showHalfRight: false });
  }

  showHalfRightAction() {
    this.setState(prev => ({ showHalfRight: !prev.showHalfRight }));
    this.setState({ showHalfLeft: false });
  }

  showOpacityPopoverAction() {
    this.setState(prev => ({ showOpacityPopover: !prev.showOpacityPopover }));
    this.setState({ showCanvasPopover: false });
    this.setState({ showTextCanvasPopover: false });
    this.setState({ showTextBlockPositionPopover: false });
  }

  showOpacity(e) {
    this.setState({
      opacity: e.target.value,
    });
  }

  updateOpacity(val) {
    this.setState({
      opacity: val,
    });
  }

  render() {
    const { opacity } = this.state;
    return (
      <section className="u-margin-bottom u-relative">
        <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
          <h2 className="u-alchemy-white-colour u-margin-none">Banners</h2>
          <div className="o-surface--l1">
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
                className={`c-toolbar__btn ` + (this.state.showTextBlock ? 'active ' : '')}
                onClick={this.showTextBlockAction}
              >
                <i className="fas fa-font fa-lg" />
              </button>
            </div>

            <div className="tools-wrapper">
              <button
                className={
                  'c-toolbar__btn ' +
                  (this.state.showTextCanvasPopover ? 'active ' : '') +
                  `u-alchemy-${this.state.textCanvasPick}-colour`
                }
                onClick={this.showTextCanvasPopoverAction}
              >
                <i className="fas fa-pencil-alt fa-lg" />
              </button>
              {this.state.showTextCanvasPopover ? (
                <div className="c-toolbar__popover  animated fadeInUp">
                  {Object.keys(this.state.colours).map(key => (
                    <Canvas key={key} details={this.state.colours[key]} action={this.showTextCanvasPick} />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="tools-wrapper">
              <button
                className={`c-toolbar__btn ` + (this.state.showTextBlockPositionPopover ? 'active ' : '')}
                onClick={this.showTextBlockPositionPopoverAction}
              >
                <i className="fas fa-align-center fa-lg" />
              </button>
              {this.state.showTextBlockPositionPopover ? (
                <div className="c-toolbar__popover  animated fadeInUp">
                  {Object.keys(this.state.textBlockPositions).map(key => (
                    <Position
                      key={key}
                      details={this.state.textBlockPositions[key]}
                      action={this.updateTextBlockPositionPick}
                      textBlockPositionPick={this.state.textBlockPositionPick}
                    />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="tools-wrapper">
              <button
                className={`c-toolbar__btn ` + (this.state.showHalfLeft ? 'active ' : '')}
                onClick={this.showHalfLeftAction}
              >
                <i className="fas fa-caret-square-left fa-lg" />
              </button>
            </div>
            <div className="tools-wrapper">
              <button
                className={`c-toolbar__btn ` + (this.state.showHalfRight ? 'active ' : '')}
                onClick={this.showHalfRightAction}
              >
                <i className="fas fa-caret-square-right fa-lg" />
              </button>
            </div>
            <div className="tools-wrapper">
              <button
                className={`c-toolbar__btn ` + (this.state.showOpacityPopover ? 'active ' : '')}
                onClick={this.showOpacityPopoverAction}
              >
                <i className="fas fa-lightbulb fa-lg" />
              </button>
              {this.state.showOpacityPopover ? (
                <div className="c-toolbar__popover  animated fadeInUp">
                  <Range range={opacity} updateOpacity={this.updateOpacity} />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <Banner
          canvas={this.state.canvasPick}
          showText={this.state.showTextBlock}
          textCanvas={this.state.textCanvasPick}
          textPosition={this.state.textBlockPositionPick}
          showHalfLeft={this.state.showHalfLeft}
          showHalfRight={this.state.showHalfRight}
          opacity={this.state.opacity}
        />
      </section>
    );
  }
}

export default BannerComponent;

// TODO Make the data files consistent casing
