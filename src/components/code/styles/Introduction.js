import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Introduction extends React.Component {
  render() {
    return (
      <ScrollableAnchor id={'introduction'}>
        <div className="u-margin-bottom-huge">
          <h2 className="u-alchemy-secondary2-colour">Introduction</h2>
          <p>
            When working on your own or in a team, it is important that the code you write is of a certain
            standard.
          </p>
          <p>Stylesheets must be:</p>
          <ul className="u-margin-bottom-large">
            <li>Maintainable</li>
            <li>Readable</li>
            <li>Scalable</li>
          </ul>

          <h3>Why is this important?</h3>
          <p>Well a coding styleguide is vital for developers who:</p>
          <ul className="u-margin-bottom-large">
            <li>build and maintain products for a non-specific length of time</li>
            <li>have variable levels of skill and experience</li>
            <li>are part of a larger development team</li>
            <li>will need to on-board new members of the team</li>
          </ul>
          <p>A concise well architectured styleguide will:</p>
          <ul className="u-margin-bottom-large">
            <li>set a standard across the entire codebase</li>
            <li>encourage a level of consistency for all developers</li>
            <li>setup a sound degree of familiarity</li>
            <li>increase productivity</li>
          </ul>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Introduction;
