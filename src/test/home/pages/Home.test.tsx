import { render } from '@testing-library/react';
import { Home } from '../../../home';

describe('Pruebas en componente <Home />', () => { 
    test('Debe ser igual al snapshot', () => { 
        const { container } = render( <Home /> );

        expect( container ).toMatchSnapshot();
    });
});