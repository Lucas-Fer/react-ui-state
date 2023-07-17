import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {},
})


export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector