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
  saveUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage?.getItem("user");
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  });

  const removeUser = () => {
    setUser(null);
    localStorage?.clear();
  };

  const saveUser = (user: User) => {
    setUser(user);
    localStorage?.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser, removeUser, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};
