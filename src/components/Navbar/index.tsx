"use client";

import { UserContext } from "@/context/UserContext";
import { use } from "react";

export const Navbar = () => {
  const userData = use(UserContext);

  console.log(userData?.user);

  return <div>navbar</div>;
};
