// The app context

import Reactfrom "react";

export const user = {
  email: "",
  password: "",
  isLogged: false,
};

export const logOut = () => {};

const AppContext = React.createContext({ user, logOut });

export default AppContext;
