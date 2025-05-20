import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(displayName,photoURL)=>{
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }
    const logOutUser=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        // console.log(user,user.email)
        setUser(currentUser)
       })
       return()=> unsubscribe()
    },[])

    const userProfile={
        createUser,
        loginUser,
        updateUserProfile,
        logOutUser,
        user
       

    }
  return (
    <div>
      <AuthContext value={userProfile}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
