//Import the configureStore API from Redux Toolkit.
import { configureStore } from "@reduxjs/toolkit";

//install redux-logger

//import slices
import cakeReducer from "../Features/cake/cakeSlice";
import icecreamReducer from "../Features/icecream/icecreamSlice";
import usersSlice from "../Features/users/userSlice";

//create logger

const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    icecreams: icecreamReducer,
    users: usersSlice,
  },
});

export default store;
