import React, { createContext, useContext, useState } from "react";

type CommandDialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CommandDialogContext = createContext<
  CommandDialogContextType | undefined
>(undefined);

export const CommandDialogProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <CommandDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </CommandDialogContext.Provider>
  );
};

export const useCommandDialog = () => {
  const context = useContext(CommandDialogContext);
  if (!context)
    throw new Error(
      "useCommandDialog must be used within a CommandDialogProvider"
    );
  return context;
};
