// src/components/ConfirmDeleteModal.js

import React from "react";
import { useDispatch } from "react-redux";
import { hideModal } from "../state/modalSlice";

interface ConfirmDeleteModalProps {
  itemName: string;
  onDelete: () => void;
}

const ConfirmDeleteModal = ({
  itemName,
  onDelete,
}: ConfirmDeleteModalProps) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    onDelete();
    dispatch(hideModal());
  };

  return (
    <div className="bg-white p-6 rounded-lg w-96">
      <h2 className="text-xl mb-4">Confirm Deletion</h2>
      <p>
        Are you sure you want to delete <strong>{itemName}</strong>?
      </p>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={() => dispatch(hideModal())}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
