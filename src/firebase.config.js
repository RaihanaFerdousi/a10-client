import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjFLlorog2hvl5MFu6zm98UdMjCXQf80k",
  authDomain: "assignment-10-aabcb.firebaseapp.com",
  projectId: "assignment-10-aabcb",
  storageBucket: "assignment-10-aabcb.firebasestorage.app",
  messagingSenderId: "519019514896",
  appId: "1:519019514896:web:401e63169db3e892ccce95"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
