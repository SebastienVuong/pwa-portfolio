import { IChildrenProp } from "children";
import React, { createContext, useState } from "react";

export enum ViewModesEnum {
  "DEV_MODE" = "DEV_MODE",
  "SPORTS_MODE" = "SPORTS_MODE",
}

export interface IValidUser {
  id: string
  userName: string
  viewMode: ViewModesEnum
}

export type TUser = IValidUser | null

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