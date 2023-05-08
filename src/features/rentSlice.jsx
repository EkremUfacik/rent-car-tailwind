import { createSlice } from "@reduxjs/toolkit";

const diffDay = (sd, ed) => {
  const diffTime = ed.getTime() - sd.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
  return diffDays;
};

const afterDay = new Date();
afterDay.setDate(afterDay.getDate() + 2);

const rentSlice = createSlice({
  name: "rent",
  initialState: {
    clickSign: false,
    loading: false,
    startDate: new Date(),
    endDate: afterDay,
    startTime: null,
    endTime: null,
    diffDays: "",
    pickupCity: "istanbul",
    returnCity: "istanbul",
  },
  reducers: {
    clickSignButton: (state) => {
      state.clickSign = !state.clickSign;
    },
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchEnd: (state) => {
      state.loading = false;
    },
    setDate: (state, { payload: { data, url } }) => {
      state[url] = data;
    },
    changePickupCity: (state, { payload }) => {
      state.pickupCity = payload;
    },
    changeReturnCity: (state, { payload }) => {
      state.returnCity = payload;
    },
    // setStartDate: (state, { payload }) => {
    //   state.startDate = payload;
    // },
    // setEndDate: (state, { payload }) => {
    //   state.endDate = payload;
    // },
    diffDaysCount: (state) => {
      state.diffDays = diffDay(
        new Date(state.startDate),
        new Date(state.endDate)
      );
    },
  },
});

export const {
  clickSignButton,
  diffDaysCount,
  setDate,
  changePickupCity,
  changeReturnCity,
  fetchStart,
  fetchEnd,
} = rentSlice.actions;
export default rentSlice.reducer;
