import { UserIcon } from "@/icons/userIcon";
import { Typography } from "../ui/typography";

type AuthButtonProps = {
  isLogged: boolean;
  userName: string;
};

export const AuthButton = ({ isLogged, userName }: AuthButtonProps) => {
  return (
    <>
      {!isLogged && <UserIcon />}
      <Typography
        label={isLogged ? `Hola, ${userName}` : "Iniciar sesion"}
        variant="body"
        className="font-medium"
      />
    </>
  );
};
