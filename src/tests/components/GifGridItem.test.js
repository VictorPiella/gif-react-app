import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Test  <GifGridItem />', () => {

    const title = "A title";

    const url = "https://localhost/text.jpg";

    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('show the component correctly', () => {

        expect ( wrapper ).toMatchSnapshot();
      
    })

    test('should had a <p> with the title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('should has image = url and alt = props', () => {

        const img = wrapper.find('img');

        expect ( img.prop('src') ).toBe(url);
        expect ( img.prop('alt') ).toBe(title);
        
    })

    test('should had clñass fade in', () => {

        const div = wrapper.find('div');

        expect ( div.prop('className').includes('animate__fadeIn') ).toBe( true )
        
    })
    
    
})