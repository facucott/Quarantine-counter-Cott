import { useState, useEffect } from 'react';
// import customFetch from '../utils/customFetch';
import dataFromBD from '../utils/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { data } from '../utils/customFetch';
import { useParams } from "react-router";
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    const [dato, setDato] = useState([]);

    const { idCategory } = useParams()

    useEffect (() => {

        
    if (idCategory) {

        data(2000, dataFromBD)
        .then(result => setDato (result.filter(item => item.categoryId == idCategory)))
        .catch(err => console.log(err))

        } else {
        data(2000, dataFromBD)
        .then(result => setDato (result))
        .catch(err => console.log(err))
        }
        
    }, [idCategory]);

        // data().then(respuesta =>{
        //     setDato(respuesta);
        // })

        // customFetch(2000, dataFromBD)
        // .then(result => setDato (result))
        // .catch(err => console.log(err))



    return (
        <div className="container">
        <div className="row">
        <ItemList data= {dato} />
        </div>
        </div>

    );
    
}


export default ItemListContainer