import React from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }
    const user={
        createUser,
        updateUserProfile
       

    }
  return (
    <div>
      <AuthContext value={user}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
