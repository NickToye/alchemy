import React from 'react';
import TypographyColourCard from './TypographyColourCard';

class TypographyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBaseline: false,
      showMargin: false,
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
      dropPick: 'dark-grey',
      canvas: [
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
      canvasPick: 'white',
    };

    this.showBaselineAction = this.showBaselineAction.bind(this);
    this.showMarginAction = this.showMarginAction.bind(this);
    this.showDropPick = this.showDropPick.bind(this);
    this.showCanvasPick = this.showCanvasPick.bind(this);
  }

  showBaselineAction() {
    this.setState(prev => ({ showBaseline: !prev.showBaseline }));
  }

  showMarginAction() {
    this.setState(prev => ({ showMargin: !prev.showMargin }));
  }

  showDropPick(e) {
    this.setState({ dropPick: e.target.value });
  }

  showCanvasPick(e) {
    this.setState({ canvasPick: e.target.value });
  }

  render() {
    const typography = [
      {
        id: 1,
        element: 'h1',
        fontSize: 36,
        label: 'Heading 1',
        typeface: 'FS Emeric Light',
      },
      {
        id: 2,
        element: 'h2',
        fontSize: 28,
        label: 'Heading 2',
        typeface: 'FS Emeric Light',
      },
      {
        id: 3,
        element: 'h3',
        fontSize: 24,
        label: 'Heading 3',
        typeface: 'FS Emeric Light',
      },
      {
        id: 4,
        element: 'p',
        fontSize: 16,
        label: 'Paragraph',
        typeface: 'FS Emeric Regular',
      },
    ];
    const typeface = [
      { id: 1, faceName: 'FS Emeric Light', faceClass: 'fs-emeric-light' },
      { id: 2, faceName: 'FS Emeric Book', faceClass: 'fs-emeric-book' },
      { id: 3, faceName: 'FS Emeric Medium', faceClass: 'fs-emeric-medium' },
      { id: 4, faceName: 'FS Emeric Regular', faceClass: 'fs-emeric-regular' },
      { id: 5, faceName: 'FS Emeric Core', faceClass: 'fs-emeric-core' },
      { id: 6, faceName: 'FS Emeric Thin', faceClass: 'fs-emeric-thin' },
      { id: 7, faceName: 'FS Emeric Bold', faceClass: 'fs-emeric-bold' },
    ];
    const typographyList = typography.map(type => (
      <div className={`u-${type.element} u-alchemy-${this.state.dropPick}-colour ` + (this.state.showMargin ? 'u-margin-none' : '')} key={type.id}>
        {type.label} - {type.fontSize}px
      </div>
    ));
    const typefaceList = typeface.map(face => (
      <p
        className={`u-${face.faceClass} u-p u-margin-bottom-none`}
        key={face.id}
      >
        {face.faceName}
      </p>
    ));

    const dropPick = this.state.dropPick;
    const dropletsList = this.state.droplets.map((drop, key) => {
      const isCurrent = this.state.dropPick === drop;
      return (
        <button
          className={`u-alchemy-${drop}-colour c-toolbar__btn ` + (isCurrent ? 'active' : '')}
          key={key}
          value={drop}
          onClick={this.showDropPick}
        >
          <i className="fas fa-tint fa-lg" />
        </button>
      );
    });

    const canvasPick = this.state.canvasPick;
    const canvasList = this.state.canvas.map((drop, key) => {
      const isCurrent = this.state.canvasPick === drop;
      return (
        <button
          className={`u-alchemy-${drop}-colour c-toolbar__btn ` + (isCurrent ? 'active' : '')}
          key={key}
          value={drop}
          onClick={this.showCanvasPick}
        >
          <i className="fas fa-paint-brush fa-lg" />
        </button>
      );
    });
    return (
      <section className="o-section  u-padding">
        <header className="u-margin-bottom-huge">
          <h2 className="u-h2  u-margin-bottom-none">Typography</h2>
          <p>A tool that will display the correct typography.</p>
        </header>



        <h3 className="u-h3">Type Sizes</h3>

        <div className="u-margin-bottom  c-toolbar">
          <button
            className={
              'c-toolbar__btn ' + (this.state.showBaseline ? 'active' : ' ')
            }
            onClick={this.showBaselineAction}
          >
            <i className="fas fa-th fa-lg" />
          </button>
          <button className={'c-toolbar__btn ' + (this.state.showMargin ? 'active' : ' ')}
            onClick={this.showMarginAction}
            >
            <i className="fas fa-expand fa-lg" />
          </button>
          {dropletsList}
          {canvasList}
        </div>



        <div className={`u-alchemy-${this.state.canvasPick}-bg o-pod  u-padding  u-margin-bottom-huge ` + (this.state.showBaseline ? 'u-baseline-wrapper' : '')}>
          <div
            className={this.state.showBaseline ? 'u-baseline' : ''}
          >
            {typographyList}
          </div>
        </div>

        <h3 className="u-h3">Typefaces</h3>
        <div className="o-pod  u-padding  u-margin-bottom  u-alchemy-white-bg">

          {typefaceList}
        </div>
      </section>
    );
  }
}

export default TypographyCard;