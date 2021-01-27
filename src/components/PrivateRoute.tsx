import { useAuth } from "hooks/auth";
import { useRouter } from "next/router";
import { ComponentType } from "react";
import Loading from "./Loading";

export default function PrivateRoute<P>(WrappedComponent: ComponentType<P>) {
  const Auth = (props: P) => {
    const [loading, auth] = useAuth();
    const router = useRouter();

    if (loading) {
      return <Loading />;
    }

    if (router.pathname === "/login") {
      if (auth) {
        router.replace("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    if (!auth) {
      router.replace("/login");
      return null;
    }

    return <WrappedComponent {...props} auth={auth} />;
  };

  return Auth;
}
