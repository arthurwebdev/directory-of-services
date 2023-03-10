import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeChateName, changeMessageId } from '../../store/slices/users/usersSlice'
import './MessengerPerson.css'

function MessengerPerson({ id, img, name, time, message, setIsShow }) {
	const dispatch = useDispatch()

	const click = () => {
		dispatch(changeMessageId({ id }))
		dispatch(changeChateName({ name, time }))

		const width = window.innerWidth;
		if (width <= 1024) {
			setIsShow(prev => !prev)
		}
	}

	return (
		<li onClick={click} className="person">
			<img src={img} alt="" />
			<span className="name">{name}</span>
			<span className="preview">{message}</span>
		</li>
	)
}

export default memo(MessengerPerson)