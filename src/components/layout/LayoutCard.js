import React from 'react';

import layoutTypes from '../data/layoutTypes';
import AtomicUnitCard from './AtomicUnitCard';
import PaddingCard from './PaddingCard';
import MarginCard from './MarginCard';
import LayoutGrid from './LayoutGrid';

class LayoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: layoutTypes,
      activeLink: '',
    };

    this.setActiveLink = this.setActiveLink.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeLink: this.state.contents.section1.identifier,
    });
  }

  setActiveLink(e) {
    this.setState({ activeLink: e.target.dataset.value });
  }

  render() {
    return (
      <section className="o-section u-padding">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Layout</h1>
          <p>A tool to display paddings and margins around elements.</p>
        </header>

          <main>
            <AtomicUnitCard />
            <PaddingCard />
            <MarginCard />
            <LayoutGrid />
          </main>
      </section>
    );
  }
}

export default LayoutCard;
