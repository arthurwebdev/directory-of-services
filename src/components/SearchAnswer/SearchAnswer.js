import React, { memo, useEffect, useState } from 'react'
import './SearchAnswer.css'
import UserCard from '../UserCard/UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { filteredUsersDataByRating, selectSearch } from '../../store/slices/search/searchSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'

function SearchAnswer({}) {
	const {filteredUsers} = useSelector(selectSearch)
	const {usersData} = useSelector(selectUsers)
	const dispatch = useDispatch()

	useEffect(() => {
		if(!filteredUsers.length){
			dispatch(filteredUsersDataByRating({usersData}))
		}
	},[usersData])
	
	return (
		<div className='Search--answer'>
			{
				filteredUsers
					?.map(user =>
						<UserCard
							key={user.id}
							id={user.id}
							avatar={user.profile.avatar}
							firstName={user.firstName}
							lastName={user.lastName}
							profession={user.profile.profession}
							rating={user.profile.rating}
							address={user.profile.address}
						/>
					)
			}
		</div>
	)
}

export default memo(SearchAnswer)
