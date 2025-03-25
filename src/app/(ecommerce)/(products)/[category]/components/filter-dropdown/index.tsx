import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button";

type FilerDropdownProps = {
  handleSortByDefault: () => void;
  handleSortBySold: () => void;
};

export const FilerDropdown = ({
  handleSortByDefault,
  handleSortBySold,
}: FilerDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary" className="w-[120px]">
          Ordenar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleSortByDefault}>
          Por defecto
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSortBySold}>
          Más vendidos
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
