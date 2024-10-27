import Modal from "react-modal";

type BasicModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

function BasicModal({ isOpen, children }: BasicModalProps): JSX.Element | null {
  return (
    <Modal isOpen={isOpen}>
      <div className="w-[min(40vw,40vh)] h-[min(40vw,40vh)] rounded-full border-2 border-neutral-50 text-neutral-50 bg-primary-600 flex justify-center items-center text-lg">
        {children}
      </div>
    </Modal>
  );
}

export default BasicModal;
