import React, { useState, useContext } from 'react'
import MainButton from '../../../UI/Button/Button'
import { AuthContext } from '../../../store/loginStoreContext'
import { AppContext } from '../../../store/appStoreContext';
import { storage } from '../../../firebaseConfig';
import { ref, uploadBytes } from "firebase/storage";
import { isVaildText } from '../../googleSignin/ValidationCheck';

const AddPost = () => {


    // state
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    // context
    const ctxAuth = useContext(AuthContext)
    const ctxPost = useContext(AppContext)

    const onAddPostHandler = async () => {

        try {
            let currentDateObj = new Date()
            let month = currentDateObj.toLocaleDateString('en-us', { month: "long" })
            let year = currentDateObj.getFullYear()
            let day = currentDateObj.getDate();
            let date = month + ' ' + day + ', ' + year

            if (isVaildText(title.target.value, title.target.name) && isVaildText(content.target.value, content.target.name)) {
                // Create a storage reference from our storage service
                const imageRef = ref(storage, `images/${ctxAuth.user.uid}/${image.name}`);
                uploadBytes(imageRef, image)
                    .then((url) => {
                        const newPost = {
                            Likes: 0,
                            content: content.target.value,
                            id: Math.random().toString(36),
                            title: title.target.value,
                            user_id: ctxAuth.user.uid,
                            date: date,
                            userName: ctxAuth.user.displayName,
                            imagePath: `gs://${url.metadata.bucket}/${url.metadata.fullPath}`
                        }
                        ctxPost.addPost(newPost);
                        setContent('')
                        setTitle('')
                        alert("Added a Post")
                    })
                    .catch((error) => {
                        alert(error)
                    })
            }

        } catch (error) {
            alert(error)
        }
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" id="title" className="form-control" name='title' onChange={(title) => { setTitle(title) }} />
            </div>
            <div className='mb-3'>
                <label htmlFor='file-content' className='form-label'>Upload File</label>
                <input type="file" className='form-control' name='file' onChange={(image) => { setImage(image.target.files[0]) }} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Content</label>
                <textarea name='content' onChange={(content) => { setContent(content) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <MainButton btnType="button" onClickBtn={() => { onAddPostHandler() }}>Save</MainButton>

        </form>
    )
}

export default AddPost