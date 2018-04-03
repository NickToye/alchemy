import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="main">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/335203/Alchemy%403x.png"
          className="patch  patch--alchemy"
        />
        <p>A curated toolkit of Sass goodies.</p>
      </header>
    );
  }
}

export default Header;
