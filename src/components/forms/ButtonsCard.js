import React from 'react';

import colours from '../data/colours';

import Droplet from '../colours/Droplet';
import Button from './Button';

import ColourType from '../colours/ColourType';

class ButtonsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colourTypes: ['brand', 'neutral', 'utility'],
      colourTypePick: 'brand',
      showRoundedButtons: false,
      showLargeRoundedButtons: false,
      showDropletsPopover: false,
      showGhost: false,

      colours: colours,
      dropPick: 'white',
    };
    this.showColourTypePick = this.showColourTypePick.bind(this);
    this.showGhostAction = this.showGhostAction.bind(this);
    this.showRoundedButtonsAction = this.showRoundedButtonsAction.bind(this);
    this.showLargeRoundedButtonsAction = this.showLargeRoundedButtonsAction.bind(this);
    this.showDropPick = this.showDropPick.bind(this);
    this.showDropletsPopoverAction = this.showDropletsPopoverAction.bind(this);
  }

  showRoundedButtonsAction() {
    this.setState(prev => ({ showRoundedButtons: !prev.showRoundedButtons }));
    this.setState({ showLargeRoundedButtons: false });
  }

  showLargeRoundedButtonsAction() {
    this.setState(prev => ({
      showLargeRoundedButtons: !prev.showLargeRoundedButtons,
    }));
  }

  showColourTypePick(e) {
    this.setState({ colourTypePick: e.target.value });
  }

  showGhostAction() {
    this.setState(prev => ({
      showGhost: !prev.showGhost,
    }));
  }

  showDropPick(e) {
    this.setState({ dropPick: e.target.value });
  }

  showDropletsPopoverAction() {
    this.setState(prev => ({ showDropletsPopover: !prev.showDropletsPopover }));
    this.setState({ showCanvasPopover: false });
  }

  render() {
    const selectedColourType = this.state.colourTypePick;

    return (
        <section className="o-section u-relative u-margin-bottom-large">
          <header className="o-flex  o-flex--justify-between  o-flex--align-center  o-flex--row u-margin-bottom">
            <h2 className="u-alchemy-primary-colour u-margin-none">Button Styles</h2>

          </header>

          <div className="a-toolbar--float o-flex o-flex--row u-margin-bottom">
            <div className="a-toolbar__wrapper">
              {Object.keys(this.state.colourTypes).map(key => (
                <ColourType
                  key={key}
                  details={this.state.colourTypes[key]}
                  colourTypePick={this.state.colourTypePick}
                  action={this.showColourTypePick}
                />
              ))}
            </div>
            <div className="a-toolbar__wrapper">
              <button
                className={'a-toolbar__btn ' + (this.state.showGhost ? 'active' : '')}
                onClick={this.showGhostAction}
              >
                <span className="u-padding-right-small">Show Ghost</span>
                <i className={'far fa-square fa-lg '} />
              </button>

              {this.state.showDropletsPopover ? (
                <div className="a-toolbar__popover  animated fadeInUp">
                  {Object.keys(this.state.colours).map(key => (
                    <Droplet key={key} details={this.state.colours[key]} action={this.showDropPick} />
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
            <div className="a-toolbar__wrapper">
              <button
                className={'a-toolbar__btn ' + (this.state.showRoundedButtons ? 'active' : '')}
                onClick={this.showRoundedButtonsAction}
              >
                <span className="u-padding-right-small">Rounded Buttons</span>
                <i className={'fas fa-square fa-lg ' + (this.state.showRoundedButtons ? 'active' : '')} />
              </button>
              {this.state.showRoundedButtons ? (
                <button
                  className={'a-toolbar__btn ' + (this.state.showLargeRoundedButtons ? 'active' : '')}
                  onClick={this.showLargeRoundedButtonsAction}
                >
                  <span className="u-padding-right-small">Large</span>
                  <i className={'fas fa-plus fa-lg '} />
                </button>
              ) : (
                ''
              )}
            </div>
          </div>


          <div className="u-margin-bottom a-alchemy-bg-dark">
            <h3 className="u-text-capitalise">{this.state.colourTypePick}</h3>
            <div className="o-grid">
              {Object.keys(this.state.colours)
                .filter(function(filteredSwatches) {
                  return colours[filteredSwatches].colourType === selectedColourType;
                })
                .map(key => (
                  <div key={key}>
                    <Button
                      key={key}
                      details={this.state.colours[key]}
                      roundedButtons={this.state.showRoundedButtons}
                      largeRoundedButtons={this.state.showLargeRoundedButtons}
                      showGhost={this.state.showGhost}
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
    );
  }
}

export default ButtonsCard;
