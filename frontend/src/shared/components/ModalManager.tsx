import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { hideModal } from "../state/modalSlice";
import AddProductFormModal from "./AddProductFormModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

type ModalComponents = {
  ADD_PRODUCT: typeof AddProductFormModal;
  CONFIRM_DELETE: typeof ConfirmDeleteModal;
};

const MODAL_COMPONENTS: ModalComponents = {
  ADD_PRODUCT: AddProductFormModal,
  CONFIRM_DELETE: ConfirmDeleteModal,
};

type RootState = {
  modal: {
    modalType: keyof ModalComponents;
    modalProps: any;
  };
};

const ModalManager = () => {
  const dispatch = useDispatch();
  const { modalType, modalProps } = useSelector(
    (state: RootState) => state.modal
  );

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];

  return (
    <Modal
      isOpen={!!modalType}
      onRequestClose={() => dispatch(hideModal())}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
    >
      <SpecificModal {...modalProps} />
    </Modal>
  );
};

export default ModalManager;
