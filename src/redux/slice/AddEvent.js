import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  event : []
};

export const addEventSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    addEvent: (state,action) => {
      state.event = [...state.event,action.payload];
    },
    deleteEvent: (state,action) => {
        const vehicleType = action.payload
        state.event = state.event.filter((items) => items.vehicleType !== vehicleType);
    },
    editEvent : (state,action) => {
        const vehicleType = action.payload;
        state.event = state.event.filter((items) => items.vehicleType !== vehicleType);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addEvent,deleteEvent,editEvent } = addEventSlice.actions

export default addEventSlice.reducer