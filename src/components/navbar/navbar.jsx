import React from 'react';

import { Link } from 'react-router-dom'

import './navbar.css'


export default function Navbar(){
    return(
        <div className ="navbar__container">
            <div className="title">
                <h1>Groupomania</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/signup">Inscription</Link> </li>
                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/newPost"> ajouter un post</Link></li>
                </ul>
            </nav>
        </div>
    )
}