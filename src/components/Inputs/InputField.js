import React from "react";
import PropTypes from "prop-types";

const InputField = ({ id="", inputClasses="", onChange, name="", value="", placeholder="" }) => (
  <input
    id={id}
    className={"form-control " + inputClasses}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}/>
);

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inputClasses: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default InputField;