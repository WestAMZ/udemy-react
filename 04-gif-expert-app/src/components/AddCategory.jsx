import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;
        
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        // Atributo aria-label="form", agregadp àra ser reconocido por react-testing library
        <form onSubmit={ onSubmit } aria-label="form">
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

AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired
}