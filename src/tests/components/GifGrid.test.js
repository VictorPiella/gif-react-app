import React from 'react';
import '@testing-library/jest-dom'

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test  <GifGrid />', () => {

  const category = 'One Punch';
  
  test('show the component correctly', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    
    const wrapper = shallow( <GifGrid category={ category } /> );
    expect ( wrapper ).toMatchSnapshot();
  
  });

  test('should show items when is charged useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/ranom.jpg',
      title: 'Lorem'
    },{
      id: 'ABC',
      url: 'https://localhost/ranom.jpg',
      title: 'Lorem'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category={ category } /> );

    //expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe( gifs.length);

  })
  
  
  
})
