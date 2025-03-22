"use client";

import { createContext, FC, PropsWithChildren, useState } from "react";

interface User {
  username: string;
  firstName: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const removeUser = () => localStorage.clear();

  return (
    <UserContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};
