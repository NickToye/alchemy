import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as typographyActions from '../../actions/typographyActions';

import TypeSizeList from './TypeSizeList';
import TypeFaceList from './TypeFaceList';

class TypographyCard extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { typography } = this.props;
    const { typefaces } = this.props;
    return (
      <div className="u-relative">
        <header className="u-padding">
          <h1 className="u-margin-bottom-none">Typography</h1>
          <p>A tool that will display the correct typography.</p>
        </header>
        <section className="u-padding u-alchemy-pale-grey-bg--tint-50">
          <TypeSizeList typography={typography} />
          <TypeFaceList typefaces={typefaces} />
        </section>
      </div>
    );
  }
}

TypographyCard.propTypes = {
  typography: PropTypes.array.isRequired,
  typefaces: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    typography: state.typography,
    typefaces: state.typefaces,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(typographyActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TypographyCard);
