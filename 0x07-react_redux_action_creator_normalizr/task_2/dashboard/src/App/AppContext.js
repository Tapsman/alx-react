/* A simple React Context */

import React from "react";

// User
export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
},

export function logOut() {
  user.isLoggedIn = false;
};

const AppContext = React.createContext({
  user,
  logOut,
});

const AppProvider = AppContext.Provider
const AppConsumer = AppContext.Consumer

export {AppProvider, AppConsumer}
export default AppContext
