import React from 'react';

import Grid from './Grid';
import sizes from '../data/sizes';
import GridType from '../data/GridType';
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
        <section className="o-section u-relative u-margin-bottom">
          <div className="a-toolbar__inner o-flex o-flex--justify-between o-flex--align-center o-flex--row u-margin-bottom">
            <h2 className="u-alchemy-primary-colour u-margin-none">Layout Grid</h2>
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

          <div className="u-margin-bottom">
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
    );
  }
}

export default LayoutGrid;
