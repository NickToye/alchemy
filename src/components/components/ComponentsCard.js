import React from 'react';

// import BannerComponent from './banners/BannerComponent';
// import CardComponent from './cards/CardComponent';
// import NavigationComponent from './navigation/NavigationComponent';

class ComponentsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="o-section u-padding">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Components</h1>
          <p>A collection of components.</p>
        </header>

        <main className="u-4/5">...</main>
      </section>
    );
  }
}

export default ComponentsCard;
