import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState(''); // si esta vacio es undefined, si le agrego '', es un string vacio

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        //console.log('Submit hecho')
        if(inputValue.trim().length > 2) {
            setCategories( cats => [...cats, inputValue])
            setinputValue('');
        }

        // para llamar a setcategories y pasa las categorias
        setCategories( cats => [inputValue, ...cats]);

    }


    return (
        <form onSubmit={handleSubmit} >
            {/* <h1>{inputValue}</h1> */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            >
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
