import { configureStore } from "@reduxjs/toolkit";
import writeReducer from './writeSlice'

export default configureStore({
  reducer: {
    write: writeReducer,
  }
})
