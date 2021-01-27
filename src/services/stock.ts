import getFirestore from "./firebase/firestore";

export async function getAvaiableStocks(): Promise<string[]> {
  try {
    const snapshot = await getFirestore().collection("stocks").get();
    return snapshot.docs.map((doc) => doc.id);
  } catch (error) {
    console.log("[Firestore] Error: Cannot get stock list.", error.message);
  }
  return [];
}
