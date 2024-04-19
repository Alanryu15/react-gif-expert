import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => { 

const {images, isLoading} = useFetchGifs (category);

    return(
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h1>Cargando las imagenes</h1>)
            }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }     {/* Return implicito (return compelto en clase 81) */}
            </div>
        </>
    )
 }