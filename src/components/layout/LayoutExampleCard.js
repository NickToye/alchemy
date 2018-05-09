import React from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

class LayoutExampleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showXray: false,
      showXrayOpacity: false,
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
      <ScrollableAnchor id="layout-example">
        <section className="o-section u-relative o-surface--l2">
          <div className="c-textbar o-flex o-flex--justify-between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Layout Example</h2>
            <div className="tools-wrapper">
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
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">
            <div className="o-layout  o-layout--large  alchemy-layout-example  u-padding-vertical">
              <div className="o-layout__item  u-1/4  alchemy-layout-example-child">
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
              <div className="o-layout__item  u-3/4  o-flex  o-flex--column  alchemy-layout-example-child">
                <img src="https://placeimg.com/1200/400/arch" className="u-margin-bottom-large" />
                <div className="alchemy-layout-example-child-block  u-padding-large">
                  <h2>This is a content block</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus
                    varius blandit sit amet non magna.
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
                  <div className="o-layout  alchemy-layout-example-child-xray  u-margin-left">
                    <div className="alchemy-layout-example-xray-margin  u-1/4  o-layout__item">
                      <div className="alchemy-layout-example-child-block-xray u-margin-bottom-large" />
                    </div>
                    <div className="alchemy-layout-example-child-block-xray  alchemy-layout-example-xray-padding  u-padding-large  u-3/4  o-layout__item">
                      <div className="alchemy-layout-example-xray-padding-inner">
                        <h2>This is a content block</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget
                          risus varius blandit sit amet non magna.
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
      </ScrollableAnchor>
    );
  }
}

export default LayoutExampleCard;

// FIXME Layout, it is not responsive.
