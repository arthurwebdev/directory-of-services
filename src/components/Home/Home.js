import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectReviews } from '../../store/slices/reviews/reviewsSlice'
import { selectSearch } from '../../store/slices/search/searchSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import SearchAnswer from '../SearchAnswer/SearchAnswer'
import SearchSection from '../SearchSection/SearchSection'
import './Home.css'

function Home() {
	const {filteredUsers} = useSelector(selectSearch)

	return (
		<div className='Home'>
			<SearchSection />
			<SearchAnswer {...{filteredUsers}} />
		</div>
	)
}

export default Home
