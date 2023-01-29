import { IChildrenProp } from "children";
import React, { createContext, useState } from "react";

interface IInitializeContext {
  isInitialized: boolean
  setIsInitialized: (isInitialized: boolean) => void
}

export const InitializeContext = createContext<IInitializeContext>({
  isInitialized: false, setIsInitialized: (isInitialized: boolean) => { }
});


export const InitializeContextProvider = ({ children }: IChildrenProp) => {
  const [isInitialized, setIsInitialized] = useState(false);

  return (
    <InitializeContext.Provider
      value={{
        isInitialized,
        setIsInitialized,
      }}
    >
      {children}
    </InitializeContext.Provider>
  );
};
