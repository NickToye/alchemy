import React from 'react';

import colours from '../../data/colours';
import Canvas from '../../colours/Canvas';
import TextCanvas from '../../colours/TextCanvas';
import Banner from './Banner';
import Position from '../../layout/Position';
import gridPosition from '../../data/gridPosition';
import Range from '../../forms/Range';

class BannerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      showDropletsPopover: false,
      showCanvasPopover: false,
      showTextCanvasPopover: false,
      showTextBlockPositionPopover: false,
      showTextBlock: true,
      colours: colours,
      dropPick: '',
      canvasPick: 'secondary2',
      textCanvasPick: 'secondary3',
      textBlockPositions: gridPosition,
      textBlockPositionPick: 'top',
      showHalfLeft: false,
      showHalfRight: false,
      showOpacityPopover: false,
      opacity: 10,
    };

    this.showImageAction = this.showImageAction.bind(this);
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

  showImageAction() {
    this.setState(prev => ({ showImage: !prev.showImage }));
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
      <div className="u-relative">
        <header className="u-padding">
          <h2 className="u-alchemy-primary-colour u-margin-none">Banners</h2>
          <p>A tool to test how the banner will look in various situations</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <div className="a-toolbar--float o-flex  o-flex--row u-margin-bottom-large">
            <div className="a-toolbar__wrapper">
              <button
                className={`a-toolbar__btn ` + (this.state.showImage ? 'active' : '')}
                onClick={this.showImageAction}
              >
                <i className="fas fa-image fa-lg" />
              </button>
            </div>
            <div className="a-toolbar__wrapper">
              <button
                className={
                  'a-toolbar__btn ' +
                  (this.state.showCanvasPopover ? 'active ' : '') +
                  `u-alchemy-${this.state.canvasPick}-colour`
                }
                onClick={this.showCanvasPopoverAction}
              >
                <i className="fas fa-paint-brush fa-lg" />
              </button>
              {this.state.showCanvasPopover ? (
                <div className="a-toolbar__popover  animated fadeInUp">
                  {Object.keys(this.state.colours).map(key => (
                    <Canvas key={key} details={this.state.colours[key]} action={this.showCanvasPick} />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="a-toolbar__wrapper">
              <button
                className={`a-toolbar__btn ` + (this.state.showTextBlock ? 'active ' : '')}
                onClick={this.showTextBlockAction}
              >
                <i className="fas fa-font fa-lg" />
              </button>
            </div>

            <div className="a-toolbar__wrapper">
              <button
                className={
                  'a-toolbar__btn ' +
                  (this.state.showTextCanvasPopover ? 'active ' : '') +
                  `u-alchemy-${this.state.textCanvasPick}-colour`
                }
                onClick={this.showTextCanvasPopoverAction}
              >
                <i className="fas fa-pencil-alt fa-lg" />
              </button>
              {this.state.showTextCanvasPopover ? (
                <div className="a-toolbar__popover  animated fadeInUp">
                  {Object.keys(this.state.colours).map(key => (
                    <TextCanvas
                      key={key}
                      details={this.state.colours[key]}
                      action={this.showTextCanvasPick}
                    />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="a-toolbar__wrapper">
              <button
                className={`a-toolbar__btn ` + (this.state.showTextBlockPositionPopover ? 'active ' : '')}
                onClick={this.showTextBlockPositionPopoverAction}
              >
                <i className="fas fa-align-center fa-lg" />
              </button>
              {this.state.showTextBlockPositionPopover ? (
                <div className="a-toolbar__popover  animated fadeInUp">
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

            <div className="a-toolbar__wrapper">
              <button
                className={`a-toolbar__btn ` + (this.state.showHalfLeft ? 'active ' : '')}
                onClick={this.showHalfLeftAction}
              >
                <i className="fas fa-caret-square-left fa-lg" />
              </button>
            </div>
            <div className="a-toolbar__wrapper">
              <button
                className={`a-toolbar__btn ` + (this.state.showHalfRight ? 'active ' : '')}
                onClick={this.showHalfRightAction}
              >
                <i className="fas fa-caret-square-right fa-lg" />
              </button>
            </div>
            <div className="a-toolbar__wrapper">
              <button
                className={`a-toolbar__btn ` + (this.state.showOpacityPopover ? 'active ' : '')}
                onClick={this.showOpacityPopoverAction}
              >
                <i className="fas fa-lightbulb fa-lg" />
              </button>
              {this.state.showOpacityPopover ? (
                <div className="a-toolbar__popover  animated fadeInUp">
                  <Range range={opacity} updateOpacity={this.updateOpacity} />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>

          <Banner
            canvas={this.state.canvasPick}
            showImage={this.state.showImage}
            showText={this.state.showTextBlock}
            textCanvas={this.state.textCanvasPick}
            textPosition={this.state.textBlockPositionPick}
            showHalfLeft={this.state.showHalfLeft}
            showHalfRight={this.state.showHalfRight}
            opacity={this.state.opacity}
          />
        </section>
      </div>
    );
  }
}

export default BannerComponent;
