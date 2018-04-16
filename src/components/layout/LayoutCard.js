import React from 'react';

class LayoutCard extends React.Component {
  render() {
    const factors = [
      {
        id: 1,
        size: 'tiny'
      },
      {
        id: 2,
        size: 'small'
      },
      {
        id: 3,
        size: 'standard'
      },
      {
        id: 4,
        size: 'large'
      },
      {
        id: 5,
        size: 'huge'
      }
    ];

    const factorsPadding = factors.map((factor, key) => {
      return (
        <div
          className={
            `atomic-padding-unit-${factor.size} ` +
            (factor.size === 'standard'
              ? 'u-padding '
              : `u-padding-${factor.size} `) +
            `u-margin-bottom-large`
          }
          key={key}
        >
          <div className={`atomic-padding-unit-${factor.size}-content`}>
            Content Area <br />with {factor.size} padding
          </div>
        </div>
      );
    });

    const factorsMargin = factors.map((factor, key) => {
      return (
        <div className="atomic-canvas" key={key}>
          <div className={`atomic-margin-unit-${factor.size} `} key={key}>
            <div
              className={
                `atomic-margin-unit-${factor.size}-content ` +
                (factor.size === 'standard'
                  ? 'u-margin '
                  : `u-margin-${factor.size} `)
              }
            >
              Content Area with {factor.size} margin
            </div>
          </div>
        </div>
      );
    });

    return (
      <section className="o-section u-padding">
        <header className="u-margin-bottom-large">
          <h2 className="u-margin-none">Layout</h2>
          <p>A tool to display paddings and margins around elements.</p>
        </header>

        <div className="u-margin-bottom-large  u-padding-bottom-small">
          <header className="u-margin-bottom">
            <h3 className="u-margin-bottom-small">Atomic Unit</h3>
            <p>
              The atomic unit is based on a global baseline of 6px. <br />
            </p>
          </header>

          <div className="o-grid  o-grid--centre  o-grid--auto">
            <div className="atomic-makup">
              <div className="nucleus u-margin-right-small" />
              <p className="u-margin-none">
                <span className="u-margin-right-small">Nucleus Unit</span>
                <small className="u-alchemy-primary-colour">6px</small>
                <br />Nucleus Unit (6px) multiplied by a factor of 1.
              </p>
            </div>

            <div className="atomic-makup">
              <div className="atomic-small u-margin-right-small">
                <div className="nucleus" />
              </div>
              <p className="u-margin-none">
                <span className="u-margin-right-small">Atomic Unit Small</span>
                <small className="u-alchemy-primary-colour">12px</small>
                <br />Nucleus Unit (6px) multiplied by a factor of 2.
              </p>
            </div>

            <div className="atomic-makup">
              <div className="atomic-standard u-margin-right-small">
                <div className="nucleus" />
              </div>
              <p className="u-margin-none">
                <span className="u-margin-right-small">
                  Atomic Unit Standard
                </span>
                <small className="u-alchemy-primary-colour">24px</small>
                <br />Nucleus Unit (6px) multiplied by a factor of 4.
              </p>
            </div>

            <div className="atomic-makup">
              <div className="atomic-large u-margin-right-small">
                <div className="nucleus" />
              </div>
              <p className="u-margin-none">
                <span className="u-margin-right-small">Atomic Unit Large</span>
                <small className="u-alchemy-primary-colour">48px</small>
                <br />Nucleus Unit (6px) multiplied by a factor of 8.
              </p>
            </div>

            <div className="atomic-makup">
              <div className="atomic-huge u-margin-right-small">
                <div className="nucleus" />
              </div>
              <p className="u-margin-none">
                <span className="u-margin-right-small">Atomic Unit Huge</span>
                <small className="u-alchemy-primary-colour">96px</small>
                <br />Nucleus Unit (6px) multiplied by a factor of 16.
              </p>
            </div>
          </div>
        </div>

        <div className="u-margin-bottom-large">
          <h3>Padding</h3>

          <div className="o-grid  o-grid--centre  o-grid--auto">
            {factorsPadding}
          </div>
        </div>

        <div className="u-margin-bottom-large">
          <h3>Margin</h3>

          <div className="o-grid  o-grid--centre  o-grid--auto">
            {factorsMargin}
          </div>
        </div>
      </section>
    );
  }
}

export default LayoutCard;
