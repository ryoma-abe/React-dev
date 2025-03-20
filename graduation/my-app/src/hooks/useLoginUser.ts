import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserProviderType,
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserProviderType =>
  useContext(LoginUserContext);
