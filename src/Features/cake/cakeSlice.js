import { createSlice } from "@reduxjs/toolkit";
// The slice takes care of defining action creator, switch statement in reducer  and handling immutable updates in reducer.

//Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes > 0 ? state.numOfCakes-- : alert("out of stock");
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload || 1;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
