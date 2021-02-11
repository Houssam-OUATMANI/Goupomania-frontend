import React from 'react'
import { useForm } from 'react-hook-form'
import './NewPost.css'


export default function NewPost (){
const { handleSubmit, register , errors } = useForm()

function onSubmit(data) {
    console.log(data)
}

    return(
        <form className="form-newpost">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title"/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Title</label>
                <input type="text" id="description" name="description"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="description">Title</label>
                <input type="text" id="description" name="description"/>
            </div>
        </form>
    )
}
