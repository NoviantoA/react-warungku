import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAH_dp2gSXngVIBMMuIXOon-SI4-bEjcIw',
  authDomain: 'bala-bala-7f704.firebaseapp.com',
  databaseURL: 'https://bala-bala-7f704-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bala-bala-7f704',
  storageBucket: 'bala-bala-7f704.appspot.com',
  messagingSenderId: '471546626599',
  appId: '1:471546626599:web:9eb8a8c2d1ed10f6868402',
  measurementId: 'G-6015R8JECL',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
