import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/home.css';
import Biblioteca from '../images/men.jpg';
import Catalogos from '../components/Catalogos'
export default class Home extends Component{
    render(){
       return(
           <div className='home-container'>
               <Navbar/>
               <div className='presentation' style={{backgroundImage:`url(${Biblioteca})`}}>                     
                    <h1>Lleva la relajacion de tu mente a cualquier lugar</h1>
               </div>
               <Catalogos/>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
               <p>loremiuashiaushiaush</p>
           </div>
       )
    }
}
