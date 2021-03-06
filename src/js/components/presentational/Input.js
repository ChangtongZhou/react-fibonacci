import React from "react";
import PropTypes from "prop-types";

/*
  A presentational component for displaying the text input markup and receiving data from the container component as props.
*/
const Input = ({ label, text, type, id, value, min, max, handleChange, placeholder}) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control center"
      id={id}
      value={value}
      min = {min}
      max = {max}
      onChange={handleChange}
      placeholder = {placeholder}
      required
    />
  </div>
);

// Check the data you recieve is valid during development mode
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  min:PropTypes.string.isRequired,
  max:PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder:PropTypes.string.isRequired
};
export default Input;
