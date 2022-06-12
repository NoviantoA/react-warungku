import { async } from '@firebase/util';
import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase.config';

// menympan item baru
export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, { merge: true });
};

// get all items
export const getAllFoodItems = async () => {
  const items = await getDocs(query(collection(firestore, 'foodItems'), orderBy('id')));
  return items.docs.map((doc) => doc.data());
};
