import { useState } from 'react';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        setcategories( preveCategories => [inputValue, ...preveCategories] );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type= "text"
                placeholder="Buscar Gif"
                value = {inputValue}
                //onChange={ (event) => onInputChange(event)
                // parametro event es pasado a la función en automático
                onChange={ onInputChange }
            />
        </form>
    )
}