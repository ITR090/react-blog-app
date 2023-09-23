import React, { useContext } from 'react'
import { AuthContext } from '../../store/loginStoreContext'
import './Login.css'
import { Link, redirect } from 'react-router-dom';
import { useForm, FormProvider } from "react-hook-form";
import Input from '../../UI/Input/Input'
import { email_validation } from '../../utils/Email_validation'
import { password_validation } from '../../utils/Password_validation'
import MainButton from '../../UI/Button/Button';
import MainForm from '../../UI/Form/MainForm';

const Login = () => {

  const methods = useForm()

  const ctx = useContext(AuthContext)

  const onClickBtn = () => {
    ctx.onClickSignWithGoogle()
  }

  const SignIn = methods.handleSubmit((data) => {
    try {
      ctx.SignInWithEmailandPassword(data.email, data.password)
      return redirect("/Dashbord")
      
    } catch (error) {
      alert(error)
    }

  })

  return (
    <MainForm title="Login">
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate>
          <div className="form-floating mb-3">
            <Input {...email_validation}/>
          </div>
          <div className='form-floating mb-3'>
            <Input {...password_validation}/>
          </div>
          {/* <hr className="my-4" /> */}
          <div className='d-grid mb-2'>
            <MainButton 
            className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
            btnType="submit"
            onClickBtn={SignIn}
            >Login</MainButton>
            <Link className="d-block text-center mt-2 small" to="/Register">Dont Have an account? Register</Link>
          </div>
        </form>
      </FormProvider>
    </MainForm>
  )
}

export default Login