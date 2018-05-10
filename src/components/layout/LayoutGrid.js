import React from 'react';

import Grid from './Grid';
import sizes from '../data/sizes';
import GridType from '../data/GridType';
import ScrollableAnchor from 'react-scrollable-anchor';
import ToolbarButton from './ToolbarButton';

class LayoutGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: GridType,
      sizes: sizes,
      activeSize: 'standard',
      showGutters: false,
    };

    this.updateSize = this.updateSize.bind(this);
    this.showGutters = this.showGutters.bind(this);
  }

  updateSize(e) {
    this.setState({ activeSize: e.target.value });
  }

  showGutters() {
    this.setState(prev => ({ showGutters: !prev.showGutters }));
  }

  render() {
    return (
      <ScrollableAnchor id="layout-grid">
        <section className="o-section u-relative o-surface--l2">
          <div className="a-toolbar o-flex o-flex--justify-between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Layout Grid</h2>
            <div className="a-toolbar__wrapper">
              {Object.keys(this.state.sizes).map(key => (
                <ToolbarButton
                  key={key}
                  details={this.state.sizes[key]}
                  activeSize={this.state.activeSize}
                  action={this.updateSize}
                />
              ))}
              <button
                className={`a-toolbar__btn ` + (this.state.showGutters ? 'active' : '')}
                onClick={this.showGutters}
              >
                Show Gutters Info
              </button>
            </div>
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">
            {Object.keys(this.state.grids).map(key => (
              <Grid
                key={key}
                layoutSize={this.state.activeSize}
                layoutSizeUnit={this.state.activeSizeUnit}
                details={this.state.grids[key]}
                gutters={this.state.showGutters}
              />
            ))}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default LayoutGrid;
