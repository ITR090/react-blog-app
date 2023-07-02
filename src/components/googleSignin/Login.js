import React, { useContext, useState } from 'react'
import { AuthContext } from '../../store/loginStoreContext'
import Header from '../../UI/header/Header';
import './Login.css'
import { Link,redirect } from 'react-router-dom';
import {isVaildEmail,isVaildPassword} from './ValidationCheck'

const Login = () => {

  const ctx = useContext(AuthContext)

  const onClickBtn = () => {
    ctx.onClickSignWithGoogle()
  }

  const [email,setEmail] = useState('')
  const [password,setPassowrd] = useState('')
  

  const SignIn = () => {
    try {

      if(isVaildEmail(email) && isVaildPassword(password)){
        ctx.SignInWithEmailandPassword(email, password)
        return redirect("/Dashbord")
      }
    } catch (error) {
      alert(error)
    }
    
  }
  return (

    <Header>

      <section className="vh-100" style={{ borderRadius: '1rem;' }}>
        <div className="h-100">
          <div className="bg-dark text-white p-5">

            <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
            {/* <p className="text-white-50 text-center">Please enter your email and password!</p> */}
            
            <from className="mb-md-5 mt-md-4 pb-5">

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={(text)=>{setEmail(text.target.value)}} />
              </div>

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={(text)=>{setPassowrd(text.target.value)}} />
              </div>

              <div className='d-flex justify-content-center'>
                <button
                  className="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  onClick={()=>{SignIn(email,password)}}
                >Login</button>
              </div>

              <p className="mt-3 text-center"><Link className="text-white" to="/SignUp">New User?</Link></p>
              <p className="text-center"><Link className="text-white" href="#!">Forgot password?</Link></p>

              <p class="mt-4 text-center">Or Sign Up with</p>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                {/* <i className="fab fa-facebook-f fa-lg text-white"></i>
                      <i className="fab fa-twitter fa-lg mx-4 px-2 text-white"></i> */}
                <i className="fab fa-google fa-lg text-white" onClick={onClickBtn}></i>
              </div>

            </from>
          </div>
        </div>
      </section>
    </Header>


  )
}

export default Login