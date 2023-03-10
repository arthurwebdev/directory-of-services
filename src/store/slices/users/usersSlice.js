import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";
import _ from 'lodash';
import { sortedIndex } from "lodash";

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		usersData: [],
		currentUser: null,
		messageId: null,
		messenger: {
			chatName: null,
			time: null,
		}
	},
	reducers: {
		toggleCurrentUser(state, { payload }) {
			const { login, password } = payload
			const currentUser = state.usersData.find(user => user.login === login && user.password === password)

			return {
				...state,
				currentUser: { ...currentUser }
			}
		},
		logOut(state) {
			return {
				...state,
				currentUser: null
			}
		},
		addNewUser(state, { payload }) {
			const { firstName, lastName, phoneNumber1, login, password } = payload
			const id = new Date().getTime().toString()
			return {
				...state,
				usersData: [
					...state.usersData,
					{
						id, firstName, lastName, phoneNumber1, login, password,
						profileIsAvailable: false,
						profile: {
							avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
						}
					}
				]
			}
		},
		addNewUserProfile(state, { payload }) {
			const {
				profession, address, phoneNumber2,
				email, bio, linkedin,
				gitHub, experience, skills, gallery,
				avatar, id, category, birthday, other,
				instagram, facebook, twitter, educations,
				languages
			} = payload
			const idx = state.usersData.findIndex(user => user.id === id)

			const data = {
				email, address, phoneNumber2, avatar,
				rating: Math.floor(Math.random() * 10),
				gallery, profession, bio, skills,
				experience, linkedin, gitHub, category,
				birthday, other, instagram, facebook, twitter,
				educations, languages
			}

			state.currentUser = {
				...state.currentUser,
				profile: { ...data }
			}
			state.usersData[idx] = state.currentUser
		},
		updateUserInformation(state, { payload }) {
			const {
				profession, address, phoneNumber2,
				email, bio, linkedin,
				gitHub, experience, skills, gallery,
				avatar, id, category, birthday, other,
				instagram, facebook, twitter, educations,
				languages
			} = payload
			const idx = state.usersData.findIndex(user => user.id === id)
			const newData = {
				email, address, phoneNumber2, avatar,
				gallery, profession, bio, skills,
				experience, linkedin, gitHub, category,
				birthday, other, instagram, facebook, twitter,
				educations, languages
			}
			const previousData = state.usersData[idx].profile

			if (_.isEqual(previousData, newData)) {
				console.log('The objects are equal');
			} else {
				const mergedData = _.merge({}, previousData, newData);
				state.currentUser.profile = { ...mergedData }
				state.usersData[idx].profile = state.currentUser.profile
			}
		},
		changeCurrentUserStatus(state, { payload }) {
			const { id } = payload
			const idx = state.usersData.findIndex(user => user.id === id)
			state.currentUser = { ...state.currentUser, profileIsAvailable: true }
			state.usersData[idx] = state.currentUser
		},
		addUserReview(state, { payload }) {
			const { comment, rating, id, reviewId, avatar, fullName } = payload
			const today = new Date()
			const yyyy = today.getFullYear()
			let mm = today.getMonth() + 1
			let dd = today.getDate()
			const idx = state.usersData.findIndex(user => user.id === id)
			const newRating = {
				reviewId,
				comment, rating, avatar, fullName,
				date: dd + '/' + mm + '/' + yyyy,
			}

			state.usersData[idx].reviews.push(newRating)
		},
		addNewPersonInMessenger(state, { payload }) {
			const { id, img, name, currentId } = payload
			const i = state.currentUser.messenger.find(user => user.id === id)

			if (typeof i === 'undefined') {
				const person1 = {
					id, img, name,
					time: '10:50',
					message: null,
					messages: []
				}
				const person2 = {
					id: currentId,
					img: state.currentUser.profile.avatar,
					name: state.currentUser.firstName + " " + state.currentUser.lastName,
					time: '10:50',
					message: null,
					messages: []
				}
				const crrIdx = state.usersData.findIndex(user => user.id === currentId)

				state.currentUser.messenger.push(person1)
				state.usersData[crrIdx].messenger.push(person1)

				const idx = state.usersData.findIndex(user => user.id === id)

				state.usersData[idx].messenger.push(person2)

			}
		},
		addMessage(state, { payload }) {
			const { message, time, crrId, otherId } = payload
			const id = new Date().getTime().toString()
			const messageForMe = {
				id,
				message, time,
				who: 'me'
			}

			const idx = state.currentUser.messenger.findIndex(user => user.id === otherId)
			const crrIdx = state.usersData.findIndex(user => user.id === crrId)

			state.currentUser.messenger[idx].messages.push(messageForMe)
			state.usersData[crrIdx].messenger[idx].messages.push(messageForMe)

			const messageForHis = {
				id,
				message, time,
				who: 'you'
			}

			const otherIdx = state.usersData.findIndex(user => user.id === otherId)
			const otherMsgIdx = state.usersData[otherIdx].messenger.findIndex(user => user.id === crrId)

			state.usersData[otherIdx].messenger[otherMsgIdx].messages.push(messageForHis)
		},
		changeMessageId(state, { payload }) {
			const { id } = payload
			state.messageId = id
		},
		changeChateName(state, { payload }) {
			const { name,time } = payload
			state.messenger.chatName = name
			state.messenger.time = time
		}
	},
	extraReducers: {
		[fetchUsers.fulfilled]: (state, { payload }) => {
			return {
				...state,
				usersData: [...payload]
			}
		}
	}
})

export const selectUsers = state => state.users

export const { toggleCurrentUser, logOut, addNewUser,
	addNewUserProfile, changeCurrentUserStatus, updateUserInformation, addUserReview,
	addMessage, addNewPersonInMessenger, changeMessageId, changeChateName } = usersSlice.actions

export const usersReducer = usersSlice.reducer

