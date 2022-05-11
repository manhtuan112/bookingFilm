import React from 'react';
import './input.scss'
const Input = ({type, placeholder, value, onChange}) => {
    return (
        <input type={type} placeholder={placeholder} value = {value} onChange={onChange ? onChange : null}   />
    );
}

export default Input;
