import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ buttonClasses = "", onClick, buttonText = "" }) => (
  <button className={"btn btn-dark " + buttonClasses} onClick={onClick}>
    {buttonText}
  </button>
);

ButtonPrimary.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ButtonPrimary;
