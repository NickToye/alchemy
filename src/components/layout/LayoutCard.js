import React from 'react';

import AtomicUnitCard from './AtomicUnitCard';
import PaddingCard from './PaddingCard';
import MarginCard from './MarginCard';
import LayoutGrid from './LayoutGrid';

class LayoutCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="u-margin-none">Layout</h1>
          <p>A tool to display paddings and margins around elements.</p>
        </header>

          <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
            <AtomicUnitCard />
            <PaddingCard />
            <MarginCard />
            <LayoutGrid />
          </section>
      </div>
    );
  }
}

export default LayoutCard;
