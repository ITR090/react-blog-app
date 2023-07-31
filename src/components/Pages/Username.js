import React, { useContext, useEffect, useState } from 'react'
import Body from '../../UI/Card/Body'
import { useParams } from 'react-router-dom'
import PostsLists from '../Posts/PostsLists'
import { AppContext } from '../../store/appStoreContext'
const Username = (props) => {

  const [profile, setProfile] = useState()
  const [usersPosts,setUserPosts] =useState([])

  // to get user id
  const User_Id = useParams()

  const ctxPosts = useContext(AppContext)

  const getUserProfile = async () => {
    try {
      const response = await fetch(`https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app/Authors/${User_Id.name}.json`)
      const userProfile = await response.json();
      setProfile(userProfile)
      setUserPosts(await ctxPosts.getUserPosts(User_Id.name))
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect( () => {
    getUserProfile();
  }, [])
  return (

    <div className='mt-5'>
      {/* profile */}
      <div className='p-5 bg-dark d-flex flex-column justify-content-center align-items-center mt-5 text-center text-white'>
        <h5 className='text-capitalize fs-2 fw-bold'>{profile && profile.name}</h5>
        <p className='fw-light fs-4'>{profile && profile.description}</p>
      </div>
      {/* user posts */}
      <Body>
        <PostsLists post={usersPosts && usersPosts}/>
      </Body>
    </div>
    
  )
}

export default Username