import React from 'react';
import PropTypes from 'prop-types';
import colours from '../data/colours';
import colourTypes from '../data/colourTypes';
// import ContentsCard from '../common/ContentsCard';
// import Sticky from '../common/Sticky';
import Palette from './Palette';

class ColoursCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colours: colours,
      contents: colourTypes,
      colourTypePick: 'brand',
      activeLinks: '',
    };

    this.showColourTypePick = this.showColourTypePick.bind(this);
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


          <main>
            {Object.keys(this.state.contents).map(key => (
              <Palette key={key} palette={this.state.contents[key]} />
            ))}
          </main>
      </section>
    );
  }
}

ColoursCard.propTypes = {
  colourClassName: PropTypes.string,
};

export default ColoursCard;
