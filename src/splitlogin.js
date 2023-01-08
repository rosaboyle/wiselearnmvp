import './splitlogin.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwCjywNxYuLBiVNPRvMmqnXOeQZkAHvX0",
  authDomain: "resumeaicmu.firebaseapp.com",
  projectId: "resumeaicmu",
  storageBucket: "resumeaicmu.appspot.com",
  messagingSenderId: "360815956098",
  appId: "1:360815956098:web:e7b67e3fde866c1be9649b",
  measurementId: "G-V2QR53JPT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}
const provider = new GoogleAuthProvider();

const auth = getAuth();


export function SplitLogin() {
    const navigate = useNavigate();
    const signup = async () => await signInWithPopup(auth, provider)
    .then((result) => {
      // console.log({result});
      // const navigate = useNavigate();
  
      console.log({result});
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log({credential});
      if (credential!==null){
           const token = credential.accessToken;
        console.log({token});
      }// The signed-in user info.
      const user = result.user;
      console.log({user});
      console.log("redirecting");
      navigate('/mili');
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  
    return <>
        <div className="split left">
            <div className="centered">
                <h1>Resume AI</h1>
                <h3>Supercharge your job search</h3>
                <h4>by generating personlized Job-specific Resume and cover letters</h4>
            </div>
        </div>


        <div className="split right">
            <div className="centered">
                <a type="button" className="login-with-google-btn" onClick={signup}>
                    Sign in with Google
                </a>
            </div>
        </div>
    </>
}