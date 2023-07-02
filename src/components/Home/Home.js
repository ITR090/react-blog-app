import React from 'react'
import Body from '../../UI/Card/Body';
import Posts from '../Posts/Posts'
import Header from '../../UI/header/Header';
import Footer from '../../UI/Footer/Footer';
const Home = () => {

    return (
        <>
            <Header>
                <div className="site-heading">
                    <h1>Web Development Blog</h1>
                </div>
            </Header>
            <Posts />
            <Footer />
        </>
    )
}

export default Home