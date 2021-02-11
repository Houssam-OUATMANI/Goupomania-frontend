import React from 'react'
import { useForm } from "react-hook-form"

import './login.css'

export default function Login(){

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try{
            const postData = await fetch("http://localhost:5000/api/auth/login",{
              method : 'POST',
              headers : {
                  'Content-Type': 'application/json'
              },
              body : JSON.stringify(data)
              })
              const response = await postData.json()
              console.log(response)
              return response
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input  name="email" id="email" ref={register({pattern : /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/ ,required : true})}/>
                {errors.email  && <code>votre email doit etre valide</code>}
            </div>
            <div className="form-control">
                <label htmlFor="password">Mot de passe</label>
                <input  name="password" type="password" ref={register({minLength : 6 , maxLength : 15 , required : true})}/>
                {errors.password  && <code>votre mot de passe doit etre compris entre 6 et 15 caracteres</code>}
            </div>
            <button className="submit" type="submit">Connexion</button>
        </form>
    )
}
