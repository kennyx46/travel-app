import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';


describe('Icon', () => {

    it('renders image by type', () => {
        const wrapper = shallow(<Icon type="GROUND"/>);

        expect(wrapper.find('img').props().src).toEqual("images/car.png");
    });

    it('renders image with invalid path', () => {
        const wrapper = shallow(<Icon type="bla" />);

        expect(wrapper.find('img').props().src).toContain("undefined");
    });

});