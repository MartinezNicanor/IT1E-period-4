import React from 'react';
import './../css/components.css';

const Select = ({ label, element, value, onChange }) => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className="selectMenu">
            <label>{label}</label>
            <select value={value} onChange={handleSelectChange}>
                {element.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
