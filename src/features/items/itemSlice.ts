import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { ReqItem } from "../../shared/types/itemType";

interface InitialState {
  item: ReqItem | null;
  listItem: ReqItem[];
}

const initialState: InitialState = {
  item: null,
  listItem: [],
};

export const itemsSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    createItem: (state, action: PayloadAction<ReqItem>) => {
      state.listItem.push(action.payload);
    },
  },
});
export const { createItem } = itemsSlice.actions;
export const selectItems = (state: RootState) => state.items;

export default itemsSlice.reducer;
