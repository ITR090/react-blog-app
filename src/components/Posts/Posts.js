import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../store/appStoreContext';
import { Link } from 'react-router-dom'
import Body from '../../UI/Card/Body'
import DivCol from '../../UI/Card/DivCol'
import Lottie from 'lottie-react'
import loadingAnimation from '../animation/OR0AoSjp65 (1).json'
import { Pagination } from '../Pages/Pagination';

const Posts = () => {

    const ctx = useContext(AppContext)
    // const ctx2 = useContext(CommentContext)

    const [isLoading, setIsLoading] = useState(true);
    const [currentPage,setcurrentPage] =useState(1)
    const [postsPerPage,setPostsPerPage] =useState(3);

    useEffect(() => {
        try {
            ctx.getAllPosts()
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            alert(error)
        }

    }, [])

    const searchPosts =(text) =>{

      const results = ctx.posts.filter(postTitle=> postTitle.title.toLowerCase().includes(text));
      console.log(results)
    
    } 

    const lastPostindex = currentPage * postsPerPage;
    const firstPostindex = lastPostindex - postsPerPage;
    const allposts = ctx.posts.slice(firstPostindex,lastPostindex)
    
    return (
        <>
            {/* search post */}
            <div className='container text-center mb-3 mt-3'>
                <input placeholder='Search post' type="search" className='form-control' onChange={(text)=>{searchPosts(text)}} />
            </div>
            <Body>
                {/*  Post preview */}
                {isLoading && <Lottie animationData={loadingAnimation} style={{ width: '30%' }} />}
                {!isLoading && Object.keys(ctx.posts).length > 0 && allposts.map(post => {
                    return (
                        <DivCol key={post.id}>
                            <div className="post-preview">
                                <Link to={`/post/${post.path_id}`}>
                                    <h2 className="post-title">{post.title}</h2>
                                </Link>
                                <p className="post-meta">
                                    Posted by
                                    <> {post.userName} </ >
                                    on {post.date}
                                </p>
                            </div>
                            <div className="d-flex justify-content-end mb-4"><Link className="btn btn-primary text-uppercase" to={`/post/${post.path_id}`}>Check Post →</Link></div>

                            <hr className="my-4" />
                        </DivCol>
                    )
                })
                }
                <Pagination pages={ctx.posts.length} postsPerPage={postsPerPage} setcurrentPage={setcurrentPage}/>
                {/* {!isLoading && Object.keys(ctx.posts).length == 0 && <h5>No Posts</h5>} */}

            </Body>
        </>
    )
}

export default React.memo(Posts)