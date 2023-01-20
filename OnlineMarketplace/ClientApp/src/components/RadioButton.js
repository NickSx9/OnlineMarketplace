import React from 'react';

const RadioButton = (props) => {
  const { name, value, label, onChange, checked} = props;

  return (
    <div className="radio-label-spacing">
      <label htmlFor={name}>{label}</label>
      <input
        type="radio"
        id={name}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default RadioButton;

