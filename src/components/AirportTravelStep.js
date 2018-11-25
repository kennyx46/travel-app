import React from 'react';

import Icon from './Icon';
import formatTime from '../helpers/date';

import './travelStep.css';

const AirportTravelStep = ({ step }) => {
    return (
        <div className="travel-step step-airport">
            <span className="departure-date">{formatTime(step.departure)}</span>
            <div className="travel-step-content">
                <p><Icon type={step.type} /> {step.origin.value} {step.origin.type}</p>
                <div className="flex">
                    <span>Terminal C</span>
                    <span className="business-label">&middot; {step.detail.busyness_index === 10 ? "busy": "free"}</span>
                </div>
            </div>
        </div>
    );
}

export default AirportTravelStep;