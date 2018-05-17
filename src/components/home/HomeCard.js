import React from 'react';

import PopularBar from '../playground/PopularBar';

class HomeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopularBar: true,
      upCount: 5,
      downCount: 8,
    };
  }

  componentDidMount() {
    // this.timer = setInterval(this.everyFiveSeconds.bind(this), 5000);
  }

  everyFiveSeconds() {
    let state = this.state;
    state.upCount += 20;
    this.setState(state);
  }

  render() {
    return (
      <section className="o-section u-padding">
        <header>
          <h2>Alchemy</h2>
          <p>Sass toolkit, built with React.</p>
        </header>

        <div className="u-padding u-alchemy-white-bg">
          <h2>Component Lifecycle</h2>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.state.showPopularBar}
              ref="showPopularBar"
              onChange={() => this.setState({ showPopularBar: !this.state.showPopularBar })}
            />
            Show popular bar
          </label>

          <PopularBar
            show={this.state.showPopularBar}
            upCount={this.state.upCount}
            downCount={this.state.downCount}
          />
        </div>
      </section>
    );
  }
}

export default HomeCard;
