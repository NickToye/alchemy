import React from 'react';
import ClickCounter from './ClickCounter';

var thumbsup = '\u{1F44D}';
var thumbsdown = '\u{1F44E}';

class PopularBar extends React.Component {
  constructor() {
    super();
    console.log('--- PopularBar constructor is here!');
    this.state = {
      fizz: true,
      fizzStatus: '',
    };
  }

  componentWillMount() {
    console.log('--- PopularBar will mount.');
    setTimeout(
      () =>
        this.setState({
          fizz: true,
          fizzStatus: 'Will Mount',
        }),
      5000,
    );
  }

  componentDidMount() {
    console.log(
      '--- PopularBar did mount. upCount: ' + this.props.upCount + ', downCount: ' + this.props.downCount,
    );
    setTimeout(
      () =>
        this.setState({
          fizz: true,
          fizzStatus: 'Did Mount',
        }),
      5000,
    );
  }

  render() {
    if (!this.props.show) {
      return <div />;
    }

    return (
      <div className="u-padding" style={this.props.style}>
        <ClickCounter emoji={thumbsup} count={this.props.upCount} />
        {this.state.fizz ? <div id="fizz">{this.state.fizzStatus}</div> : ''}
      </div>
    );
  }
}

export default PopularBar;
