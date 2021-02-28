import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css';
import Biblioteca from '../images/men.jpg';
import Catalogos from '../components/Catalogos';

import Carrusel from '../components/Carrusel';
const Home = () => {
    let  [libros,setLibros] = useState([])
    useEffect(()=>{
        getLibros()
    }, [])
    const getLibros =async() =>{
        const url = 'http://127.0.0.1:8000/libros/api/v1/libros/'
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        setLibros(data)

    }
    
       return(
           <div className='home-container'>
               <Navbar/>
               <div className='presentation' style={{backgroundImage:`url(${Biblioteca})`}}>                     
                    <h1>Lleva la relajacion de tu mente a cualquier lugar</h1>
               </div>
               <Carrusel/>
               <Catalogos/>
              {libros.map((libro)=>{return (
                  <p>
                      {libro.name}
                  </p>
              )})}
           </div>
       )
    }

export default Home
