import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ModalOptions, SetModalPayload, UIState } from "./types";

const initialState: UIState<string> = {
  modal: { modalType: null, options: undefined },
  drawer: { isOpen: false },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<SetModalPayload>) {
      state.modal.modalType = action.payload.type;
      state.modal.options =
        (action.payload.options as Draft<ModalOptions>) || undefined;
    },
    closeModal: (state) => {
      state.modal.modalType = null;
      state.modal.options = undefined;
    },

    switchDrawer: (state) => {
      state.drawer.isOpen = !state.drawer.isOpen;
    },
  },
});

export const { openModal, closeModal, switchDrawer } = uiSlice.actions;
export default uiSlice.reducer;
