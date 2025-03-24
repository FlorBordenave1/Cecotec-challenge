import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const ConfirmationModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="flex flex-col items-center">
        <DialogHeader>
          <DialogTitle>Tu pedido fue confirmado correctamente</DialogTitle>
          <DialogDescription>Gracias por tu compra.</DialogDescription>
        </DialogHeader>
        <Button variant={"primary"} onClick={onClose} className="mt-4">
          Cerrar
        </Button>
      </DialogContent>
    </Dialog>
  );
};
