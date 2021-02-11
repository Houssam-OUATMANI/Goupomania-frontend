import React from 'react'
import { useForm } from "react-hook-form"


export default function Signup(){
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try{
            const postData = await fetch("http://localhost:5000/api/auth/signup",{
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

            <form  className="form__container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor="fullname">Nom complet</label>
                    <input  name="fullname" id="fullname" ref={register({minLength : 3 , maxLength : 50 , required : true})}/>
                    {errors.fullname  && <code>votre nom doit etre compris entre 3 et 50 caracteres</code>}
                </div>
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
                <button className="submit" type="submit">Inscription</button>
            </form>
    )
}
