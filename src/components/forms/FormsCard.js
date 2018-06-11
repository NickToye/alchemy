import React from 'react';

import ButtonsCard from './ButtonsCard';
// import TextInputsCard from './TextInputsCard';
// import SelectsCard from './SelectsCard';

class FormsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render() {
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="u-margin-none">Forms</h1>
          <p>A tool that will display the correct form elements.</p>
        </header>

          <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
            {/*<TextInputsCard />*/}
            <ButtonsCard />
            {/*<SelectsCard />*/}
          </section>
      </div>
    );
  }
}

export default FormsCard;
