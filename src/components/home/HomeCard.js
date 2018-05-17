import React from 'react';



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


      </section>
    );
  }
}

export default HomeCard;
