// import React, { use, useEffect } from "react";
// import AuthContext from "../contexts/AuthContext";
// import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { getRedirectResult } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";

// const AuthValidators = () => {
//   const navigate = useNavigate();
//   const {
//     setIstrue,
//     setGoogleSignUpError,
//     createUserWithGoogleLogin,
//     createUserWithGoogleLoginForMobile,
//   } = use(AuthContext);

//   //LoginMobileAndTablet

 
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result?.user) {
//           toast.success("You google redirect successfully Login");
//           setIstrue(false)
//           navigate("/");
//           return;
//         }
//       })
//       .catch((error) => {
//         setGoogleSignUpError(error.code);
//       });

//   //mobileAndTabletditactor
//   const isMobileOrTabletDevice = () => {
//     return /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);
//   };

//   useEffect(() => {
//     if (isMobileOrTabletDevice()) {
//       createUserWithGoogleLoginForMobile();
//     } else {
//       createUserWithGoogleLogin()
//         .then((result) => {
//           result?.user && toast.success("You Google Sign Up Successfully!!");
//           setIstrue(false)
//           navigate("/");
//           return;
//         })
//         .catch((error) => {
//           setGoogleSignUpError(error.code);
//         });
//     }
//   }, [createUserWithGoogleLogin]);

//   return <></>;
// };

// export default AuthValidators;
