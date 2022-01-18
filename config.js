import firebase from 'firebase';
require("@firebase/firestore");
  const firebaseConfig = {
    apiKey: "AIzaSyBZGFa4k496ow6eUzeJZLtATH6Ix0rw3XY",
    authDomain: "e-library-e1bca.firebaseapp.com",
    projectId: "e-library-e1bca",
    storageBucket: "e-library-e1bca.appspot.com",
    messagingSenderId: "262026811326",
    appId: "1:262026811326:web:7b6d51c29f87bcd7100bef"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()