import React from 'react';

import GroundTravelStep from './GroundTravelStep';
import FlightTravelStep from './FlightTravelStep';
import AirportTravelStep from './AirportTravelStep';

import './TravelOverview.css'


class TravelOverview extends React.Component {

    stepMapping = {
        "GROUND": GroundTravelStep,
        "AIRPORT": AirportTravelStep,
        "FLIGHT": FlightTravelStep
    }

    cityAirportMapping = {
        "TXL": "Berlin",
        "MUC": "München"
    }

    render() {
        const { travelInfo } = this.props;

        if (!travelInfo) {
            return (
                <div>
                    "Loading"
                </div>
            );
        }

        return (
            <div className="travel-overview">
                <div className="travel-overview-header">
                    <h1><span>&lt;</span> Overview</h1>
                </div>
                <div className="travel-overview-content">
                    <p className="from-to-caption">
                        {this.cityAirportMapping[travelInfo.origin_iata]} - {this.cityAirportMapping[travelInfo.destination_iata]}
                    </p>

                    {travelInfo.segments.map((step, index) => {
                        const Component = this.stepMapping[step.type];
                        return <Component key={index} step={step} isActive={index === 0}/>
                    })}

                </div>

            </div>
        )
    }
}

export default TravelOverview;