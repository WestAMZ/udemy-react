import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) =>{
        const { name, value } = target;
        setFormState({
            ... formState, 
            [ name ]: value
        });
    }

    const onResetForm = () =>{
        setFormState( initialForm );
    }

    return {
        ...formState, // el form state propagado, nos permite mandar cada uno de los campos destructurados
        formState,
        onInputChange,
        onResetForm,
    };
}
