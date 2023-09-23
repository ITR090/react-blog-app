import React, { createContext, useState } from "react";
import app from '../firebaseConfig';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set,getDatabase } from "firebase/database";

export const AuthContext = createContext({
  user: {},
  token: '',
  onClickSignWithGoogle: () => { },
  SignUpWithEmailandPassword: () => { },
  SignInWithEmailandPassword: () => { },
})


export const SigninWithGoogleProvider = (props) => {

  const [userData, setUserData] = useState({})
  const [token, setToken] = useState('')

  // google signin
  const onClickSignWithGoogle = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)

    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const userToken = credential.accessToken;
        // setToken(userToken)
        // The signed-in user info.
        const user = result.user;
        
        //setUserData(user)
        setUserData(user)
        setToken(userToken)
        localStorage.setItem("token", userToken)
        return {
          user: userData,
          then: token
        }
      })
      .catch(error => {
        console.log("error: " + error)
      })
  }

  // new user email and password
  const SignUpWithEmailandPassword = (name, email, password, description) => {
    const auth = getAuth(app)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // signin
        const user = userCredential.user; // user object
        const userToken = user.accessToken // user token
        // to update name (display name) 
        updateProfile(user, { displayName: name }).
          then(() => {
            setUserData(user)
            setToken(userToken)
            localStorage.setItem("token", token)
            addAuthor(user.uid, user.displayName, description)
            return {
              user: userData,
              then: token
            }
          }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
          })

      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      })
  }

  // adding a new Author
  const addAuthor = async (user_id, username, description) => {

    const db =getDatabase();
    try {
      set(ref(db, 'Authors/' + user_id), {
        name: username,
        description: description
      });
    } catch (error) {
      alert(error)
    }
  }
  // old user email and password
  const SignInWithEmailandPassword = (email, password) => {

    const auth = getAuth(app)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const token = userCredential.user.accessToken
        //console.log(userCredential)
        setUserData(user)
        setToken(token)
        localStorage.setItem("token", token)
        return {
          user: userData,
          then: token
        }

      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }


  return <AuthContext.Provider value={{
    user: userData,
    token: token,
    onClickSignWithGoogle: onClickSignWithGoogle,
    SignUpWithEmailandPassword: SignUpWithEmailandPassword,
    SignInWithEmailandPassword: SignInWithEmailandPassword
  }}>
    {props.children}
  </AuthContext.Provider>

}