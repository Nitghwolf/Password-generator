import React from 'react';

const InputNumber = ({label, length, onChange}) => {
    return (
        <div className="setting">
          <label>{label}</label>
          <input type="number" id="length" min="4" max="20" value={length} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default InputNumber;