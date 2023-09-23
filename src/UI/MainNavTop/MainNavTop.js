import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../src/store/loginStoreContext'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export const MainNavTop = () => {

    const ctx = useContext(AuthContext)


    const onClickSignout = () => {
        auth.signOut().
        then((data) => {
            alert(data)
            alert(ctx.token)
        }).catch((error) => {
            alert(error)
        });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to='/'>Web Development Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">Home</NavLink></li> */}
                        {/* <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">About</NavLink></li> */}
                        <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to='/MostLikePosts'>MostLikePosts</NavLink></li>
                        {/* <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">Contact</NavLink></li> */}
                        {Object.keys(ctx.user).length == 0 && <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/login">Login</NavLink></li>}
                        {Object.keys(ctx.user).length > 0 && <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/Dashbord">Dashbord</NavLink></li>}
                        {/* {Object.keys(ctx.user).length > 0 && <li className="nav-item"><NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/Dashbord" onClick={onClickSignout}>Logout</NavLink></li>} */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
