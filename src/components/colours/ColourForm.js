import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';

const ColourForm = ({ colour, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Colours</h1>
      <TextInput name="colour" label="Colour" value={colour.title} onChange={onChange} error={errors.title} />

    <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'Save'}
      className="c-btn c-btn--primary"
      onClick={onSave}
      />
  </form>
);
};

ColourForm.propTypes = {
  colour: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ColourForm;
