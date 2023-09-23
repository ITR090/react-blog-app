import React from 'react'
import DivCol from '../../UI/Card/DivCol'
import { Link } from 'react-router-dom'

const PostsLists = (props) => {
    return (
        <>
            {props.post.map(post => {
                return <>
                    <DivCol>
                        <div key={post.id} className='pe-3'>
                            <img className='w-100 img-fluid' src={post.imageURL} />
                        </div>
                    </DivCol>
                    <DivCol>
                        <div key={post.id} className='p-3 h-100'>
                            <Link className='title-link' to={`/post/${post.path_id}`}>
                                <h2 className="post-title text-dark">{post.title}</h2>
                            </Link>
                            <div className='d-flex justify-content-between align-items-end'>
                                <Link to={`/User/${post.user_id}`} className='text-body-secondary userName-link'>
                                    <p className='post-meta' >Posted by {post.userName}</p>
                                </Link>
                                <p className='post-meta'>{post.date}</p>
                            </div>
                        </div>
                    </DivCol>

                </>
            })}
        </>
    )
}

export default PostsLists