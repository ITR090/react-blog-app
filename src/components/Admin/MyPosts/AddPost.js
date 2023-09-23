import React, {useContext } from 'react'
import MainButton from '../../../UI/Button/Button'
import { AuthContext } from '../../../store/loginStoreContext'
import { AppContext } from '../../../store/appStoreContext';
import { storage } from '../../../firebaseConfig';
import { ref, uploadBytes } from "firebase/storage";
import { useForm, FormProvider } from "react-hook-form";
import { Post_Title, Post_Content, Post_File } from '../../../utils/Posts/newPost_validation'
import Input from '../../../UI/Input/Input';
import MainForm from '../../../UI/Form/MainForm';
const AddPost = () => {


    const methods = useForm()

    // context
    const ctxAuth = useContext(AuthContext)
    const ctxPost = useContext(AppContext)

    const onAddPostHandler = methods.handleSubmit(async (data) => {
        
        try {
            let currentDateObj = new Date()
            let month = currentDateObj.toLocaleDateString('en-us', { month: "long" })
            let year = currentDateObj.getFullYear()
            let day = currentDateObj.getDate();
            let date = month + ' ' + day + ', ' + year


            const imageRef = ref(storage, `images/${ctxAuth.user.uid}/${data.file[0].name}`);
            uploadBytes(imageRef, data.file[0])
                .then((url) => {
                    const newPost = {
                        Likes: 0,
                        content: data.Post_Content,
                        id: Math.random().toString(36),
                        title: data.Post_Title,
                        user_id: ctxAuth.user.uid,
                        date: date,
                        userName: ctxAuth.user.displayName,
                        imagePath: `gs://${url.metadata.bucket}/${url.metadata.fullPath}`
                    }
                    ctxPost.addPost(newPost);
                    methods.reset()
                    alert("Added a Post")
                })
                .catch((error) => {
                    alert(error)
                })

        } catch (error) {
            alert(error)
        }
    })
    return (
        <MainForm title="Post Details">

            <FormProvider {...methods}>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    noValidate
                >
                    <div className="form-floating mb-3">
                        <Input {...Post_Title} />
                    </div>
                    <div className='form-floating mb-3'>
                        <Input {...Post_File} />
                    </div>
                    <div className="form-floating mb-3">
                        <Input {...Post_Content} />
                    </div>
                    <MainButton className="btn btn-secondary" btnType="button" onClickBtn={() => { onAddPostHandler() }}>Save</MainButton>

                </form>
            </FormProvider>
        </MainForm>
    )
}

export default AddPost