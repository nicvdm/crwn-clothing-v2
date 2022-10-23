// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF2hyO-wC_ytMmkxpH8QSEK_zhc4iI8u0",
  authDomain: "nic-mfg.firebaseapp.com",
  projectId: "nic-mfg",
  storageBucket: "nic-mfg.appspot.com",
  messagingSenderId: "161856377275",
  appId: "1:161856377275:web:8f4dda9fb45fa8edbcf49e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user does not exist
  //create / set the document with the data from userAuth in my collection

  //if user data exists
  //return userDocRef

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
      console.log("User created");
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userDocRef;
};
