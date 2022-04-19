
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCfkIHoxxm7KAkUgmzVvMPUamt7C85ztW8",
    authDomain: "roomielink.firebaseapp.com",
    projectId: "roomielink",
    storageBucket: "roomielink.appspot.com",
    messagingSenderId: "469124689719",
    appId: "1:469124689719:web:692f52ee86ec3d7afcb4b2",
    measurementId: "G-1C35GH0T49"
  };
  const firebaseApp = initializeApp(firebaseConfig);

  const database = getFirestore(firebaseApp);

    export default database;
  