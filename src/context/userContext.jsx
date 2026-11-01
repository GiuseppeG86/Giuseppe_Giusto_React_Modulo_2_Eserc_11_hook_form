import { createContext, useState } from "react";

export const UserContext=createContext();

export function UserContextProvider({children}) {

    const [user, setUser] = useState();

    const changeUser= (newUser) => setUser(newUser);

    return (
        <>
        <UserContext.Provider value={{user, changeUser}}>
            {children}
        </UserContext.Provider>
        </>
    )
}