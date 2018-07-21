import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ onClick, buttonText="" }) => (
  <button
    className="btn btn-dark float-right mt-1 mr-3"
    onClick={ onClick }>
    {buttonText}
  </button>
);

ButtonPrimary.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default ButtonPrimary;