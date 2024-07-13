
const firebaseConfig = {
  apiKey: "AIzaSyDsXjHTQ_mIdhXx8q1BV8zG5DockpaVMLg",
  authDomain: "blog-sveltefire-daisyui.firebaseapp.com",
  projectId: "blog-sveltefire-daisyui",
  storageBucket: "blog-sveltefire-daisyui.appspot.com",
  messagingSenderId: "299393819713",
  appId: "1:299393819713:web:3692c7f305c6b5e5ba92c0"
};

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);    
export const firestore = getFirestore(app);
export const auth = getAuth(app);