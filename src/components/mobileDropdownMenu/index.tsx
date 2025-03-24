"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Typography } from "../ui/typography";
import { CartIcon } from "@/icons/cartIcon";
import styles from "./mobileDropdownMenu.module.css";

type MobileDropdownMenuProps = {
  isLogged: boolean;
  onClick: () => void;
  userName: string;
};
export const MobileDropdownMenu = ({
  isLogged,
  onClick,
  userName,
}: MobileDropdownMenuProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="primary" className={styles.dropdownButton}>
        <Menu className={styles.dropdownMenu} />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end">
      <DropdownMenuItem>
        <div className={styles.actionsContent}>
          <Typography
            label={`Hola, ${userName}`}
            variant="body"
            className="font-medium"
          />
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
        {isLogged && (
          <div className={styles.actionsContent} onClick={onClick}>
            <CartIcon />
            <Typography
              label="Carrito"
              variant="body"
              className="font-medium"
            />
          </div>
        )}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
