import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCdxqWtE9U-HXyaMR82mY1HNL4RGJCGUSs',
  authDomain: 'base-fire-a6468.firebaseapp.com',
  projectId: 'base-fire-a6468',
  storageBucket: 'base-fire-a6468.appspot.com',
  messagingSenderId: '1084531877916',
  appId: '1:1084531877916:web:18101b7cf2d4a0cb92d7d9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
