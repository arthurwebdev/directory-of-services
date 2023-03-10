import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
	name: 'reviews',
	initialState: [],
	reducers: {
		addReviewsInState(state, { payload }) {
			const { comment, rating, reviewId, avatar, fullName } = payload
			const today = new Date()
			const yyyy = today.getFullYear()
			let mm = today.getMonth() + 1
			let dd = today.getDate()

			const newRating = {
				reviewId,
				comment, rating, avatar, fullName,
				date: dd + '/' + mm + '/' + yyyy,
			}

			state.push(newRating)
		},
		deleteReviewsInState(state) {
			state.length = 0
		},
		addAllReviews(state,{payload}){
			const {reviews} = payload
			state = [...reviews]
		}
	}
})

export const selectReviews = state => state.reviews

export const { addReviewsInState, deleteReviewsInState, addAllReviews } = reviewsSlice.actions

export const reviewsReducer = reviewsSlice.reducer