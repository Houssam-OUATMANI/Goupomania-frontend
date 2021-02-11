import React from 'react';
import image from '../../image/No_More_404s.gif'
import { Link } from 'react-router-dom'

import './404.css'

export default function Eror404(){
    return(
        <div className="error-container">
            <div>
                <h2>Tu t'es perdu dans les méandres du site</h2>
            </div>
            <div>
                <img src={image} alt="error 404"/>
            </div>
            <div>
                <Link to="/login">Home</Link>
            </div>
        </div>
    )
}