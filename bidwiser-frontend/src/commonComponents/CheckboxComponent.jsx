import React from "react";
//MUI Components
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";

const CheckboxComponent = ({ 
  label, 
  checked=true, 
  onChange, 
  className 
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} className={className} />
      }
      label={label}
    />
  );
};

CheckboxComponent.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
};

export default CheckboxComponent;