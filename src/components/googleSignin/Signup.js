
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../store/loginStoreContext'
import { Link, redirect } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form";
import Input from '../../UI/Input/Input'
import { name_validation } from '../../utils/Name_validation'
import { email_validation } from '../../utils/Email_validation'
import { desc_validation } from '../../utils/Desc_validation'
import { password_validation } from '../../utils/Password_validation'
import MainButton from '../../UI/Button/Button';
import MainForm from '../../UI/Form/MainForm';

const Signup = () => {

  const methods = useForm()
  const ctx = useContext(AuthContext)

  const onClickBtn = () => {
    ctx.onClickSignWithGoogle()
    return redirect('/Dashbord')
  }



  const SignUp = methods.handleSubmit(data => {
    try {
      //console.log(data)
      ctx.SignUpWithEmailandPassword(data.name, data.email, data.password, data.description)
      return redirect('/Dashbord')
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <MainForm title="Register">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="form-floating mb-3">
            <Input {...name_validation} />
          </div>
          <div className="form-floating mb-3">
            <Input {...email_validation} />
          </div>
          <div className="form-floating mb-3">
            <Input {...password_validation} />
          </div>
          <div className="form-floating mb-3">
            <Input {...desc_validation} />
          </div>
          <div className="d-grid mb-2">
            <MainButton className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" btnType="submit" onClickBtn={SignUp}>Register</MainButton>
          </div>
          <Link className="d-block text-center mt-2 small" to="/Login">Already Have an account? Login</Link>
          <hr className="my-4" />
          <div className="d-grid mb-2">
            <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" onClick={onClickBtn}>
              <i className="fab fa-google me-2"></i> Sign up with Google
            </button>
          </div>
        </form>
      </FormProvider>
    </MainForm>

  )
}

export default Signup