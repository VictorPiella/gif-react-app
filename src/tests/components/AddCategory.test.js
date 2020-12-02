import React from 'react'
import '@testing-library/jest-dom';

import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Test <AddCategoriy />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  beforeEach( () => {
      jest.clearAllMocks();
      wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

  })
  
  test('should show properlly', () => {

    expect( wrapper ).toMatchSnapshot();
    
  })
  test('should change text box', () => {
    
    const input = wrapper.find('input');
    const value = 'Hello world'
    input.simulate('Change', { target: { value } });

    expect(wrapper.find('p').text().trim() ).toBe( value ); 

  })

  test('should not post data with submit ', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect( setCategories ).not.toHaveBeenCalled();


  })

  test('should  call setCategories and clean input', () => {

    const value = 'Hello world'
    //simulate inputChange
    wrapper.find('input').simulate('Change', { target: { value } });
    //simulate submit
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    //setCategories called
    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
    //inoput empty
    expect(wrapper.find('input').prop('value') ).toBe( '' ); 
    
  })
  
  
  
  
  
})
