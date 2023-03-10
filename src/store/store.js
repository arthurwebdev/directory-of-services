import { configureStore } from "@reduxjs/toolkit";
import { messengerReducer } from "./slices/messenger/messengerSlice";
import { reviewsReducer } from "./slices/reviews/reviewsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { ucProfileReducer } from "./slices/ucProfile/ucProfile";
import { usersReducer } from "./slices/users/usersSlice";

const store = configureStore({
	reducer:{
		users: usersReducer,
		ucProfile: ucProfileReducer,
		search: searchReducer,
		messenger: messengerReducer,
		reviews: reviewsReducer,
	}
})


export default store