import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../store/loginStoreContext'
import { AppContext } from '../../../store/appStoreContext';
import AddPost from './AddPost';
import MySinglePost from './MySinglePost';

import { Pagination } from '../../Pages/Pagination';

const MyPosts = () => {


    const ctxAuth = useContext(AuthContext)
    const ctxPost = useContext(AppContext)
    const [currentPage, setcurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(2);

    // get current user id
    const current_user = ctxAuth.user.uid;

    const onDeletePostHandler = (post) => {
        //console.log(post)   
        ctxPost.deletePost(post)
    }

    
    const lastPostindex = currentPage * postsPerPage; // 3 * 2 = 6  == 2 2 2
    const firstPostindex = lastPostindex - postsPerPage; // 6 - 2 = 4 == 2 2 2
    const userPosts = ctxPost.posts.filter(post => post.user_id == current_user)
    const allposts = userPosts.slice(firstPostindex, lastPostindex)

    return (
        <>
            {Object.keys(ctxAuth.user).length > 0 && 

                <>  
                    {/* Add a post */}
                    <div className='container'>
                        <h2>New Post:</h2>
                        <AddPost />
                        <hr />
                    </div>
                    {/* load posts */}
                    <div className='container my-5'>
                        <h2>All Your Posts:</h2>
                        {/* <MySinglePost myposts={myposts}  deletepost={onDeletePostHandler} /> */}
                        <MySinglePost myposts={allposts} deletepost={onDeletePostHandler} />
                    </div>
                    <Pagination pages={userPosts.length} postsPerPage={postsPerPage} setcurrentPage={setcurrentPage} />
                </>

            }

            {Object.keys(ctxAuth.user).length == 0 && <h5>Please login</h5>}

        </>
    )
}

export default React.memo(MyPosts)