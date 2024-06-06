import { createContext } from "react";
const UserContext = createContext({
    loggedInUser:"Default User",

})

export default UserContext;
//we can access the context from anywere  in the app like a global value 
// only put the data in user conext which is used to be used in multiple component

//how do we use useContext in class base component and acess it