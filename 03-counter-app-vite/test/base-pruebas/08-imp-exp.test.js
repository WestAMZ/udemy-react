
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp',()=>{

    test('getHeroeById debe retornar un héroe por ID',()=>{
        const id = 1;
        const hero = getHeroeById(id);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById debe retornar undefined si no existe el id',()=>{
        const id = 100;
        const hero = getHeroeById(id);
        
        // nota false es un valor falsy tambien, cuidado con eso
        expect( hero ).toBeFalsy();
    })

    test('getHeroeByOwner debe retornar heroes de DC un arreglo de tamaño 3',()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        expect( Array.isArray(heroes) ).toBe(true)
        expect( heroes.length ).toBe(3)
    })

    test('getHeroeByOwner debe retornar heroes de Marvel un arreglo de tamaño 2',()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect( heroes ).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
        expect( Array.isArray(heroes) ).toBe(true)
        expect( heroes.length ).toBe(2)
    })

})