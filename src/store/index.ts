import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { player } from "./slices/player";

export const store = configureStore({
  reducer: {
    player,
  },
})


export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector