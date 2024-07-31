
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  import { getFirestore,doc,setDoc ,getDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  import { getStorage,ref,uploadBytes,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAqQk3V55twVA1CuCFDOIwD2aj1R7fhkvA",
    authDomain: "website-47591.firebaseapp.com",
    projectId: "website-47591",
    storageBucket: "website-47591.appspot.com",
    messagingSenderId: "745920369633",
    appId: "1:745920369633:web:d66efc82187a94fc91b8a0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage=getStorage(app);



  export{auth,
    db ,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    ref,
    uploadBytes,
    getDownloadURL,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    signOut,
    getDoc
  
  
  }
  
 