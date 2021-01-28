import Loading from "components/Loading";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

export const LoadingContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => null]);

export const LoadingProvider = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {loading && <Loading />}
      {props.children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  return useContext(LoadingContext);
};
