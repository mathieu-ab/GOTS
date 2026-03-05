import React from 'react';
import './ClassicText.css';

const ClassicText = ({ text = "placeholder" }) => {
    return (
        <p className="ClassicText-Container">{text}</p>
    );
};

export default ClassicText;