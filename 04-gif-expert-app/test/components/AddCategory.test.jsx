import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', ()=>{

    test('debe cambiar el valor de la caja de texto', ()=>{
        
        render(<AddCategory onNewCategory={ ()=>{} } />);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Saitama' }} );

        // en el componente se hace el cambio de estado que a su vez cambia el contenido del input
        expect( input.value ).toBe('Saitama');
        
    });

    test('debe de llamar onNewCategory si el input tine un valor', ()=>{
        const inputValue  = 'Saitama';

        render(<AddCategory onNewCategory={ ()=>{} } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );
        // luego de submit input debe quedar vacío, según lo programado en evento submit
        expect( input.value ).toBe('');
    });
})