import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TravelOverview from './TravelOverview';

import GroundTravelStep from './GroundTravelStep';
import FlightTravelStep from './FlightTravelStep';
import AirportTravelStep from './AirportTravelStep';

import data from '../data.json';


describe('TravelOverview', () => {

    let props = {};

    beforeEach(() => {
        props.travelInfo = { ...data }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TravelOverview />, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it('displays loader when no data available', () => {
        props.travelInfo = null;
        const wrapper = shallow(<TravelOverview {...props} />);

        expect(wrapper.text()).toContain("Loading");
    })

    describe('travelInfo available', () => {

        it('renders content', () => {
            const wrapper = shallow(<TravelOverview {...props} />);

            expect(wrapper.find(".travel-overview").exists()).toBeTruthy();
        });

        it('maps segments to components and renders corresponding steps', () => {
            const wrapper = shallow(<TravelOverview {...props} />);

            expect(wrapper.find(GroundTravelStep).exists()).toBeTruthy();
            expect(wrapper.find(FlightTravelStep).exists()).toBeTruthy();
            expect(wrapper.find(AirportTravelStep).exists()).toBeTruthy();
        });

        it('renders only steps mentioned in segments', () => {
            props.travelInfo.segments.length = 1;
            const wrapper = shallow(<TravelOverview {...props} />);

            expect(wrapper.find(GroundTravelStep).exists()).toBeTruthy();
            expect(wrapper.find(FlightTravelStep).exists()).toBeFalsy();
        });

        it('maps airports to cities', () => {
            const wrapper = shallow(<TravelOverview {...props} />);

            expect(wrapper.find('.from-to-caption').text()).toEqual("Berlin - München");
        });
        
    })

});