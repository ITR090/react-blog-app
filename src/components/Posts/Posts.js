import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../store/appStoreContext';
import { Link } from 'react-router-dom'
import Body from '../../UI/Card/Body'
import DivCol from '../../UI/Card/DivCol'
import Lottie from 'lottie-react'
import loadingAnimation from '../animation/OR0AoSjp65 (1).json'
import { Pagination } from '../Pages/Pagination';
import PostsLists from './PostsLists';
// import { storage } from '../../firebaseConfig';
// import { ref, getDownloadURL } from "firebase/storage";

const Posts = () => {

    const ctx = useContext(AppContext)
    

    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3);



    useEffect(() => {
        try {
            ctx.getAllPosts()
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            alert(error)
        }
    }, [])

    const searchPosts = (text) => {

        const results = ctx.posts.filter(postTitle => postTitle.title.toLowerCase().includes(text));
        // console.log(results)

    }

    const lastPostindex = currentPage * postsPerPage;
    const firstPostindex = lastPostindex - postsPerPage;
    const allposts = ctx.posts.slice(firstPostindex, lastPostindex)

    return (
        <>
            {/* search post */}
            {/* <div className='container text-center mb-3 mt-3'>
                <input placeholder='Search post' type="search" className='form-control' onChange={(text)=>{searchPosts(text)}} />
            </div> */}
            <Body>
                {/*  Post preview */}
                
                {!isLoading && Object.keys(ctx.posts).length === 0 && <Lottie animationData={loadingAnimation} />}
                {!isLoading && Object.keys(ctx.posts).length > 0 && <PostsLists post={ctx.posts}/>}
                
                {/* <Pagination pages={ctx.posts.length} postsPerPage={postsPerPage} setcurrentPage={setcurrentPage}/> */}
                {/* {!isLoading && Object.keys(ctx.posts).length == 0 && <h5>No Posts</h5>} */}

            </Body>
        </>
    )
}

export default React.memo(Posts)