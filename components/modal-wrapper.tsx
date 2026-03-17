"use client";

import { type FC } from "react";
import { ResumeModalProvider, useResumeModal } from "@/hooks/use-resume-modal";
import { ResumeModal } from "@/components/ui/resume-modal";

interface ModalWrapperProps {
  children: React.ReactNode;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({ children }) => {
  return (
    <ResumeModalProvider>
      {children}
      <ResumeModalWithContext />
    </ResumeModalProvider>
  );
};

const ResumeModalWithContext: FC = () => {
  const { isOpen, closeModal } = useResumeModal();

  return <ResumeModal isOpen={isOpen} onClose={closeModal} />;
};
