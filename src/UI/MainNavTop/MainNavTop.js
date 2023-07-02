import React,{useContext} from 'react'
import { Link, NavLink } from 'react-router-dom';
import {AuthContext} from '../../../src/store/loginStoreContext'
//import MainButton from '../../UI/Button/Button'
export const MainNavTop = () => {

    const ctx =useContext(AuthContext)
    
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to='/'>Web Development Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
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
