import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqtzeTaa2te6_a4HgdbXwdSCP3k3RG8Bo",
  authDomain: "bad-monday-db.firebaseapp.com",
  projectId: "bad-monday-db",
  storageBucket: "bad-monday-db.appspot.com",
  messagingSenderId: "727460550214",
  appId: "1:727460550214:web:63bfac975f46b2c4125c47",
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const database = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(database, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // check if user data exists
  if (!userSnapshot.exists()) {
    // if not exists, create/set the document with the data from userauth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
