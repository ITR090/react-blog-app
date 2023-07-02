import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { AuthContext } from '../../store/loginStoreContext'
import MainButton from '../../UI/Button/Button'
import { getDatabase} from "firebase/database";
import {CommentContext} from '../../store/commentStoreContext'

const CommentForm = (props) => {

    const [comment, setComment] = useState('')

    // to get auth state
    const ctxAuth = useContext(AuthContext)

    // to connect with DB
    const db = getDatabase()

    // to get comment context
    const ctxComment =useContext(CommentContext)
    
    // to add a comment
    const onaddCommentHandler = () => {
        let currentDateObj = new Date()
        let month = currentDateObj.toLocaleDateString('en-us',{month:"long"})
        let year =currentDateObj.getFullYear()
        let day = currentDateObj.getDate();
        let date = month+' '+day+', '+year

        let newComment ={
            text:comment,
            post_id:props.post.id,
            user_id: ctxAuth.user.uid,
            userName: ctxAuth.user.displayName,
            commentDate: date
        }
        ctxComment.AddComment(newComment,db)
        setComment('')
        ctxComment.getAllComments()
        
    }

    // to check if a user login
    const loginUser = Object.keys(ctxAuth.user).length > 0
    if (loginUser) {
        return <div>
            <h4>Add a Comment</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} onChange={(comment) => { setComment(comment.target.value) }} />
                    </Form.Group>
                    <MainButton btnType="button" onClickBtn={onaddCommentHandler}>Add Comment</MainButton>
                </Form>
        </div>
    }



}

export default CommentForm