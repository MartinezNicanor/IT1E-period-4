import React from 'react';
import './../css/components.css';

const Select = ({ label, element }) => {
    return (
        <div className="selectMenu">
            <label>{label}</label>
            <select>
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
