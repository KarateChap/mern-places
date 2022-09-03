import React, { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});



// const auth-context = () => {
//   return (
//     <div>auth-context</div>
//   )
// }

// export default auth-context
