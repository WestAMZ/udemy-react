import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', ()=>{

    const title = 'Hola soy goku';
    const subTitle = 'soy un subtitulo'

    test('debe de hacer match con el snapshot', ()=>{

        const { container } = render(<FirstApp title={title}/>)

        expect( container ).toMatchSnapshot();
    });


    test('debe de mostrar el el mensaje "Hola soy goku"', ()=>{

        render(<FirstApp title={title}/>)
        // screen es todo el componente renderizado, desde la etiqueta <body />
        expect( screen.getByText(title) ).toBeTruthy();
        // en caso de querer verificar que no exista
        //expect( screen.getByText(title) ).not.toBeTruthy();
    });

    test('debe de mostrar el título en un h1',()=>{

        render(
            <FirstApp  title={ title } />
        );

        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtítulo enviado por props',()=>{

        render(
            <FirstApp  title={ title } subTitle={subTitle}/>
        );

        expect( screen.getAllByText(subTitle).length ).toBe( 2 );
    });

});