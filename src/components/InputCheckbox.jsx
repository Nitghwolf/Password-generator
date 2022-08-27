import React from 'react';

const InputCheckbox = ({label, checked, onChange}) => {
    return (
        <div className="setting">
          <label>{label}</label>
          <input type="checkbox" checked={checked} onChange={() => onChange(prev => !prev)} />
        </div>
    );
}

export default InputCheckbox;