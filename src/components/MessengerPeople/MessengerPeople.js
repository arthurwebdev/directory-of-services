import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerPerson from '../MessengerPerson/MessengerPerson'
import './MessengerPeople.css'

function MessengerPeople({setIsShow}) {
	const {currentUser} = useSelector(selectUsers)

	return (
		<ul className="people">
			{
				currentUser?.messenger.map(user =>
					<MessengerPerson
						key={user.id}
						id={user.id}
						name={user.name}
						time={user.time}
						img={user.img}
						message={user.message}
						setIsShow={setIsShow}
					/>
				)
			}
		</ul>
	)
}

export default MessengerPeople
