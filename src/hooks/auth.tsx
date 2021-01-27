import firebase from "firebase";
import { createContext, ReactNode, useContext, useState } from "react";
import firebaseAuth from "services/firebase/auth";

interface IProps {
  children: ReactNode;
}

export const AuthContext = createContext<[boolean, firebase.User | null]>([
  true,
  null,
]);

export const AuthProvider = (props: IProps) => {
  const [auth, setAuth] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  firebaseAuth().onAuthStateChanged((user: firebase.User | null) => {
    setAuth(user);
    setLoading(false);
  });

  return (
    <AuthContext.Provider value={[loading, auth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
