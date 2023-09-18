import React from "react";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

export default function Modal({ children, open }: ModalProps) {
  return (
    <>
      {open ? (
        <div className="fixed bg-black inset-0 bg-opacity-80 dark:bg-opacity-90 h-full w-full">
          <div className="relative top-1/3 mx-auto p-16 border w-1/3 shadow-lg rounded-md bg-white">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
