import firebase from ".";
import "firebase/auth";
import { isBrowser } from "utils/helper";

const firebaseAuth = () => {
  const auth = firebase.auth();

  // if (location.hostname === "localhost") {
  // auth.useEmulator('localhost', 4000)
  // }

  if (isBrowser()) {
    let remember = window.localStorage.getItem("remember") === "true";

    auth.setPersistence(
      remember
        ? firebase.auth.Auth.Persistence.LOCAL
        : firebase.auth.Auth.Persistence.NONE
    );
  }
  return auth;
};

export default firebaseAuth;
