import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ( { target } ) => { 
        setInputValue( target.value );
     }

     const onSubmit = ( event ) => { 
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim() <= 1) return;
        //setCategories(categories => [...categories,inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
      }
    
    return (
        <form onSubmit={(event) =>onSubmit(event)}>
            <input
                type='text'
                placeholder='Ingrese su texto :D'
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
        )
 }