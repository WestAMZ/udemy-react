import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',()=>{
    test('getHeroByIdAsync debe de retornar un héroe', (done)=>{

        // done es una función que se ejecuta al terminar, este indica al jest que debe esperar esta ejecución para dar por terminado el test
        const id = 1;
        getHeroeByIdAsync( id )
        .then(hero =>{
            expect( hero ).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        })

        
    });


    test('getHeroByIdAsync debe de retornar error', (done)=>{

        const id = 100;
        getHeroeByIdAsync( id )
        // Esto estaría de más, en  casos donde lo que nos interesa evaluar es el catch
        .then(hero =>{
            expect( hero ).toBeFalsy();
            done();
        })
        .catch(error =>{
            expect( error ).toBe('No se pudo encontrar el héroe ' + id)
            done();
        })

    // ultimo parámetro de test(), es timeout        
    //},20000);
    });
});