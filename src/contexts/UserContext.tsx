import { IChildrenProp } from "children";
import React, { createContext, useState } from "react";

interface IValidUser {
  id: string
  userName: string
}

type TUser = IValidUser | null

interface IUserContext {
  user: TUser
  setUser: (user: TUser) => void
}

export const UserContext = createContext<IUserContext>({ user: null, setUser: (user: TUser) => { } });

export const UserContextProvider = ({ children }: IChildrenProp) => {
  const [user, setUser] = useState<TUser>(null)

  return (
    <UserContext.Provider
      value={{
        user, setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}