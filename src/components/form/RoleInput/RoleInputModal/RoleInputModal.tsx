import CloseableModal from "../../../common/CloseableModal/CloseableModal";

type RoleInputModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function RoleInputModal({ isOpen, onClose }: RoleInputModalProps) {
  return (
    <CloseableModal isOpen={isOpen} onClose={onClose}>
      TODO
    </CloseableModal>
  );
}

export default RoleInputModal;
