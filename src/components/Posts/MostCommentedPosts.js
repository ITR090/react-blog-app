

import React, { useEffect, useMemo, useState } from 'react'
import Body from '../../UI/Card/Body'

const MostCommentedPost = () => {

  const [mostCommentedPosts,setMostCommentedPosts] =useState([])

    const getMostCommentedPosts = useMemo(()=> async () => {
      //  fetch comments
        const response = await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Comments.json');
        const responseData = await response.json();
      // fetch posts
      const responsePosts = await fetch('https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Posts.json');
      const responseDataPosts = await responsePosts.json();
      
        // comments
        let responseDataArray=[]
        Object.keys(responseData).values()
        for (const key in responseData) {
            const obj ={
            id:key,    
            text:responseData[key].text,
            post_id:responseData[key].post_id
            }
            responseDataArray.push(obj)
        }

        console.log(responseDataArray)
        // Posts id
        let responseDataArrayPosts=[]
        Object.keys(responseDataPosts).values()
        for (const key in responseDataPosts) {
            const obj ={
            id:responseDataPosts[key].id,
            }
            responseDataArrayPosts.push(obj)
        }


        console.log(responseDataArrayPosts)

        const mostCommented = responseDataArray.filter(comment => comment.post_id == responseDataArrayPosts.filter)
        
        // if(mostLikedPosts){
        //     const filteredLikedPosts = responseDataArray.filter(post=> post.Likes > 5)
        //     setMostLikedPosts(filteredLikedPosts)
        // }
    },[mostCommentedPosts])

    useEffect (()=>{
      getMostCommentedPosts()
    },[mostCommentedPosts])


  return (
    <Body>
        <h5>Most Commented Posts</h5>
    </Body>
  )
}

export default MostCommentedPost