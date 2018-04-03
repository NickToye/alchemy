/* eslint-disable import/no-named-as-default */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Header from './components/common/header';
import ColoursCard from './components/coloursCard';
import TypographyCard from './components/typographyCard';
import ButtonsCard from './components/buttonsCard';

import './styles/index.scss';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      selectedItem: 2,
    };
  }

  onSelect(index) {
    this.setState({
      selectedItem: index,
    });
  }

  renderMagic() {
    switch (this.state.selectedItem) {
      case 1:
        return <ColoursCard />;
      case 2:
        return <TypographyCard />;
      case 3:
        return <ButtonsCard />;
      default:
        return <ColoursCard />;
    }
  }

  render() {
    const patches = [
      {
        title: 'Colour',
        index: 1,
        icon:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Colours%403x.png',
      },
      {
        title: 'Typography',
        index: 2,
        icon:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Typography%403x.png',
      },
      {
        title: 'Buttons',
        index: 3,
        icon:
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Buttons%403x.png',
      },
    ];

    return (
      <div className="o-container">
        <Header />
        <Toggle
          patches={patches}
          selectedItem={this.state.selectedItem}
          onSelect={this.onSelect}
        />
        {this.renderMagic()}
      </div>
    );
  }
}

App.propTypes = {
  patches: PropTypes.array,
};

class ToggleItem extends React.Component {
  onSelect = () => this.props.onSelect(this.props.patch.index);
  render() {
    let className = this.props.selected ? 'patch patch--active' : 'patch';
    return (
      <div className={className} onClick={this.onSelect}>
        <img src={this.props.patch.icon} className="patch--sm" />
      </div>
    );
  }
}

ToggleItem.propTypes = {
  onSelect: PropTypes.func,
  patch: PropTypes.string,
  selected: PropTypes.bool,
};

function Toggle(props) {
  return (
    <div className="o-grid  o-grid--auto">
      {props.patches.map(patch => (
        <ToggleItem
          patch={patch}
          key={patch.index}
          selected={props.selectedItem == patch.index}
          onSelect={props.onSelect}
        />
      ))}
    </div>
  );
}

Toggle.propTypes = {
  patches: PropTypes.array,
  onSelect: PropTypes.func,
  selectedItem: PropTypes.bool,
};

ReactDOM.render(<App />, document.getElementById('app'));
