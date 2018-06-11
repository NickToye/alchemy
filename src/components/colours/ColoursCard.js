import React from 'react';
import PropTypes from 'prop-types';
import colours from '../data/colours';
import colourTypes from '../data/colourTypes';
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
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="testing">Colours</h1>
          <p>A tool that will display the correct colours.</p>
        </header>

        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          {Object.keys(this.state.contents).map(key => (
            <Palette key={key} palette={this.state.contents[key]} />
          ))}
        </section>
      </div>
    );
  }
}

ColoursCard.propTypes = {
  colourClassName: PropTypes.string,
};

export default ColoursCard;
