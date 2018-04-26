import React from 'react';
import AtomicElement from './AtomicElement';
import Box from './Box';
import sizes from '../data/sizes';

class LayoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showXray: false,
      showXrayOpacity: false,
      sizes: sizes,
    };

    this.showXrayAction = this.showXrayAction.bind(this);
    this.showXrayOpacityAction = this.showXrayOpacityAction.bind(this);
  }

  showXrayAction() {
    this.setState(prev => ({ showXray: !prev.showXray }));
    this.setState({ showXrayOpacity: false });
  }

  showXrayOpacityAction() {
    this.setState(prev => ({ showXrayOpacity: !prev.showXrayOpacity }));
  }

  render() {
    return (
      <section className="o-section u-padding">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Layout</h1>
          <p>A tool to display paddings and margins around elements.</p>
        </header>

        <div className="u-margin-bottom-large  u-padding-bottom-small">
          <header className="u-margin-bottom">
            <h2 className="u-margin-bottom-small">Atomic Unit</h2>
            <p>
              The atomic unit is based on a global baseline of 6px. <br />
            </p>
          </header>

          <div className="o-media u-margin-bottom">
            <div className="o-media__img  nucleus u-margin-right-small" />
            <p className="o-media__body  u-margin-none">
              <span className="u-margin-right-small">Nucleus Unit</span>
              <small className="u-alchemy-primary-colour">6px</small>
              <br />Nucleus Unit (6px) multiplied by a factor of 1.
            </p>
          </div>

          <div className="o-grid  o-grid--centre  o-grid--auto">
            {Object.keys(this.state.sizes).map(key => (
              <AtomicElement key={key} details={this.state.sizes[key]} />
            ))}
          </div>
        </div>

        <div className="u-margin-bottom-large">
          <h3>Padding</h3>

          <div className="o-grid  o-grid--centre  o-grid--auto">
            {Object.keys(this.state.sizes).map(key => (
              <Box key={key} property={'padding'} details={this.state.sizes[key]} />
            ))}
          </div>
        </div>

        <div className="u-margin-bottom-huge">
          <h3>Margin</h3>

          <div className="o-grid  o-grid--centre  o-grid--auto">
            {Object.keys(this.state.sizes).map(key => (
              <Box key={key} property={'margin'} details={this.state.sizes[key]} />
            ))}
          </div>
        </div>

        <div className="u-margin-bottom-large u-padding-top-large  u-relative">
          <header className="u-margin-bottom">
            <h3>Layout Example</h3>
          </header>
          <div className="u-margin-bottom  c-toolbar">
            <button
              className={'c-toolbar__btn ' + (this.state.showXray ? 'active' : ' ')}
              onClick={this.showXrayAction}
            >
              <i className="fas fa-x-ray fa-lg" />
            </button>
            {this.state.showXray ? (
              <button
                className={'c-toolbar__btn ' + (this.state.showXrayOpacity ? 'active' : ' ')}
                onClick={this.showXrayOpacityAction}
              >
                <i className="fas fa-eye fa-lg" />
              </button>
            ) : (
              ''
            )}
          </div>

          <div className="o-flex  o-flex--row  o-flex--start  alchemy-layout-example  u-padding">
            <div className="o-flex__item  alchemy-layout-example-child  u-margin-right">
              <p className="u-margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p className="u-margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p className="u-margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p className="u-margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
              <p className="u-margin-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.
              </p>
            </div>
            <div className="o-flex__item  o-flex  o-flex--column  alchemy-layout-example-child  u-margin-left">
              <img src="https://placeimg.com/1200/400/arch" className="u-margin-bottom-large" />
              <div className="alchemy-layout-example-child-block  u-padding-large">
                <h2>This is a content block</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius
                  blandit sit amet non magna.
                </p>
              </div>
            </div>

            {this.state.showXray ? (
              <div
                className={
                  'o-flex  o-flex--row  o-flex--start alchemy-layout-example-xray  u-padding ' +
                  (this.state.showXrayOpacity ? 'alchemy-layout-example-xray-opacity' : ' ')
                }
              >
                <div className="o-flex__item alchemy-layout-example-child-xray" />
                <div className="o-flex__item  o-flex  o-flex--column  o-flex--start  alchemy-layout-example-child-xray  u-margin-left">
                  <div className="alchemy-layout-example-xray-margin  o-flex__item">
                    <div className="alchemy-layout-example-child-block-xray u-margin-bottom-large" />
                  </div>
                  <div className="alchemy-layout-example-child-block-xray  alchemy-layout-example-xray-padding  u-padding-large  o-flex__item">
                    <div className="alchemy-layout-example-xray-padding-inner">
                      <h2>This is a content block</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus
                        varius blandit sit amet non magna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default LayoutCard;
