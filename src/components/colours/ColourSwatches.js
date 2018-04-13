import React from 'react';

class ColourSwatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swatches: [
        'primary',
        'secondary1',
        'secondary2',
        'secondary3',
        'black',
        'light-grey',
        'pale-grey',
        'grey',
        'medium-grey',
        'dark-grey',
        'positive',
        'caution',
        'negative',
        'info'
      ]
    };
  }
}

export default ColourSwatches;
