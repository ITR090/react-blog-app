import React from 'react'
import Input from '../Input/Input'
import {FormProvider, useForm} from 'react-hook-form'

export const Form = () => {
    const methods = useForm()
  
    const onSubmit = methods.handleSubmit(data => {
      console.log(data)
    })
  
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={e => e.preventDefault()}
          noValidate
          className="container"
        >
          <div className="">
            <Input
              label="name"
              type="text"
              id="name"
              placeholder="type your name..."
            />
            <Input
              label="password"
              type="password"
              id="password"
              placeholder="type your password..."
            />
          </div>
          <div className="">
            <button
              onClick={onSubmit}
              className=""
            >
              {/* <GrMail /> */}
              Submit Form
            </button>
          </div>
        </form>
      </FormProvider>
    )
  }

export default Form