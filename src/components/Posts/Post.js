
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../Comments/CommentForm'
import { CommentContext } from '../../store/commentStoreContext';
import Comments from '../Comments/Comments';
import Header from '../../UI/header/Header';
import { AppContext } from '../../store/appStoreContext'
import { AuthContext } from '../../store/loginStoreContext'
import { storage } from '../../firebaseConfig';
import { ref, getDownloadURL } from "firebase/storage";

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
    const [imageURL, setImageURL] = useState(null)
    //const [comments, setComments] = useState()

    const getPost = useCallback(async () => {
        //console.log("get post")
        const response = await fetch(`https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts/${Post_Id.id}.json`);
        const responseData = await response.json()
        //console.log("log : "+post)
        setPost(responseData)
        getDownloadURL(ref(storage, responseData.imagePath)).
            then(url => {
                setImageURL(url)
            })
        ctxComment.getAllComments()
        //setComments()
    }, [])



    useEffect(() => {
        getPost();
    }, [])

    const onClickLikePost = (post_id) => {

        const updatedPost = {
            ...post,
            Likes: post.Likes + 1
        }
        setPost(updatedPost)
        // setPost(PrevPostState => {
        //     return{
        //         ...PrevPostState,
        //         Likes : PrevPostState.Likes + 1
        //     }
        // })
        ctxPost.likePost(updatedPost, post_id)
    }

    const onAddComment = (comment, db) => {

        //let updatedComments = comments.concat(comment)
        //console.log(updatedComments)
        //setComments(updatedComments)
        ctxComment.AddComment(comment, db)
    }



    return (
        <>
            {post !== undefined ?
                <>
                    <Header imageURL={imageURL}>
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
                            <div className="row justify-content-center mt-5 mb-5">
                                {post.imagePath && <img src={imageURL} className='img-fluid img-thumbnail' />}
                                <div className="mt-5">
                                    <p className='text-break'>{post.content}</p>
                                    {/* {post.imagePath && <img src={imageURL}  className='img-fluid img-thumbnail' />} */}
                                    {Object.keys(ctxAuth.user) !== null &&
                                        <p className='mb-5 mt-5'>
                                            Did you like this post click here to add it to your liked posts
                                            <i className="p-2 fa-solid fa-heart fa-beat" style={{ color: "#ca1c1c" }} onClick={() => onClickLikePost(Post_Id)}></i>
                                        </p>}
                                </div>
                            </div>
                            <CommentForm onaddCommentCallback={onAddComment} post={post} />
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

export default Post