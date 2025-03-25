"use client";

import { createContext, PropsWithChildren, useEffect, useState } from "react";

type User = {
  username: string;
  firstName: string;
  email: string;
};

type UserContextProps = {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
  saveUser: (user: User) => void;
};

export const UserContext = createContext<UserContextProps | null>(null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const removeUser = () => {
    setUser(null);
    localStorage?.clear();
  };

  const saveUser = (user: User) => {
    setUser(user);
    localStorage?.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const storedUser = localStorage?.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, removeUser, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};
