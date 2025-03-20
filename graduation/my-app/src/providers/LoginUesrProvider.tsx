import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { User } from "../types/api/user";

type LoginUserProviderType = {
  LoginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

const LoginUserContext = createContext<LoginUserProviderType>(
  {} as LoginUserProviderType
);

export const LoginUserProvider = ({ children }: { children: ReactNode }) => {
  return <LoginUserContext.Provider>{children}</LoginUserContext.Provider>;
};
