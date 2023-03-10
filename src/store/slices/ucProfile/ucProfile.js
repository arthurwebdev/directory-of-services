import { createSlice } from "@reduxjs/toolkit";

const ucProfileSlice = createSlice({
	name: 'ucProfile',
	initialState: {
		experience: [],
		skills: [],
		gallery: [],
		avatar: null,
		educations: [],
		languages: []
	},
	reducers: {
		addNewExperience(state,{payload}){
			const {company,headline,from,to} = payload
			const newExperience = {id: new Date().getTime().toString(),company,headline,from,to}
			state.experience.push(newExperience)
		},
		deleteExp(state,{payload}){
			const {id} = payload
			state.experience = state.experience.filter(exp => exp.id !== id)
		},
		addNewSkills(state,{payload}){
			const {skill} = payload
			const newSkill = {id: new Date().getTime().toString(),skill}
			state.skills.push(newSkill)
		},
		deleteSkill(state,{payload}){
			const {id} = payload
			state.skills = state.skills.filter(skill => skill.id !== id)
		},
		addNewPicture(state,{payload}){
			const {photo} = payload
			const newPhoto = {id: new Date().getTime().toString(),photo}
			state.gallery.push(newPhoto)
		},
		deletePicture(state,{payload}){
			const {id} = payload
			state.gallery = state.gallery.filter(photo => photo.id !== id)
		},
		addAvatar(state,{payload}){
			const {avatar} = payload
			state.avatar = avatar
		},
		deleteAvatar(state){
			state.avatar = null
		},
		addEducation(state,{payload}){
			const {university,faculty,specialization,eduStart,eduEnd} = payload
			const newEducation = {
				id: new Date().getTime().toString(),
				university,faculty,specialization,
				eduStart,eduEnd
			}
			state.educations.push(newEducation)
		},
		deleteEducation(state,{payload}){
			const {id} = payload
			state.educations = state.educations.filter(edu => edu.id !== id)
		},
		addLanguage(state,{payload}){
			const {language,level} = payload
			const newLanguage = {id: new Date().getTime().toString(),language,level}
			state.languages.push(newLanguage)
		},
		deleteLanguage(state,{payload}){
			const {id} = payload
			state.languages = state.languages.filter(lang => lang.id !== id)
		},
		currentInformation(state,{payload}){
			const {experience,skills,gallery,avatar,languages,educations} = payload
			return {
				...state,
				experience: [...experience],
				skills: [...skills],
				gallery: [...gallery],
				avatar: avatar,
				languages: [...languages],
				educations: [...educations]
			}
		}
	}
})

export const selectUCProfile = state => state.ucProfile

export const {
	addNewExperience,deleteExp,addNewSkills,deleteSkill,
	addNewPicture,deletePicture,currentInformation,
	addAvatar,deleteAvatar,addEducation,deleteEducation,
	addLanguage,deleteLanguage
} = ucProfileSlice.actions

export const ucProfileReducer = ucProfileSlice.reducer