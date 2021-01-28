import IProduct from "types/product";
import firebaseAuth from "./firebase/auth";
import getFirestore from "./firebase/firestore";
import firebase from "firebase/app";

export async function getAvaiableStocks(): Promise<string[]> {
  try {
    const snapshot = await getFirestore().collection("stocks").get();
    return snapshot.docs.map((doc) => doc.id);
  } catch (error) {
    console.log("[Firestore] Error: Cannot get stock list.", error.message);
  }
  return [];
}

export async function createInvoice(
  products: IProduct[],
  description: string
): Promise<void> {
  try {
    const user = firebaseAuth().currentUser;
    if (user) {
      await getFirestore().collection("invoices").add({
        userId: user.uid,
        createdAt: new Date(),
        products,
        description,
      });
      products.forEach((p) => {
        getFirestore()
          .collection("stocks")
          .doc(p.productName)
          .update({
            currentAmount: firebase.firestore.FieldValue.increment(
              -p.productQty
            ),
          });
      });
    }
  } catch (error) {
    console.log("[Firestore] Error: Cannot store products.", error.message);
  }
}
