import React from 'react'
import DivCol from '../../../UI/Card/DivCol'
const MySinglePost = (props) => {
    
    return (
        <div className='row g-4'>
            
            {props.myposts.length > 0 && props.myposts.map(post => {
                return (
                    <DivCol key={post.id}>
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">

                                <h3 className="card-title mb-3" onClick={() => props.deletepost(post)}>{post.title}</h3>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Iure, quas quidem possimus dolorum esse eligendi?
                                </p>
                                <p className="text-light">Likes: {post.Likes}</p>
                            </div>
                        </div>
                    </DivCol>
                )
            })}
            {props.myposts.length == 0 && <h5>You Havent Added Any Posts</h5>}
            
        </div>
    )
}

export default MySinglePost