import Modal from "react-modal";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { X } from "lucide-react";

type CloseableModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function CloseableModal({ isOpen, onClose, children }: CloseableModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={true}
    >
      <div className="relative min-w-[min(40vw,40vh)] min-h-[min(40vw,40vh)] max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-neutral-500 dark:border-neutral-50 bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center text-lg">
        <SecondaryButton
          onClick={onClose}
          className="absolute top-0 right-0 w-8 h-8 p-0 border-0"
        >
          <X size={"1rem"} />
        </SecondaryButton>
        <div className="absolute inset-0 p-8 pointer-events-none">
          {children}
        </div>
      </div>
    </Modal>
  );
}

export default CloseableModal;
