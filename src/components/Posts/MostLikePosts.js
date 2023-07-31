
import React, { useEffect, useMemo, useState } from 'react'
import Body from '../../UI/Card/Body'
import Header from '../../UI/header/Header'
import DivCol from '../../UI/Card/DivCol'
import Lottie from 'lottie-react'
import loadingAnimation from '../animation/OR0AoSjp65 (1).json'

const MostLikePosts = () => {

    const [mostLikedPosts, setMostLikedPosts] = useState([])
    // loading
    const [isLoading,setIsLoading] = useState(true);

    const getMostLikePosts = useMemo(() => async () => {
        const response = await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts.json');
        const responseData = await response.json();
        let responseDataArray = []
        Object.keys(responseData).values()
        for (const key in responseData) {
            const obj = {
                path_id: key,
                Likes: responseData[key].Likes,
                content: responseData[key].content,
                id: responseData[key].id,
                title: responseData[key].title
            }
            responseDataArray.push(obj)
        }

        if (mostLikedPosts) {
            const filteredLikedPosts = responseDataArray.filter(post => post.Likes > 5)
            setMostLikedPosts(filteredLikedPosts)
        }
    }, [mostLikedPosts])

    useEffect(() => {
        getMostLikePosts()
        setIsLoading(false)
    }, [mostLikedPosts])

    return (
        <>
            <Header>
                <div className='site-headin'>
                    <h3 className='text-white subheading text-center'>Most Liked posts in our Blog</h3>
                </div>
            </Header>
            <Body>
                    {isLoading && <Lottie animationData={loadingAnimation} style={{width: '30%'}} />}
                    {!isLoading && mostLikedPosts.length > 0 && mostLikedPosts.map(post => {
                        return <DivCol key={post.id}>
                            <h5>Title: {post.title}</h5>
                            {/* <p>Content: {post.content}</p> */}
                            <samp>Likes: {post.Likes}</samp>
                            <hr />
                        </DivCol>
                    })}
                
                {/* {!isLoading && mostLikedPosts.length == 0 && <h3>The Most Liked Posts above 5 will be display here...</h3>} */}
            </Body>
        </>
    )
}

export default MostLikePosts