import firebase from ".";
import "firebase/firestore";

const getFirestore = () => {
  return firebase.firestore();
};

export default getFirestore;
