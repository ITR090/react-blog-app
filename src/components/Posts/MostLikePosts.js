
import React, { useContext, useEffect, useState } from 'react'
import Body from '../../UI/Card/Body'
import Header from '../../UI/header/Header'
import Lottie from 'lottie-react'
import loadingAnimation from '../animation/OR0AoSjp65 (1).json'
import PostsLists from './PostsLists'
import { AppContext } from '../../store/appStoreContext'

const MostLikePosts = () => {

    const [mostLikedPosts, setMostLikedPosts] = useState([])
    // loading
    const [isLoading,setIsLoading] = useState(false);

    const ctxPosts = useContext(AppContext)

    // const getMostLikePosts = useMemo(() => async () => {
    //     const response = await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts.json');
    //     const responseData = await response.json();
    //     let responseDataArray = []
    //     Object.keys(responseData).values()
    //     for (const key in responseData) {
    //         const obj = {
    //             path_id: key,
    //             Likes: responseData[key].Likes,
    //             content: responseData[key].content,
    //             id: responseData[key].id,
    //             title: responseData[key].title,
    //         }
    //         responseDataArray.push(obj)
    //     }

    //     if (mostLikedPosts) {
    //         const filteredLikedPosts = responseDataArray.filter(post => post.Likes > 5)
    //         setMostLikedPosts(filteredLikedPosts)
    //     }
    // }, [mostLikedPosts])

    useEffect(() => {
        //getMostLikePosts()
        setIsLoading(true)
        let results = ctxPosts.getMostLikePosts();
        setMostLikedPosts(results)
        
        setIsLoading(false)
    }, [])

    return (
        <>
            <Header>
                <div className='site-headin'>
                    <h3 className='text-white subheading text-center'>Most Liked posts in our Blog</h3>
                </div>
            </Header>
            <Body>
                {/*  Post preview */}
                {!isLoading && Object.keys(ctxPosts.posts).length === 0 && <Lottie animationData={loadingAnimation} />}
                {!isLoading && Object.keys(ctxPosts.posts).length > 0 && <PostsLists post={mostLikedPosts}/>}               
            </Body>
        </>
    )
}

export default MostLikePosts