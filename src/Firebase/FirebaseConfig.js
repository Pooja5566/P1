import Firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArs1jpaLE5JqNxGNWsoKediGj1rcaY6C0",
  authDomain: "bn-developers-e3987.firebaseapp.com",
  databaseURL: "https://bn-developers-e3987-default-rtdb.firebaseio.com",
  projectId: "bn-developers-e3987",
  storageBucket: "bn-developers-e3987.appspot.com",
  messagingSenderId: "542473832523",
  appId: "1:542473832523:web:b30b928a2beb6ca8ac65ce",
  measurementId: "G-14EECV8SZ1",
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyArs1jpaLE5JqNxGNWsoKediGj1rcaY6C0",
//   authDomain: "bn-developers-e3987.firebaseapp.com",
//   projectId: "bn-developers-e3987",
//   storageBucket: "bn-developers-e3987.appspot.com",
//   messagingSenderId: "542473832523",
//   appId: "1:542473832523:web:b30b928a2beb6ca8ac65ce",
//   measurementId: "G-14EECV8SZ1",
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);
// const collection = getFirestore.collection("users");
// export { db, storage, collection };
