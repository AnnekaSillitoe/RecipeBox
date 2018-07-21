import React from "react";
import PropTypes from "prop-types";

const ButtonOutline = ({ buttonClasses="", onClick, buttonText="" }) => (
  <button
    className={"btn btn-outline-dark " + buttonClasses}
    onClick={onClick}
  >
    {buttonText}
  </button>
);

ButtonOutline.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonClasses: PropTypes.string
};

export default ButtonOutline;