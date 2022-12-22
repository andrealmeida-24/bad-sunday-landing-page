import { createContext, useState } from "react";

export const ModalContext = createContext({
  modalShow: null,
  setModalShow: () => null,
});

export const ModalProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const value = { modalShow, setModalShow };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
