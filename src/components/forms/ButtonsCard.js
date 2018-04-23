import React from 'react';

import colours from '../data/colours';
import sizes from '../data/sizes';
import Droplet from '../colours/Droplet';
import Button from './Button';
import ButtonSized from './ButtonSized';
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
      size: sizes,
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

  showGhostAction(e) {
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
    const dropPick = this.state.dropPick;

    const selectedColourType = this.state.colourTypePick;

    // function ButtonSizes(props) {
    //   const colourClassName = props.colourClassName;
    //   const showRoundedButtons = props.showRoundedButtons;
    //   const showLargeRoundedButtons = props.showLargeRoundedButtons;
    //   const colourTypePick = props.colourTypePick;
    //   const colourDropPick = props.colourDropPick;
    //   const buttonSizesMap = sizes.map((size, key) => (
    //     <button
    //       className={
    //         `c-btn  c-btn--${colourClassName}  c-btn--${size} ` +
    //         (showRoundedButtons ? 'c-btn--rounded ' : '') +
    //         (showLargeRoundedButtons ? 'c-btn--rounded-large ' : '') +
    //         `u-margin-bottom  u-text-capitalise ` +
    //         (colourTypePick === 'ghost' ? `c-btn--${colourDropPick} ` : 'fffff')
    //       }
    //       key={key}
    //     >
    //       {size} Button
    //     </button>
    //   ));
    //   return (
    //     <div className={`o-flex  o-flex__column  o-flex--wrap`}>
    //       <h4>Size Variations</h4>
    //       {buttonSizesMap}
    //     </div>
    //   );
    // }

    // const buttonColours = swatches
    //   .filter(function(filteredSwatches) {
    //     return filteredSwatches.colourType === selectedColourType;
    //   })
    //   .map((swatch, filteredswatches) => (
    //     <div key={swatch.key}>
    //       <button
    //         className={
    //           `c-btn  c-btn--${swatch.colourClass} ` +
    //           (this.state.showRoundedButtons ? 'c-btn--rounded ' : '') +
    //           (this.state.showLargeRoundedButtons ? 'c-btn--rounded-large ' : '') +
    //           (this.state.colourTypePick === 'ghost' ? `c-btn--${this.state.dropPick} ` : '') +
    //           `u-margin-bottom  u-text-capitalise`
    //         }
    //         key={swatch.id}
    //       >
    //         {swatch.colourClass} Button
    //       </button>
    //       <ButtonSizes
    //         colourClassName={swatch.colourClass}
    //         showRoundedButtons={this.state.showRoundedButtons}
    //         showLargeRoundedButtons={this.state.showLargeRoundedButtons}
    //         colourTypePick={this.state.colourTypePick}
    //         colourDropPick={this.state.dropPick}
    //       />
    //     </div>
    //   ));

    return (
      <section className="o-section u-padding  u-relative">
        <div className="u-margin-bottom u-margin-right  c-toolbar">
          {Object.keys(this.state.colourTypes).map(key => (
            <ColourType key={key} details={this.state.colourTypes[key]} action={this.showColourTypePick} />
          ))}
          <div className="tools-wrapper">
            <button className={'c-toolbar__btn '} onClick={this.showGhostAction}>
              <span className="u-padding-right-small">Show Ghost</span>
              <i className={'far fa-square fa-lg ' + (this.state.showGhost ? 'active' : '')} />
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
          <button
            className={'c-toolbar__btn ' + (this.state.showRoundedButtons ? 'active' : '')}
            onClick={this.showRoundedButtonsAction}
          >
            <span className="u-padding-right-small">Rounded Buttons</span>
            <i className={'fas fa-square fa-lg ' + (this.state.showRoundedButtons ? 'active' : '')} />
          </button>
          {this.state.showRoundedButtons ? (
            <button
              className={'c-toolbar__btn ' + (this.state.showLargeRoundedButtons ? 'active' : '')}
              onClick={this.showLargeRoundedButtonsAction}
            >
              <span className="u-padding-right-small">Large</span>
              <i className={'fas fa-plus fa-lg '} />
            </button>
          ) : (
            ''
          )}
        </div>

        <header className="u-margin-bottom-large">
          <h2 className="u-margin-none">Buttons</h2>
          <p>A tool that will display the correct buttons.</p>
        </header>

        <h3 className="u-h3">Button Styles</h3>

        <div className="u-margin-bottom">
          <h4 className="u-text-capitalise">{this.state.colourTypePick}</h4>
          <div className="o-grid  o-grid--centre  o-grid--start o-grid--auto">
            {Object.keys(this.state.colours)
              .filter(function(filteredSwatches) {
                return colours[filteredSwatches].colourType === selectedColourType;
              })
              .map((key, filteredSwatches) => (
                <div key={key} className="o-flex o--column">
                  <Button
                    key={key}
                    details={this.state.colours[key]}
                    roundedButtons={this.state.showRoundedButtons}
                    largeRoundedButtons={this.state.showLargeRoundedButtons}
                    showGhost={this.state.showGhost}
                  />
                  {Object.keys(this.state.size).map(key => (
                    <ButtonSized key={key} swatch={[key].colourClass} sizing={this.state.size[key]} />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ButtonsCard;
