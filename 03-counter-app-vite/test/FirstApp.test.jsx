import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', ()=>{
    // test('debe de hacer match con el snapshot', ()=>{

    //     const title = 'Hola soy goku';
    //     const { container } = render(<FirstApp title={title}/>)

    //     expect( container ).toMatchSnapshot();
    // });


    test('debe de mostrar el título en un h1', ()=>{

        const title = 'Hola soy goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title}/>)
        expect( getByText(title) ).toBeTruthy();

        // no recomendado, usando métodos de DOM
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain(title);

        expect( getByTestId('test-title').innerHTML ).toBe(title);
    });

    test('debe de mostrar el subtítulo enviado por props',()=>{
        const title = 'Hola soy goku';
        const subtitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp 
                title={ title }
                subTitle={ subtitle }
            />
        );

        // AllBy en caso de esperar más de uno
        //expect( getAllByText(subtitle).length).toBe(2);
        expect( getByText(subtitle)).toBeTruthy();
    });
});