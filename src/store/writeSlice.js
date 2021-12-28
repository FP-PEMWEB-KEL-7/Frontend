import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  writeList: []
}

const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    saveWrite: (state, action) => {
      state.writeList.push(action.payload)
    },
    deleteWrite: (state, action) => {
      state.writeList = [];
    },
  }
});

export const {
  saveWrite,
  deleteWrite
} = writeSlice.actions

export const selectWriteList = state => state.write.writeList

export default writeSlice.reducer