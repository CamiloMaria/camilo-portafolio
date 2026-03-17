"use client";

import { createContext, useContext, useState, type FC, type ReactNode } from "react";

interface ResumeModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(
  undefined
);

interface ResumeModalProviderProps {
  children: ReactNode;
}

export const ResumeModalProvider: FC<ResumeModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ResumeModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ResumeModalContext.Provider>
  );
};

export const useResumeModal = (): ResumeModalContextType => {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error("useResumeModal must be used within a ResumeModalProvider");
  }
  return context;
};
