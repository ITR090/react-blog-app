import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../src/store/loginStoreContext'
//import MainButton from '../../UI/Button/Button'
export const MainNavTop = () => {

    const ctx = useContext(AuthContext)


    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <Link className="navbar-brand" to='/'>Web Development Blog</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</NavLink></li> */}
                        {/* <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</NavLink></li> */}
                        <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to='/MostLikePosts'>MostLikePosts</NavLink></li>
                        {/* <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</NavLink></li> */}
                        {Object.keys(ctx.user).length == 0 && <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/login">Login</NavLink></li>}
                        {Object.keys(ctx.user).length > 0 && <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/Dashbord">Dashbord</NavLink></li>}
                        {Object.keys(ctx.user).length > 0 && <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/Dashbord">Logout</NavLink></li>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
