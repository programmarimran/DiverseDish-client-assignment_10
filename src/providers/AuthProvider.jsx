import React, { useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const AuthProvider = ({ children }) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(displayName,photoURL)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName,photoURL})
    }
    const logOutUser=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        // console.log(user,user.email)
        setUser(currentUser)
        setLoading(false)
       })
       return()=> unsubscribe()
    },[])

    const userProfile={
        createUser,
        loginUser,
        updateUserProfile,
        logOutUser,
        user,
        loading
       

    }
  return (
    <div>
      <AuthContext value={userProfile}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
