import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

function ChatTop({setIsShow, time,chatName}) {
	return (
		<div className="top">
			<BiArrowBack
				className='top__back-button'
				onClick={() => setIsShow(false)}
			/>
			<span>
				To: <span className="name">{chatName}</span>
			</span>
			<span
				style={{ display: time ? 'inline' : 'none' }}
				className="time">{time} PM
			</span>
		</div>
	)
}

export default ChatTop
