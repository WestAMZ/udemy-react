import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// luego de versión 17 de react no es necesario hacer la importación de Reac from ...
export const GifExpertApp = () =>{

    const [categories, setcategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setcategories( prevCategories =>[ newCategory, ...prevCategories ] );
    }

    return (
        <>
            <h1>GIfExpertApp</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}