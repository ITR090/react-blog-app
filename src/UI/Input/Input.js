
import React from 'react'
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"


export default function Input({ label, type, id, placeholder, name, validation, multiline }) {

    const { register, formState: { errors } } = useFormContext()

    return (
        
            <>
            {multiline
                ? (<textarea 
                id={id}
                name={name}
                className='form-control'
                placeholder={placeholder}
                {...register(name, validation)}></textarea>)
                : (<input
                    id={id}
                    type={type}
                    name={name}
                    autofocus
                    className="form-control"
                    placeholder={placeholder}
                    {...register(name, validation)}
                />)}
                <label htmlFor={id} className="font-semibold capitalize">
                    {label}
                </label>
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({ message }) => <p className='badge text-bg-danger text-center'>{message}</p>}
                />
            </>
    )
}
