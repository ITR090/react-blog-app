import React, { useContext, useState } from 'react'
import { isVaildText } from '../googleSignin/ValidationCheck';
import { AuthContext } from '../../store/loginStoreContext'
import MainButton from '../../UI/Button/Button'
import { getDatabase } from "firebase/database";
import { CommentContext } from '../../store/commentStoreContext'
import { useForm, FormProvider } from "react-hook-form";
import MainForm from '../../UI/Form/MainForm';
import Input from '../../UI/Input/Input';
import { Comment_Content } from '../../utils/Comments/newComment_validation'
const CommentForm = (props) => {

    const methods = useForm()

    const [comment, setComment] = useState('')
    //const [commentContent,setCommentContent] =useState({})

    // to get auth state
    const ctxAuth = useContext(AuthContext)

    // to connect with DB
    const db = getDatabase()

    // to get comment context
    const ctxComment = useContext(CommentContext)

    // to add a comment
    const onSubmitCommentHandler = methods.handleSubmit((data) => {
        try {
            let currentDateObj = new Date()
            let month = currentDateObj.toLocaleDateString('en-us', { month: "long" })
            let year = currentDateObj.getFullYear()
            let day = currentDateObj.getDate();
            let date = month + ' ' + day + ', ' + year

            let newComment = {
                text: data.Comment_Content,
                post_id: props.post.id,
                user_id: ctxAuth.user.uid,
                userName: ctxAuth.user.displayName,
                commentDate: date,
                id: Math.random().toString(36)
            }
                props.onaddCommentCallback(newComment, db)
                methods.reset()
           
        } catch (error) {
            //alert('Please Provide a vaild comment')
        }
    })

    // to check if a user login
    const loginUser = Object.keys(ctxAuth.user).length > 0
    if (loginUser) {
        return <>
            <h4>Add a Comment</h4>
            <MainForm title="Your Comment">
                <FormProvider  {...methods}>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        noValidate
                    >
                        <div className="form-floating mb-3">
                            <Input {...Comment_Content} />
                        </div>
                        <MainButton className="mt-2 btn btn-secondary" btnType="button" onClickBtn={onSubmitCommentHandler}>Add Comment</MainButton>
                    </form>
                </FormProvider>
            </MainForm>
        </>
    }
}

export default CommentForm