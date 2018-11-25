import React from 'react';

const iconMapping = {
    "GROUND": "car",
    "AIRPORT": "airport",
    "FLIGHT": "airplane"
}

const Icon = ({type, className}) => {
    return (
        <span className={`icon ${className}`}>
            <img src={`images/${iconMapping[type]}.png`} width={20} height={20} alt={type}/>
        </span>
    );
}

export default Icon;