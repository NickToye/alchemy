import React from 'react';
import { Link } from 'react-router';

class HomeCard extends React.Component {
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
