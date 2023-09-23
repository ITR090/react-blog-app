import React, { createContext, useState, useCallback } from "react";
import {ref, set } from "firebase/database";
export const CommentContext = createContext({
    comments: [],
    getAllComments: () => { },
    AddComment:()=>{}
})

export const CommentContextProvider = (props) => {

    const [comments, setComments] = useState([])

    const getAllComments = useCallback(async () => {

        const response = await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Comments.json');
        const responseData = await response.json();

        let responseDataArray = []
        for (const key in responseData) {
            const obj = {
                id: responseData[key].id,
                text: responseData[key].text,
                post_id: responseData[key].post_id,
                user_id: responseData[key].user_id,
                userName: responseData[key].userName,
                commentDate: responseData[key].commentDate
            }
            responseDataArray.push(obj)
        }
        //console.log(responseDataArray)
        setComments([...responseDataArray])
    }, [comments])


    // to get random id 
    function generateString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    const AddComment = async (newComment,db) => {
        // console.log(updatedComments)
        let updatedComments= comments.concat(newComment)
        setComments(updatedComments)
        set(ref(db, 'Comments/' + generateString(8)), {
            id: newComment.id,
            text: newComment.text,
            post_id: newComment.post_id,
            user_id: newComment.user_id,
            userName: newComment.userName,
            commentDate: newComment.commentDate
          });
        //getAllComments()  
    }

    return (
        <CommentContext.Provider value={{
            comments: comments,
            getAllComments: getAllComments,
            AddComment:AddComment
        }}>
            {props.children}
        </CommentContext.Provider>
    )
}

