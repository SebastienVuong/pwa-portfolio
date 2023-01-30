import React from 'react'

type TContextValue<T> = {
  value?: T;
  setValue: (value: T) => void
}

const createContext = <T>(initialValue: T) =>
  React.createContext<TContextValue<T>>({
    value: initialValue, 
    setValue: (value: T) => { } 
  })

    export const useContextValue = <T>(context: React.Context<ContextValue<T>>) => {
  const {value, setValue} = React.useContext(context);

      return {value, setValue};
};

      export const createContextWithType = <T>(initialValue: T) => {
  const Context = createContext<T>(initialValue);
          type ContextType = ContextValue<T>;

            return {Context, ContextType};
};



            {/* interface User {
  name: string;
}

const { Context: UserContext, ContextType: UserContextType } = createContextWithType<User | null>(null);

const UserContextProvider: React.FC = ({ children, initialValue }) => {
  const [user, setUser] = React.useState<User | null>(initialValue);

  return (
    <UserContext.Provider value={{ value: user, setValue: setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const MyComponent: React.FC = () => {
  const { value: user, setValue: setUser } = useContextValue(UserContext);

  return (
    <View>
      {user ? (
        <Text>Hello, {user.name}!</Text>
      ) : (
        <Button title="Sign in" onPress={() => setUser({ name: "John Doe" })} />
      )}
    </View>
  );
};

const App: React.FC = () => {
  const initialUser = { name: "Jane Doe" };

  return (
    <UserContextProvider initialValue={initialUser}>
      <MyComponent />
    </UserContextProvider>
  );
};

export default App; */}