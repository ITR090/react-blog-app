
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../Comments/CommentForm'
import { CommentContext } from '../../store/commentStoreContext';
import Comments from '../Comments/Comments';
import Header from '../../UI/header/Header';
import {AppContext} from '../../store/appStoreContext'
import {AuthContext} from '../../store/loginStoreContext'
const Post = () => {

    // comments context    
    const ctxComment = useContext(CommentContext)
    // post context
    const ctxPost = useContext(AppContext);
    // auth context
    const ctxAuth = useContext(AuthContext);

    // to get post id
    const Post_Id = useParams()

    const [post, setPost] = useState()
    
    const getPost = async () => {
        const response = await fetch(`https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts/${Post_Id.id}.json`);
        const responseData = await response.json();
        setPost(responseData)
    }

    useEffect(() => {
        getPost();
        ctxComment.getAllComments()
    }, [])

    const onClickLikePost = (likedpost,post_id) => {
        ctxPost.likePost(likedpost,post_id)
        getPost();
    }



    return (
        <>
            {post !== undefined ?
                <>
                    <Header>
                        <div className="post-heading">
                            <h1>{post.title}</h1>
                           
                            <span className="meta">
                                Posted by
                                <> {post.userName} </>
                                on  {post.date}
                            </span>
                            <br />
                            <span className='meta'>
                                Post's Likes: {post.Likes}
                            </span>
                        </div>
                    </Header>

                    {/* Post Content */}

                    <article className="mb-4">
                        <div className="container px-4 px-lg-5">
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <p>{post.content}</p>

                                    {Object.keys(ctxAuth.user) == null && 
                                    <p>
                                        Did you like this post click here to add it to your liked posts
                                        <i className="fa-solid fa-heart fa-beat" style={{ color: "#ca1c1c" }} onClick={() => onClickLikePost(post.Likes,Post_Id)}></i>
                                    </p>}


                                </div>
                            </div>
                            <CommentForm post={post} />
                            <br />
                            <h5>Recent Comments:</h5>
                            {ctxComment.comments && 
                            <Comments postComments={ctxComment.comments.filter(postComment => postComment.post_id == post.id)}
                                post_id={post.id} />}
                        </div>
                    </article>

                </>
                : null}


        </>
    )
}

export default React.memo(Post)