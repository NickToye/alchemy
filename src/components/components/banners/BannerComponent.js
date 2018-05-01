import React from 'react';

import colours from '../../data/colours';
// import Droplet from '../../colours/Droplet';
import Canvas from '../../colours/Canvas';
import Banner from './Banner';
import Position from '../../layout/Position';
import gridPosition from '../../data/gridPosition';

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
      textCanvasPick: '',
      textBlockPositions: gridPosition,
      textBlockPositionPick: 'top',
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
  }

  showTextCanvasPopoverAction() {
    this.setState(prev => ({ showTextCanvasPopover: !prev.showTextCanvasPopover }));
    this.setState({ showCanvasPopover: false });
  }

  showTextBlockAction() {
    this.setState(prev => ({ showTextBlock: !prev.showTextBlock }));
    this.setState({ showCanvasPopover: false });
    this.setState({ showTextCanvasPopover: false });
  }

  showTextBlockPositionPopoverAction() {
    this.setState(prev => ({ showTextBlockPositionPopover: !prev.showTextBlockPositionPopover }));
    this.setState({ showCanvasPopover: false });
    this.setState({ showTextCanvasPopover: false });
  }

  updateTextBlockPositionPick(e) {
    this.setState({ textBlockPositionPick: e.target.value });
  }

  render() {
    return (
      <section className="u-margin-bottom u-relative">
        <div className="c-textbar  o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-padding">
          <h2 className="u-alchemy-white-colour u-margin-none">Banners</h2>
          <div>
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

            <button className={'c-toolbar__btn '} onClick={this.showTextBlockAction}>
              <i className="fas fa-font fa-lg" />
            </button>

            {this.state.showTextBlock ? (
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
            ) : (
              ''
            )}

            {this.state.showTextBlock ? (
              <div className="tools-wrapper">
                <button className={`c-toolbar__btn`} onClick={this.showTextBlockPositionPopoverAction}>
                  <i className="fas fa-align-center fa-lg" />
                </button>
                {this.state.showTextBlockPositionPopover ? (
                  <div className="c-toolbar__popover  animated fadeInUp">
                    {Object.keys(this.state.textBlockPositions).map(key => (
                      <Position
                        key={key}
                        details={this.state.textBlockPositions[key]}
                        action={this.updateTextBlockPositionPick}
                      />
                    ))}
                  </div>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <Banner
          canvas={this.state.canvasPick}
          showText={this.state.showTextBlock}
          textCanvas={this.state.textCanvasPick}
          textPosition={this.state.textBlockPositionPick}
        />
      </section>
    );
  }
}

export default BannerComponent;

// TODO Make the data files consistent casing
