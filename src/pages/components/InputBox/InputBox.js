import React from "react";
import PropTypes from "prop-types";
import "../../../styles/styles.css";

const InputBox = ({ label, type, placeholder, defaultValue }) => {
  return (
    <div className="input-container">
      <p className="label">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="input-box"
      />
    </div>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

InputBox.defaultProps = {
  defaultValue: "",
};

export default InputBox;
