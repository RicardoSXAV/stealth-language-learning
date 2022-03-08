import { createContext, useContext, useState } from "react";

import AnswerModal from "../components/AnswerModal";

type ModalType = "success" | "fail";

export type ModalObject = {
  type: ModalType;
  onContinue?: Function;
  answer?: string;
};

type ModalContextData = {
  viewModal: (type: ModalType, onContinue?: Function, answer?: string) => void;
  modal: ModalObject | undefined;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalContext = createContext({} as ModalContextData);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = useState<ModalObject | undefined>();

  const viewModal = (
    type: ModalType,
    onContinue?: Function,
    answer?: string
  ) => {
    setModal({ type, onContinue, answer });
  };

  return (
    <ModalContext.Provider value={{ viewModal, modal }}>
      {children}
      {modal && (
        <AnswerModal
          type={modal.type}
          answer={modal.answer}
          onPressContinue={modal.onContinue}
          setModal={setModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
