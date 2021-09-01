import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsSX-HOMZ-oMTW1pgM1v9NGCYD9QXOZB8",
    authDomain: "crown-db-924af.firebaseapp.com",
    projectId: "crown-db-924af",
    storageBucket: "crown-db-924af.appspot.com",
    messagingSenderId: "660822617256",
    appId: "1:660822617256:web:94119b048efda58905e69d",
    measurementId: "G-XBGXBPXRDD"
};
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

