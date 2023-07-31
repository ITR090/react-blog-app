
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../store/loginStoreContext'
import { Link, redirect } from 'react-router-dom';
import {isVaildEmail,isVaildPassword, isVaildText} from './ValidationCheck'

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    //const [errors, setErrors] = useState('')

    const ctx = useContext(AuthContext)

    const onClickBtn = () => {
        ctx.onClickSignWithGoogle()
        return redirect('/Dashbord')
    }


    const SignUp = () => {
        try {
            
            if (isVaildEmail(email) && isVaildPassword(password) && isVaildText(name)) {
                ctx.SignUpWithEmailandPassword(name, email, password)
                return redirect('/Dashbord')
            }
        } catch (error) {
           alert(error)
        }
       
    }

    return (
        <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div class="card-img-left d-none d-md-flex">
  
              </div>
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
                <form>
  
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" 
                    required autofocus onChange={(text) => { setName(text.target.value) }}/>
                    <label for="floatingInputUsername">Name</label>
                  </div>
  
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" onChange={(text) => { setEmail(text.target.value) }}/>
                    <label for="floatingInputEmail">Email address</label>
                  </div>
  
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(text) => { setPassowrd(text.target.value) }}/>
                    <label for="floatingPassword">Password</label>
                  </div>
  
                  <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="button" onClick={SignUp}>Register</button>
                  </div>

                  <Link class="d-block text-center mt-2 small" to="/Login">Already Have an account? Login</Link>
  
                  <hr class="my-4" />
  
                  <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-google btn-login fw-bold text-uppercase" onClick={onClickBtn}>
                      <i class="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div>                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>   
    )
}

export default Signup