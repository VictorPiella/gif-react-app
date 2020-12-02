import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

useFetchGifs
describe('test on useFetchGifs', () => {

  test('should return initial state', async() => {

    //const { data:images, loading } = useFetchGifs( category );

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'one piece' ));
    const { data, loading } = result.current;

    await waitForNextUpdate();
    
    expect( data ).toEqual([]);
    expect( loading ).toBe(true);


  })

  test('should return image arrat and loading false', async() => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'one piece' ));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe(10);
    expect( loading ).toBe(false);
    
  })
  
  
  
})
