import React from 'react';
import './styles.css';

const TextInput = (props) => {
  const { name, value, label, onChange, type } = props;

  return (
    <div className='text-box-spacing'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
