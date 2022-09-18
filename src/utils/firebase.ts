import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import * as dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.APiKey,
    authDomain: process.env.AuthDomain,
    projectId: process.env.ProjectId,
    storageBucket: process.env.StorageBucket,
    messagingSenderId: process.env.MessagingSenderId,
    appId: process.env.AppId,
  };

const firestore = getFirestore(initializeApp(firebaseConfig));
const storage = getStorage(initializeApp(firebaseConfig));

export { firestore, storage };