import React from 'react';

import Icon from './Icon';
import formatTime from '../helpers/date';

import './travelStep.css';

const FlightTravelStep = ({ step }) => {
    return (
        <div className="travel-step step-flight">
            <span className="departure-date">{formatTime(step.departure)}</span>
            <div className="travel-step-content">
                <div className="flight-top-content flex padded">
                    <span>{step.detail.flight_number}</span>
                    <span>Boarding {formatTime(step.detail.boarding)}</span>
                </div>
                <div className="flight-main-content flex padded">
                    <p>{step.origin.value}</p>
                    <Icon type={step.type} />
                    <p>{step.destination.value}</p>
                </div>
                <div className="flight-footer flex padded">
                    <span>Gate {step.detail.gate}</span>
                    <span>Seat {step.detail.seat}</span>
                    <span className="time-label">On time</span>
                </div>
            </div>
        </div>
    );
}

export default FlightTravelStep;