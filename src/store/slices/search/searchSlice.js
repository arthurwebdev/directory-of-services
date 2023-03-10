import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: 'search',
	initialState: {
		filteredUsers: [],
		defaultFilterData: []
	},
	reducers: {
		searchFilter(state, { payload }) {
			const { category, input } = payload
			const filteredInput = input.toLowerCase().replaceAll(' ', '')
			let search

			if (!category && input) {
				search = state.defaultFilterData.
					filter(user =>
						user.profile.profession.toLowerCase().replaceAll(' ', '').includes(filteredInput)
					)
			}
			else if (category && !input) {
				search = state.defaultFilterData.filter(user => user.profile.category === category)
			}
			else if (category && input) {
				search = state.defaultFilterData
					.filter(
						user =>
							user.profile.category === category &&
							user.profile.profession.toLowerCase().replaceAll(' ', '').includes(filteredInput)
					)
			}
			if (search) {
				state.filteredUsers = search
			}
		},
		filteredUsersDataByRating(state, { payload }) {
			const { usersData } = payload
			state.defaultFilterData = usersData.slice().sort((a, b) => b.profile.rating - a.profile.rating)
			state.filteredUsers = state.defaultFilterData
		}
	}
})

export const selectSearch = state => state.search

export const { searchFilter, filteredUsersDataByRating } = searchSlice.actions

export const searchReducer = searchSlice.reducer