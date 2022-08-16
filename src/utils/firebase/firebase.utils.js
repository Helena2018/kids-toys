import { initializeApp } from 'firebase/app';
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbh5Etu_O5quhVVCcRAs8vUfqWFZTGdaE",
  authDomain: "react-shopping-clothes.firebaseapp.com",
  projectId: "react-shopping-clothes",
  storageBucket: "react-shopping-clothes.appspot.com",
  messagingSenderId: "524930468755",
  appId: "1:524930468755:web:7d4dda178a5f2b70b53666"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;

  // If user data does not exists
  // Create / set document with the data from userAuth in my collection


  // If user data exists
  // Return userDocRef


}
