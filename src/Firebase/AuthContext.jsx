import { createContext, useState, useEffect, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const useAuth = () => {
    return useContext(AuthContext); 
  }

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signup = async (name, email, password) => {
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: name });
      setUser({ ...result.user, displayName: name });
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignUp = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result.user;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, signIn, googleSignUp, logOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
