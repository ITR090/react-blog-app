import React, { useContext,useState } from 'react'
import { AuthContext } from '../../../store/loginStoreContext'
import { AppContext } from '../../../store/appStoreContext';
import AddPost from './AddPost';
import MySinglePost from './MySinglePost';

import { Pagination } from '../../Pages/Pagination';

const MyPosts = () => {


    const ctxAuth = useContext(AuthContext)
    const ctxPost = useContext(AppContext)
    const [currentPage,setcurrentPage] =useState(1)
    const [postsPerPage,setPostsPerPage] =useState(3);

    // get current user id
    const current_user = ctxAuth.user.uid;

    const onDeletePostHandler = (post) => {
        //console.log(post)   
        ctxPost.deletePost(post)
    }

    const lastPostindex = currentPage * postsPerPage;
    const firstPostindex = lastPostindex - postsPerPage;
    const allposts = ctxPost.posts.slice(firstPostindex,lastPostindex)

    return (
        <>
            {Object.keys(ctxAuth.user).length > 0 && <><div className='container'>
                <h2>New Post:</h2>
                <AddPost />
                <hr />
            </div>
                <div className='container my-5'>
                    <h2>All Your Posts:</h2>
                    {/* <MySinglePost myposts={myposts}  deletepost={onDeletePostHandler} /> */}
                    <MySinglePost myposts={allposts.filter(post => post.user_id == current_user)} deletepost={onDeletePostHandler} />
                </div>
                <Pagination pages={ctxPost.posts.length} postsPerPage={postsPerPage} setcurrentPage={setcurrentPage} />
            </>

            }

            {Object.keys(ctxAuth.user).length == 0 && <h5>Please login :) </h5>}

        </>
    )
}

export default React.memo(MyPosts)