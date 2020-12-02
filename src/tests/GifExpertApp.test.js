import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp'


describe('Test <GifExpertApp />', () => {
  
  test('show the component correctly', () => {
    
    const wrapper = shallow( <GifExpertApp  /> );
    expect ( wrapper ).toMatchSnapshot();
  
  });
  test('should show list of categories', () => {

    const categories = ['One Pice', 'Suits'];
    const wrapper = shallow( <GifExpertApp  defaultCategories={ categories }/> );
    expect ( wrapper ).toMatchSnapshot();
    expect ( wrapper.find('GifGrid').length ).toBe( categories.length );
    
  })
  
  
})
