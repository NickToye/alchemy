// This component handles the App template used on every page
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTimes,
  faExclamationTriangle,
  faInfoCircle,
  faCog,
  faDesktop,
  faMobileAlt,
  faTabletAlt,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';

import Aside from './common/Aside';
import ToolBar from './common/ToolBar';

library.add(
  faCheck,
  faTimes,
  faExclamationTriangle,
  faInfoCircle,
  faCog,
  faDesktop,
  faMobileAlt,
  faTabletAlt,
  faLaptop,
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      mq: 'room',
      mqIcon: 'mobile-alt',
      mqIconRotate: null,
      animationSpeed: 'base',
      showModal: false,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateSpeedPick = this.updateSpeedPick.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const breakpoints = {
      room: 0,
      village: 414,
      town: 736,
      city: 768,
      country: 1024,
      continent: 1280,
      world: 1366,
    };

    this.setState({ width: window.innerWidth, height: window.innerHeight });

    if (window.innerWidth < breakpoints.town) {
      this.setState({ mq: 'village' });
      this.setState({ mqIcon: 'mobile-alt' });
      this.setState({ mqIconRotate: null });
    } else if (window.innerWidth < breakpoints.city) {
      this.setState({ mq: 'town' });
      this.setState({ mqIcon: 'tablet-alt' });
      this.setState({ mqIconRotate: null });
    } else if (window.innerWidth < breakpoints.country) {
      this.setState({ mq: 'city ' });
      this.setState({ mqIcon: 'tablet-alt' });
      this.setState({ mqIconRotate: null });
    } else if (window.innerWidth < breakpoints.continent) {
      this.setState({ mq: 'country' });
      this.setState({ mqIcon: 'tablet-alt' });
      this.setState({ mqIconRotate: 90 });
    } else if (window.innerWidth < breakpoints.world) {
      this.setState({ mq: 'continent' });
      this.setState({ mqIcon: 'laptop' });
      this.setState({ mqIconRotate: null });
    } else {
      this.setState({ mq: 'world' });
      this.setState({ mqIcon: 'desktop' });
      this.setState({ mqIconRotate: null });
    }
  }

  updateSpeedPick(e) {
    this.setState({ animationSpeed: e.target.value });
  }

  render() {
    return (
      <div className="o-wrapper  o-wrapper--full  u-padding-none">
        <div className="o-flex o-flex--row">
          <Aside />

          <main className="u-6/8  u-alchemy-white-bg">{this.props.children}</main>
        </div>
        <ToolBar
          settings={this.handleOpenModal}
          animationSpeed={this.state.animationSpeed}
          mq={this.state.mqIcon}
          mqRotate={this.state.mqIconRotate}
        />
        <Modal
          isOpen={this.state.showModal}
          className="Modal u-alchemy-white-bg u-padding"
          overlayClassName="Overlay"
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          closeTimeoutMS={1000}
        >
          <i className="fa fa-times modal--close" onClick={this.handleCloseModal} />
          <h2>Settings...</h2>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
