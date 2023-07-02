import React, { useState, useContext } from 'react'
import MainButton from '../../../UI/Button/Button'
import { AuthContext } from '../../../store/loginStoreContext'
import { AppContext } from '../../../store/appStoreContext';

const AddPost = () => {

    //const database = getDatabase();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const ctxAuth = useContext(AuthContext)
    const ctxPost = useContext(AppContext)

   
    const onAddPostHandler = async () => {
        let currentDateObj = new Date()
        let month = currentDateObj.toLocaleDateString('en-us',{month:"long"})
        let year =currentDateObj.getFullYear()
        let day = currentDateObj.getDate();
        let date = month+' '+day+', '+year
        const newPost = {
            Likes: 0,
            content: content,
            id: Math.random().toString(36),
            title: title,
            user_id: ctxAuth.user.uid,
            date: date,
            userName:ctxAuth.user.displayName
        }
        //console.log(newPost)
        ctxPost.addPost(newPost);
        setContent('')
        setTitle('')
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" id="title" className="form-control" onChange={(title) => { setTitle(title.target.value) }} />
            </div>
            <div className='mb-3'>
                <label htmlFor='file-content' className='form-label'>Upload File</label>
                <input type="file" className='form-control' />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Content</label>
                <textarea onChange={(content) => { setContent(content.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <MainButton btnType="button" onClickBtn={() => { onAddPostHandler() }}>Save</MainButton>

        </form>
    )
}

export default AddPost