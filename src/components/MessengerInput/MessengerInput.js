import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, selectUsers } from '../../store/slices/users/usersSlice'
import './MessengerInput.css'

function MessengerInput({id}) {
	const { usersData, currentUser } = useSelector(selectUsers)
	const dispatch = useDispatch()
	const formRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		let message = formRef.current[0].value
		
		if (message.length) {
			console.log(usersData);
			dispatch(addMessage({
				message,
				time: new Date().getHours() + ':' + new Date().getMinutes(),
				crrId: currentUser.id,
				otherId: id
			}))
		}
		formRef.current.reset()
	}

	return (
		<div className='chat-input'>
			<form ref={formRef} onSubmit={handleSubmit} className="write">
				<input type="text" />
				<button className="write-link send">Send</button>
			</form>
		</div>
	)
}

export default MessengerInput
