import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children})=>{
    const userName = "alaa";
    return (
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    )
    
}

export default UserContextProvider;