import React from 'react'
import DivCol from '../../../UI/Card/DivCol'
const MySinglePost = (props) => {

    return (
        <div className='row g-4'>

            {props.myposts.length > 0 && props.myposts.map(post => {
                return (
                    <DivCol key={post.id}>
                        <div className="card">
                            <div className="card-body text-center">

                                <h3 className="card-title mb-3" title='Delete'>{post.title}</h3>
                                <p className="card-text"></p>
                                <p className="text-body-secondary">Likes: {post.Likes}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <div>
                                    <small className="text-body-secondary">{post.date}</small>
                                </div>
                                <div>
                                     <i onClick={() => props.deletepost(post)} className="fa-solid fa-trash fa-lg pe-3" style={{color:'#ec3e13'}}></i>
                                     <i className="fa-solid fa-pen-to-square fa-lg" style={{color:'#efe70b'}}></i>
                                </div>
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