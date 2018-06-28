import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as colourActions from '../../actions/colourActions';
import ColourForm from './ColourForm';
import toastr from 'toastr';

export class ManageColoursPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      colour: Object.assign({}, this.props.colour),
      errors: {},
      saving: false
    };

    this.updateColourState = this.updateColourState.bind(this);
    this.saveColour = this.saveColour.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.colour.id != nextProps.colour.id) {
      this.setState({ colour: Object.assign({}, nextProps.colour) });
    }
  }

  updateColourState(event) {
    const field = event.target.name;
    let colour = Object.assign({}, this.state.colour);
    colour[field] = event.target.value;
    return this.setState({ colour: colour });
  }

  colourFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.colour.title.length < 5) {
      errors.title = "Title must be at least 5 characters";
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveColour(event) {
    event.preventDefault();

    if (!this.colourFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions
      .saveColours(this.state.colour)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Colour Saved');
    this.context.router.push('colours');
  }

  render() {
    return (
      <ColourForm
        onChange={this.updateColourState}
        onSave={this.saveColour}
        colour={this.state.colour}
        errors={this.state.errors}
        saving={this.state.saving}
        />
    );
  }
}

ManageColoursPage.propTypes = {
  colour: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

ManageColoursPage.contextTypes = {
  router: PropTypes.object
};

function getColourById(colours, id) {
  const colour = colours.filter(colour => colour.id == id);
  if (colour.length) return colour[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const colourId = ownProps.params.id;

  let colour = {
    id: '',
    title: '',
    type: ''
  };

  if (colourId && state.colours.length > 0) {
    colour = getColourById(state.colours, colourId);
  }

  return {
    colour: colour,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(colourActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageColoursPage);
