import React from 'react';
import PropTypes from 'prop-types';
import colours from '../data/colours';
import colourTypes from '../data/colourTypes';
import ContentsCard from '../common/ContentsCard';
import Sticky from '../common/Sticky';
import Palette from './Palette';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: colours,
      colourTypes: colourTypes,
      colourTypePick: 'brand',
      activeLinks: '',
    };

    this.showColourTypePick = this.showColourTypePick.bind(this);
    this.setActiveLink = this.setActiveLink.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeLink: this.state.colourTypes.section.identifider,
    });
  }

  setActiveLink(e) {
    this.setState({ activeLink: e.target.dataset.value });
  }

  showColourTypePick(e) {
    this.setState({ colourTypePick: e.target.value });
  }

  render() {
    return (
      <section className="o-section  u-padding  u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="testing u-margin-bottom-none">Colours</h1>
          <p>A tool that will display the correct colours.</p>
        </header>

        <div className="o-flex  o-flex--row">
          <aside className="u-1/5 u-margin-right-large">
            <Sticky className="sticky-one a-alchemy-bg o-surface--l1" enter="370">
              <ul className="o-list-bare  u-margin-bottom-none a-contents-box">
                {Object.keys(this.state.colourTypes).map(key => (
                  <ContentsCard
                    key={key}
                    details={this.state.colourTypes[key]}
                    activeLink={this.state.activeLink}
                    action={this.setActiveLink}
                  />
                ))}
              </ul>
            </Sticky>
          </aside>
          <main className="u-4/5">
            {Object.keys(this.state.colourTypes).map(key => (
              <Palette key={key} palette={this.state.colourTypes[key]} />
            ))}
          </main>
        </div>
      </section>
    );
  }
}

ColoursCard.propTypes = {
  colourClassName: PropTypes.string,
};

export default ColoursCard;
