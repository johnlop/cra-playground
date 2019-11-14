import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import { signIn, signUp } from "../services/auth";

export function useAuth() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const logIn = async userInfo => {
    const res = await signIn(userInfo);
    setCurrentUser(res.data.data);
  };

  const logOut = () => {
    setCurrentUser();
  };

  const register = async userInfo => {
    const res = await signUp(userInfo);
    setCurrentUser(res.data.data);
  };

  return { logIn, logOut, register, currentUser };
}
