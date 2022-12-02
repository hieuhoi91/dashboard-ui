import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

interface initialStateDashboardRoute {
  activeLabel: string;
}

const initialState: initialStateDashboardRoute = { activeLabel: "" };

const dashboardRouteSlice = createSlice({
  name: "dashboardRoute",
  initialState: initialState,
  reducers: {
    alo1234: (state, action) => {
      state.activeLabel = action.payload;
    },
  },
});

export const selectIndexActive = (state: RootState) => state.dashboardRoute.activeLabel;

export const { alo1234 } = dashboardRouteSlice.actions;

export default dashboardRouteSlice.reducer;
