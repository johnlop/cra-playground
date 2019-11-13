import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";

export function useAuth() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const logIn = userInfo => {
    setCurrentUser(userInfo);
  };

  const logOut = () => {
    setCurrentUser();
  };

  const register = userInfo => {
    setCurrentUser(userInfo);
  };

  return { logIn, logOut, register, currentUser };
}
