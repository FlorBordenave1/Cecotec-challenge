import { ChangeEvent, SyntheticEvent, use, useState } from "react";
import userDb from "@/db/user.json";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserContext } from "@/context/UserContext";

export type UserData = {
  email: string;
  password: string;
};

export const useLoginController = () => {
  const router = useRouter();
  const userContext = use(UserContext);

  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const saveUserData = () => {
    const { email, firstName, username } = userDb;

    const data = {
      username,
      email,
      firstName,
    };
    userContext?.saveUser(data);
  };

  const handleLogIn = (e: SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = userData;
    const { email: emailFromDb, password: passwordFromDb } = userDb;
    if (email !== emailFromDb || password !== passwordFromDb) {
      toast.error("El mail y la contraseña no coinciden");
      return;
    }

    saveUserData();

    router.push("/home");
  };

  return {
    userData,
    handleChangeInput,
    handleLogIn,
  };
};
