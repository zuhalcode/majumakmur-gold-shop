import React, { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const CustomAlert = ({
  children,
  trigger,
}: {
  children: ReactNode;
  trigger: ReactNode;
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlert;