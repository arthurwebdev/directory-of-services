import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeChateName, changeMessageId, selectUsers } from '../../store/slices/users/usersSlice'
import ChatSection from '../ChatSection/ChatSection'
import MessengerInput from '../MessengerInput/MessengerInput'
import MessengerPeople from '../MessengerPeople/MessengerPeople'
import './Messenger.css'
import ChatTop from '../ChatTop/ChatTop'

function Messenger() {
	const { usersData, currentUser, messageId, messenger } = useSelector(selectUsers)
	const dispatch = useDispatch()
	const [isShow,setIsShow] = useState(false)

	useEffect(() => {
		return () => {
			setIsShow(false)
		}
	},[])

	useEffect(() => {
		if (!messageId) {
			let id = currentUser?.messenger[0]?.id
			dispatch(changeMessageId({ id }))
			dispatch(changeChateName({ name: currentUser?.messenger[0]?.name }))
		}
	}, [])

	return (
		<div className="messenger">
			<div className="container">
				<div
					className={`left ${!isShow ? 'show-chat' : 'chat-none'}`}
				>
					<div className="top">
						<input type="text" placeholder="Search" />
						<a className="search"></a>
					</div>
					<MessengerPeople setIsShow={setIsShow} />
				</div>
				<div
					className={`right ${isShow ? 'show-chat' : 'chat-none'}`}
				>
					<ChatTop chatName={messenger.chatName} time={messenger.time} setIsShow={setIsShow} />
					<ChatSection />
					<MessengerInput id={messageId} />
				</div>
			</div>
		</div>
	)
}

export default memo(Messenger)