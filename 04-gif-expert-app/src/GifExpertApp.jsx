import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

// luego de versión 17 de react no es necesario hacer la importación de Reac from ...
export const GifExpertApp = () =>{

    const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])
    console.log(categories)
    const onAddCategory = () => {
        const newCategory = 'Otra categoría'
        setcategories( prevCategories =>[ newCategory, ...prevCategories ] );
    }

    return (
        <>
            <h1>GIfExpertApp</h1>
            <AddCategory setcategories={setcategories} />
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { 
                    categories.map(category=> (<li key={category} >{category}</li>))
                }
            </ol>
        </>
    )
}