import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

// Creating a context
const AuthContext = React.createContext();

//Custom Hooks. When "useAuth" is called then it will automatically get useConetxt and AuthContext.
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // for login data retrival time
  const [currentUser, setCurrentUser] = useState(); //for current user value

  //onAuthStateChanged is a side effect. we need to up it on useEffect hook
  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unSubscribe; //to avoid memory leakage
  }, []);

  //signup function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //update profile
    await updateProfile(auth.currentUser, { displayName: username });

    //UI currentuser update
    const user = auth.currentUser;
    //to avoid mutation
    setCurrentUser({
      ...user,
    });
  }

  //login function
  function login(email, password, username) {
    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password);
  }

  //logout function
  function logout() {
    const auth = getAuth();

    return signOut(auth);
  }

  //By using "useAuth", we now can use these value from any component
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* children will show if status is not loading  */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
