import React, { useContext} from 'react'
import { AuthContext } from '../../../store/loginStoreContext'
import MyPosts from '../MyPosts/MyPosts'
import Header from '../../../UI/header/Header'
const Dashboard = () => {

    const ctx = useContext(AuthContext)

    return (
        <>
            <Header>
                <h5 className='text-white site-heading text-center'>Welcome Back {ctx.user.displayName}</h5>
            </Header>
            <MyPosts />
        </>
    )
}

export default Dashboard