import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './ChatSection.css'

function ChatSection() {
	const { currentUser, messageId } = useSelector(selectUsers)
	const [messages, setMesages] = useState([])
	const formRef = useRef(null)

	useEffect(() => {
		formRef.current.scrollTop = formRef.current.scrollHeight - formRef.current.clientHeight;
	}, [currentUser?.messenger
			.find(person =>
				person.id === messageId
			)?.messages])
	return (
		<div ref={formRef} className="chat">
			<div className="conversation-start">
				<span>Today, 5:38 PM</span>
			</div>
			{
				currentUser?.messenger.length ?
				currentUser?.messenger
					.find(person =>
						person.id === messageId
					)?.messages?.map(msg =>
						<div key={msg.id} className={`bubble ${msg.who}`}>
							{msg.message}
						</div>
					)
				: null
			}
		</div>
	)
}

export default ChatSection
