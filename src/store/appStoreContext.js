import React, { createContext, useState, useCallback, useContext } from "react";
import { getDatabase, ref, remove, update } from "firebase/database";
import app from '../firebaseConfig'
import { AuthContext } from "./loginStoreContext";

export const AppContext = createContext({
    posts: [],
    addPost: () => { },
    deletePost: () => { },
    getAllPosts: () => { },
    likePost: () => { },
    getPost: () => { },
    getMostLikePosts: () => { },
})



export const AppContextProvider = (props) => {
    // all Posts in main page
    const [posts, setPosts] = useState([])
    // db call  
    const database = getDatabase(app);

    const getAllPosts = useCallback(async () => {
        try {
            const response = await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts.json');
            if (response.ok) {
                const responseData = await response.json();
                let responseDataArray = []
                Object.keys(responseData).values()
                for (const key in responseData) {
                    const obj = {
                        path_id: key,
                        Likes: responseData[key].Likes,
                        content: responseData[key].content,
                        id: responseData[key].id,
                        title: responseData[key].title,
                        user_id: responseData[key].user_id,
                        date: responseData[key].date,
                        userName: responseData[key].userName,
                    }
                    responseDataArray.push(obj)
                }
                //console.log(responseDataArray)
                setPosts([...responseDataArray])
                return;
            }
            throw new Error ("Something Went Worng")
        } catch (error) {
            alert(error)
        }
    }, [posts])


    // add a new post 
    const addPost = async (post) => {

        try {
            const token = localStorage.getItem('token')
            await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts.json',
                {
                    method: 'POST',
                    body: JSON.stringify(post),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authentication': 'Bearer ' + token
                    }
                })

            getAllPosts()
        } catch (error) {
            alert(error)
        }
    }


    // delete user post
    const deletePost = async (post) => {
        await remove(ref(database, "Posts/" + `${post.path_id}`)).
            then(() => {
                alert("Deleted the Post ")
            }).catch(() => {
                alert("Something went wrong")
            })
        getAllPosts();
    }

    // like post
    const likePost = (likedpost, post_id) => {
        let newLikePost = parseInt(likedpost) + 1
        // to update the posts table with new like value
        update(ref(database, `/Posts/${post_id.id}`), {
            Likes: newLikePost
        }).then(() => {
            alert("Added to your liked posts")
        })

    }

    const getPost = () => {

    }


    const getMostLikePosts = () => {

    }

    return <AppContext.Provider value={{
        posts: posts,
        addPost: addPost,
        deletePost: deletePost,
        getAllPosts: getAllPosts,
        likePost: likePost,
        getPost: getPost,
        getMostLikePosts: getMostLikePosts,
    }}>
        {props.children}
    </AppContext.Provider>
}
