import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ModalOptions, UIState } from "./types";

const initialState: UIState<string> = {
  modal: { modalType: null, options: undefined },
};

interface SetPayload {
  type: string | null;
  options?: ModalOptions;
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<SetPayload>) {
      state.modal.modalType = action.payload.type;
      state.modal.options =
        (action.payload.options as Draft<ModalOptions>) || undefined;
    },
    closeModal: (state) => {
      state.modal.modalType = null;
      state.modal.options = undefined;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
