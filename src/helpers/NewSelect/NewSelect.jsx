import React from "react";
// import { Typeahead } from "react-boo÷tstrap-typeahead";
import { PropTypes } from "prop-types";
const NewSelect = ({
  labelKey,
  label,
  value,
  onChange,
  options,
  isMulti = false,
}) => {
  return (
    <>
    <input onChange={onChange} value={value} />
      {/* <Typeahead
        id="basic-typeahead-example"
        labelKey={labelKey}
        multiple={isMulti}
        onChange={onChange}
        options={options}
        placeholder={label}
        selected={value}
      /> */}
    </>
  );
};

NewSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array,
  labelKey: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  isMulti: PropTypes.bool,
};
export default NewSelect;
