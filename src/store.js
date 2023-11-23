import { configureStore } from "@reduxjs/toolkit";
import notes from "./features/notes";

export const store = configureStore({
  reducer: {
    notes
  }
})