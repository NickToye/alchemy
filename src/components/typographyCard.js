import React from 'react';

class TypographyCard extends React.Component {
  state = {
    showBaseline: false,
    showEvilCode: false,
  };

  showBaselineAction = () => {
    this.setState(prev => ({ showBaseline: !prev.showBaseline }));
  };

  showEvilCodeAction = () => {
    this.setState(prev => ({ showEvilCode: !prev.showEvilCode }));
  };

  render() {
    const typography = [
      {
        id: 1,
        element: 'h1',
        fontSize: 50,
        lineHeight: 54,
        label: 'Heading 1',
        typeface: 'FS Emeric Light',
      },
      {
        id: 2,
        element: 'h2',
        fontSize: 38,
        lineHeight: 54,
        label: 'Heading 2',
        typeface: 'FS Emeric Light',
      },
      {
        id: 3,
        element: 'h3',
        fontSize: 26,
        lineHeight: 54,
        label: 'Heading 3',
        typeface: 'FS Emeric Light',
      },
      {
        id: 4,
        element: 'p',
        fontSize: 18,
        lineHeight: 54,
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
      <div className={`u-${type.element}`} key={type.id}>
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
    return (
      <section className="o-section">
        <header>
          <h2 className="u-h2">Typography</h2>
          <p>A tool that will display the correct typography.</p>
        </header>

        <div className="options">
          <h3 className="u-h3">Options</h3>
          <button
            className={
              'c-btn ' + (this.state.showBaseline ? 'c-btn--active' : ' ')
            }
            onClick={this.showBaselineAction}
          >
            {this.state.showBaseline ? 'Hide' : 'Show'} Baseline
          </button>
          <button
            className={
              'c-btn  c-btn--negative ' +
              (this.state.showEvilCode ? 'c-btn--active' : ' ')
            }
            onClick={this.showEvilCodeAction}
          >
            {this.state.showEvilCode ? 'Hide' : 'Show'} Evil Code
          </button>
        </div>

        <div className={this.state.showBaseline ? 'u-baseline' : ''}>
          <h3 className="u-h3">Type Sizes</h3>
          {typographyList}
        </div>

        <div className={this.state.showBaseline ? 'u-baseline' : ''}>
          <h3 className="u-h3">Typefaces</h3>
          {typefaceList}
        </div>

        {this.state.showEvilCode ? (
          <div
            className={
              'sofology-old ' + (this.state.showBaseline ? 'u-baseline' : ' ')
            }
          >
            <h1 className="old-type">Heading 1</h1>
            <h2 className="old-type">Heading 2</h2>
            <h3 className="old-type">Heading 3</h3>
            <p className="old-type">Paragraph</p>
          </div>
        ) : (
          ''
        )}
      </section>
    );
  }
}

export default TypographyCard;
