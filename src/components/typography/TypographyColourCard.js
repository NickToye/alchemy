import React from 'react';

class TypographyColourCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      droplets: [
        'primary',
        'secondary1'
      ],
      dropPick: ''
    };

    this.showDropPick = this.showDropPick.bind(this);
  }

  showDropPick(e) {
    // this.setState(prev => ({ showFoo: !prev.showFoo }));
    this.setState({ dropPick: e.target.value });
    console.log('drop pick');
  }

  render() {

    const dropPick = this.state.dropPick;

    const dropletsList = this.state.droplets.map((drop, key) => {
      const isCurrent = this.state.dropPick === drop;
      return (
        <button
          className={`u-alchemy-${drop}-colour c-toolbar__btn ` + (isCurrent ? 'active' : '')}
          key={key}
          value={drop}
          onClick={this.showDropPick}
        >
          <i className="fas fa-tint fa-lg" />
        </button>
      );
    });

    return (
      <div className="u-inline-block">
        {dropletsList}
      </div>
    );
  }
}

export default TypographyColourCard;
