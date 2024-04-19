import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Kagamine Rin']);
    
    const onAddCategory = (newCategory) => {
        //console.log(newCategory)
        if(categories.includes(newCategory)) return;
        //setCategories(categories.concat(['Megurine Luka'])); //Ej usando concat()
        setCategories([newCategory,...categories]); //Ej. desestructurando "categories"

    }

    

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* Input sera una funcion en otro componente*/}
    <AddCategory onNewCategory = {(value) => onAddCategory(value) }/>

    {
        categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
    }

    </>
  )
}
