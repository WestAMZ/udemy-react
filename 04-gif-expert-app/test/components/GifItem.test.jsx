import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'

describe('Pruebas en <GifItem />', () =>{
    const title = 'Pruebas en <GifItem />'
    const url = 'https://media4.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=7f1ac2f6oze7n7tem6i9bmu0e0m0skhb896wn9mhtioo9mru&ep=v1_gifs_search&rid=giphy.gif&ct=g'

    test('debe de hacer match con snapshot', ()=>{

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

    test('debe mostrar la imagen con el URL y el ALT indicado', ()=>{

        render(<GifItem title={title} url={url} />);
        
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('alt').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        
    })

    test('debe mostrar el titulo en el componente', ()=>{

        render(<GifItem title={title} url={url} />);

        expect(screen.getByText( title )).toBeTruthy();
    })
})