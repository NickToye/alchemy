import React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
    };

    super();
    console.log(props.emoji + '=== ClickCounter constructor is here!');
  }

  componentWillMount() {
    console.log(this.props.emoji + '=== ClickCounter will mount.');
  }

  componentDidMount() {
    console.log(this.props.emoji + '=== ClickCounter did mount. count: ' + this.props.count);
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.emoji + '=== ClickCounter will receive props. next props:' + nextProps.count);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let currTotal = this.getTotal();
    let shouldUpdate = currTotal < 100;

    console.log(this.props.emoji + '=== ClickCounter should ' + (shouldUpdate ? '' : 'NOT ') + 'update');
    return shouldUpdate;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      this.props.emoji +
        '=== ClickCounter will update' +
        ' nextProps.count: ' +
        nextProps.count +
        ' nextState.clickCount: ' +
        nextState.clickCount,
    );
  }

  componentDidUpdate() {
    console.log(this.props.emoji + '=== ClickCounter did update');
  }

  componentWillUnmount() {
    console.log(this.props.emoji + '=== ClickCounter will unmount');
  }

  getTotal() {
    return this.state.clickCount + this.props.count;
  }

  render() {
    return (
      <span
        className="u-padding"
        onClick={() => {
          let clickCount = this.state.clickCount + 1;
          this.setState({ clickCount: clickCount });
        }}
      >
        <button>{this.props.emoji}</button>
        {this.getTotal() < 100 ? this.getTotal() : '99+'}
      </span>
    );
  }
}

export default ClickCounter;
