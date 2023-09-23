import React from 'react'

const Comment = (props) => {
    
    return <section>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="card text-dark">
                            <div className="card-body p-4">
                                
                                <div  className="d-flex flex-start">
                                    <img className="rounded-circle shadow-1-strong me-3"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                                        height="60" />
                                    <div key={props.singleComment.id}>
                                        <h6 className="fw-bold mb-1">{props.singleComment.userName}</h6>
                                        <div className="d-flex align-items-center mb-3">
                                            <p className="mb-0 text-break">{props.singleComment.commentDate}</p>
                                        </div>
                                        <p className="mb-0 text-break">
                                            {props.singleComment.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-0" />
                        </div>
                    </div>
                </div>
        </section>
    
}



export default Comment
