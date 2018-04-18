import React from 'react';

class ButtonsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colourTypes: ['brand', 'neutral', 'utility', 'ghost'],
      colourTypePick: 'brand',
      showRoundedButtons: false,
      showLargeRoundedButtons: false,
      showDropletsPopover: false,
      droplets: [
        'primary',
        'secondary1',
        'secondary2',
        'secondary3',
        'black',
        'light-grey',
        'pale-grey',
        'grey',
        'medium-grey',
        'dark-grey',
        'positive',
        'caution',
        'negative',
        'info'
      ],
      dropPick: 'white'
    };
    this.showColourTypePick = this.showColourTypePick.bind(this);
    this.showRoundedButtonsAction = this.showRoundedButtonsAction.bind(this);
    this.showLargeRoundedButtonsAction = this.showLargeRoundedButtonsAction.bind(
      this
    );
    this.showDropPick = this.showDropPick.bind(this);
    this.showDropletsPopoverAction = this.showDropletsPopoverAction.bind(this);
  }

  showRoundedButtonsAction() {
    this.setState(prev => ({ showRoundedButtons: !prev.showRoundedButtons }));
    this.setState({ showLargeRoundedButtons: false });
  }

  showLargeRoundedButtonsAction() {
    this.setState(prev => ({
      showLargeRoundedButtons: !prev.showLargeRoundedButtons
    }));
  }

  showColourTypePick(e) {
    this.setState({ colourTypePick: e.target.value });
  }

  showDropPick(e) {
    this.setState({ dropPick: e.target.value });
  }

  showDropletsPopoverAction() {
    this.setState(prev => ({ showDropletsPopover: !prev.showDropletsPopover }));
    this.setState({ showCanvasPopover: false });
  }

  render() {
    const swatches = [
      {
        id: 1,
        colourClass: 'primary',
        colourType: 'brand'
      },
      {
        id: 2,
        colourClass: 'secondary1',
        colourType: 'brand'
      },
      {
        id: 3,
        colourClass: 'secondary2',
        colourType: 'brand'
      },
      {
        id: 4,
        colourClass: 'secondary3',
        colourType: 'brand'
      },
      {
        id: 5,
        colourClass: 'black',
        colourType: 'neutral'
      },
      {
        id: 6,
        colourClass: 'white',
        colourType: 'neutral'
      },
      {
        id: 7,
        colourClass: 'pale-grey',
        colourType: 'neutral'
      },
      {
        id: 8,
        colourClass: 'light-grey',
        colourType: 'neutral'
      },
      {
        id: 9,
        colourClass: 'grey',
        colourType: 'neutral'
      },
      {
        id: 10,
        colourClass: 'medium-grey',
        colourType: 'neutral'
      },
      {
        id: 11,
        colourClass: 'dark-grey',
        colourType: 'neutral'
      },
      {
        id: 12,
        colourClass: 'positive',
        colourType: 'utility'
      },
      {
        id: 13,
        colourClass: 'caution',
        colourType: 'utility'
      },
      {
        id: 14,
        colourClass: 'negative',
        colourType: 'utility'
      },
      {
        id: 15,
        colourClass: 'info',
        colourType: 'utility'
      },
      {
        id: 16,
        colourClass: 'ghost',
        colourType: 'ghost'
      }
    ];

    const dropPick = this.state.dropPick;

    const dropletsList = this.state.droplets.map((drop, key) => {
      const isCurrent = this.state.dropPick === drop;
      return (
        <button
          className={
            `u-alchemy-${drop}-colour c-toolbar__btn ` +
            (isCurrent ? 'active' : '')
          }
          key={key}
          value={drop}
          onClick={this.showDropPick}
        >
          <i className="fas fa-tint fa-lg" />
        </button>
      );
    });

    const selectedColourType = this.state.colourTypePick;

    function ButtonSizes(props) {
      const colourClassName = props.colourClassName;
      const showRoundedButtons = props.showRoundedButtons;
      const showLargeRoundedButtons = props.showLargeRoundedButtons;
      const colourTypePick = props.colourTypePick;
      const colourDropPick = props.colourDropPick;
      const buttonSizesMap = sizes.map((size, key) => (
        <button
          className={
            `c-btn  c-btn--${colourClassName}  c-btn--${size} ` +
            (showRoundedButtons ? 'c-btn--rounded ' : '') +
            (showLargeRoundedButtons ? 'c-btn--rounded-large ' : '') +
            `u-margin-bottom  u-text-capitalise ` +
            (colourTypePick === 'ghost' ? `c-btn--${colourDropPick} ` : 'fffff')
          }
          key={key}
        >
          {size} Button
        </button>
      ));
      return (
        <div className={`o-flex  o-flex__column  o-flex--wrap`}>
          <h4>Size Variations</h4>
          {buttonSizesMap}
        </div>
      );
    }

    const sizes = ['tiny', 'small', 'standard', 'large', 'huge'];

    const buttonColours = swatches
      .filter(function(filteredSwatches) {
        return filteredSwatches.colourType === selectedColourType;
      })
      .map((swatch, filteredswatches) => (
        <div key={swatch.key}>
          <button
            className={
              `c-btn  c-btn--${swatch.colourClass} ` +
              (this.state.showRoundedButtons ? 'c-btn--rounded ' : '') +
              (this.state.showLargeRoundedButtons
                ? 'c-btn--rounded-large '
                : '') +
              (this.state.colourTypePick === 'ghost'
                ? `c-btn--${this.state.dropPick} `
                : '') +
              `u-margin-bottom  u-text-capitalise`
            }
            key={swatch.id}
          >
            {swatch.colourClass} Button
          </button>
          <ButtonSizes
            colourClassName={swatch.colourClass}
            showRoundedButtons={this.state.showRoundedButtons}
            showLargeRoundedButtons={this.state.showLargeRoundedButtons}
            colourTypePick={this.state.colourTypePick}
            colourDropPick={this.state.dropPick}
          />
        </div>
      ));

    const colourTypeList = this.state.colourTypes.map((type, key) => {
      const isCurrent = this.state.colourTypePick === type;
      return (
        <button
          className={
            `c-toolbar__btn  u-text-capitalise ` + (isCurrent ? 'active' : '')
          }
          value={type}
          key={key}
          onClick={this.showColourTypePick}
        >
          <i className="fas fa-fw fa-tag fa-lg u-padding-right-tiny" />
          {type}
        </button>
      );
    });

    return (
      <section className="o-section u-padding  u-relative">
        <div className="u-margin-bottom u-margin-right  c-toolbar">
          {colourTypeList}
          <div className="tools-wrapper">
            {this.state.colourTypePick === 'ghost' ? (
              <button
                className={
                  'c-toolbar__btn ' +
                  (this.state.showDropletsPopover ? 'active ' : ' ') +
                  `u-alchemy-${this.state.dropPick}-colour`
                }
                onClick={this.showDropletsPopoverAction}
              >
                <i className="fas fa-tint fa-lg" />
              </button>
            ) : (
              ''
            )}

            {this.state.showDropletsPopover ? (
              <div className="c-toolbar__popover  animated fadeInUp">
                {dropletsList}
              </div>
            ) : (
              ''
            )}
          </div>
          <button
            className={
              'c-toolbar__btn ' +
              (this.state.showRoundedButtons ? 'active' : '')
            }
            onClick={this.showRoundedButtonsAction}
          >
            <span className="u-padding-right-small">Rounded Buttons</span>
            <i
              className={
                'fas fa-square fa-lg ' +
                (this.state.showRoundedButtons ? 'active' : '')
              }
            />
          </button>
          {this.state.showRoundedButtons ? (
            <button
              className={
                'c-toolbar__btn ' +
                (this.state.showLargeRoundedButtons ? 'active' : '')
              }
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
            {buttonColours}
          </div>
        </div>
      </section>
    );
  }
}

export default ButtonsCard;
