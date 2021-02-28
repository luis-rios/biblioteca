import React from 'react';
import '../styles/navbar.css'
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/digitalb.png';
export default function Navbar(props){
    
    return (        
        <nav className="body-nav">                
            <img src={image} style={{width:'250px'}}/><p>Biblioteca Digital!</p> 
            <ul className="nav-container" >
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Autores</a></li>
                <li><a href="#">Sagas</a></li>
                <li><a href="#">Paginas</a></li>                    
            </ul>
            <form>
                <FontAwesomeIcon icon={faSearch} style={{paddingRight:'10px', fontSize:'30px', color:'white'}}/>
                {/*<input className="input-search" type="search" placeholder="Buscar"/>
                <button className="button-search">Buscar</button>*/}
            </form>            
        </nav>
    )
}