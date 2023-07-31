
// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB3MfEwpypRUXm1g4IWThPr8598aqseeWI",
  authDomain: "react-blog-app-45e74.firebaseapp.com",
  databaseURL: "https://react-blog-app-45e74-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-blog-app-45e74",
  storageBucket: "react-blog-app-45e74.appspot.com",
  messagingSenderId: "166403042721",
  appId: "1:166403042721:web:9f7f37b6e285b1a8286fe0",
  //storageBucket:"gs://react-blog-app-45e74.appspot.com"
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export default app;