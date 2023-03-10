import { createSlice } from "@reduxjs/toolkit";

const messengerSlice = createSlice({
	name: 'messenger',
	initialState: {},
	reducers: {

	}
})

export const selectMessenger = state => state.messenger

export const {} = messengerSlice.actions

export const messengerReducer = messengerSlice.reducer