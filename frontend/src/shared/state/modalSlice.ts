// src/features/modal/modalSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalType: null,
  modalProps: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps;
    },
    hideModal: (state) => {
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
