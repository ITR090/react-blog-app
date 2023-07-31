import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import RouteLayoutTop from './RouteLayout/RouteLayoutTop'
import Post from '../src/components/Posts/Post'
// Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app'
import Login from './components/googleSignin/Login'
import Dashboard from '../src/components/Admin/Dashboard/Dashboard'
import MostLikePosts from './components/Posts/MostLikePosts'
import MostCommentedPost from './components/Posts/MostCommentedPosts'
import ErrorPage from '../src/components/Pages/mainErrorPage'
import Signup from './components/googleSignin/Signup'
import Username from './components/Pages/Username'
// TODO: Add SDKs for Firebase products that you want to use

// const firebaseConfig = {
//   apiKey: "AIzaSyB3MfEwpypRUXm1g4IWThPr8598aqseeWI",
//   authDomain: "react-blog-app-45e74.firebaseapp.com",
//   databaseURL: "https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "react-blog-app-45e74",
//   storageBucket: "react-blog-app-45e74.appspot.com",
//   messagingSenderId: "166403042721",
//   appId: "1:166403042721:web:9f7f37b6e285b1a8286fe0"
// };

const Routes = createBrowserRouter([
  {
    path:'/',
    element: <RouteLayoutTop/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/post/:id',
        element: <Post/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/Register',
        element:<Signup/>
      },
      {
        path:'/Dashbord',
        element:<Dashboard/>
      },
      {
        path:'/MostLikePosts',
        element:<MostLikePosts/>
      },
      {
        path:'/MostCommentedPost',
        element:<MostCommentedPost/>
      },
      {
        path:'/User/:name',
        element: <Username/>
      },
    ]
  }
])

function App() {


  return (

    <RouterProvider router={Routes}/>
    // <div className="App"></div>
  );
}

export default App;
