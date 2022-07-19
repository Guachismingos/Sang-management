import { useContext, useState, useEffect, createContext } from "react";
import { signInWithEmailAndPassword, auth } from "../firebase/firebase";

const AuthContex = createContext();

export const useAuth = () => {
  return useContext(AuthContex);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const singIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => auth.signOut();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    singIn,
    logOut,
  };

  return (
    <AuthContex.Provider value={value}>
      {!loading && children}
    </AuthContex.Provider>
  );
};
