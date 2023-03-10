import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { filteredUsersDataByRating } from '../../store/slices/search/searchSlice'

function Logo() {
	const { usersData } = useSelector(selectUsers)
	const dispatch = useDispatch()

	const filterSearch = () => {
		dispatch(filteredUsersDataByRating({usersData}))
	}

	return (
		<Link to='/'>
			<div className='logo' onClick={filterSearch}>
				<p>IWillWork</p>
			</div>
		</Link>
	)
}

export default Logo
