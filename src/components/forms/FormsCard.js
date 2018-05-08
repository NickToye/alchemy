import React from 'react';

import formElements from '../data/formElements';
import ContentsCard from '../common/ContentsCard';
import Sticky from '../common/Sticky';
import ButtonsCard from './ButtonsCard';
import TextInputsCard from './TextInputsCard';
import SelectsCard from './SelectsCard';

class FormsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formElements: formElements,
    };
  }

  render() {
    return (
      <section className="o-section u-padding  u-relative">
        <header className="u-margin-bottom-large">
          <h1 className="u-margin-none">Forms</h1>
          <p>A tool that will display the correct form elements.</p>
        </header>

        <div className="o-flex  o-flex--row">
          <aside className="u-1/5 u-margin-right-large">
            <Sticky className="sticky-one a-alchemy-bg o-surface--l1" enter="370">
              <ul className="o-list-bare  u-margin-bottom-none a-contents-box">
                {Object.keys(this.state.formElements).map(key => (
                  <ContentsCard key={key} details={this.state.formElements[key]} />
                ))}
              </ul>
            </Sticky>
          </aside>

          <main className="u-4/5">
            <TextInputsCard />
            <ButtonsCard />
            <SelectsCard />
          </main>
        </div>
      </section>
    );
  }
}

export default FormsCard;

// TODO Change Buttons Card to Forms Card, and add a Buttons Card to that
// TODO Put the Buttons content inside white box with toolbar in header
