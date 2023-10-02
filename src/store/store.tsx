import {configureStore} from "@reduxjs/toolkit";
import addressSlice from "./AddressSlice.tsx";


const store = configureStore({
  reducer:{
    addressSlice
  }
})





export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


export default store


