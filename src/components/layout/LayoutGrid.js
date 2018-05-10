import React from 'react';

import Grid from './Grid';
import sizes from '../data/sizes';
import GridType from '../data/GridType';
import ScrollableAnchor from 'react-scrollable-anchor';
import ToolbarButton from '../common/ToolbarButton';

class LayoutGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grids: GridType,
      sizes: sizes,
      activeSize: 'standard',
    };

    this.updateSize = this.updateSize.bind(this);
  }

  updateSize(e) {
    this.setState({ activeSize: e.target.value });
  }

  render() {
    return (
      <ScrollableAnchor id="layout-grid">
        <section className="o-section u-relative o-surface--l2">
          <div className="c-textbar o-flex o-flex--justify-between o-flex--align-center o-flex--row u-padding">
            <h2 className="u-alchemy-white-colour u-margin-none">Layout Grid</h2>
            <div className="tools-wrapper">
              {Object.keys(this.state.sizes).map(key => (
                <ToolbarButton
                  key={key}
                  details={this.state.sizes[key]}
                  activeSize={this.state.activeSize}
                  action={this.updateSize}
                />
              ))}
            </div>
          </div>

          <div className="u-margin-bottom u-padding a-alchemy-bg-dark">
            {Object.keys(this.state.grids).map(key => (
              <Grid
                key={key}
                layoutSize={this.state.activeSize}
                layoutSizeUnit={this.state.activeSizeUnit}
                details={this.state.grids[key]}
              />
            ))}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}

export default LayoutGrid;
