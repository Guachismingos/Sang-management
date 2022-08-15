import { useContext, useState, useEffect, createContext } from "react";
import {
  signInWithEmailAndPassword,
  auth,
  db,
  collection,
  query,
  onSnapshot,
  where,
  getDoc,
  doc,
} from "../firebase/firebase";

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

  //#region CRUD

  const loadPendingRequirements = (callBack) => {
    const q = query(collection(db, "requirements"), where("status", ">=", -10));
    return onSnapshot(q, callBack);
  };

  const getRequirementbyId = (idRef) => getDoc(doc(db, "requirements", idRef));

  //#endregion CRUD

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
    loadPendingRequirements,
    getRequirementbyId,
  };

  return (
    <AuthContex.Provider value={value}>
      {!loading && children}
    </AuthContex.Provider>
  );
};
