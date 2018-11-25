import React from 'react';

import Icon from './Icon';
import formatTime from '../helpers/date';

import './travelStep.css';

const GroundTravelStep = ({ step, isActive }) => {
    return (
        <div className={`travel-step step-ground ${isActive ? "active" : ""}`}>
            <span className="departure-date">{formatTime(step.departure)}</span>
            <div className="travel-step-content">
                <Icon type={step.type} className="inverted"/>
                <span>Pick up from</span>
                <p>{step.origin.value}</p>
            </div>
        </div>
    );
}

export default GroundTravelStep;