import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa";
import './UserCard.css'
function UserCard({id,avatar,profession,rating,address,lastName,firstName}) {
	return (
		<article>
			<img src={avatar} alt="" />
			<div className='card__body'>
				<div>
					<h2>{firstName} {lastName}</h2>
					<h4>{profession}</h4>
					<h5>{rating}/10</h5>
				</div>
				<div>
					<h4 className='card__address'>
						<FaMapMarkerAlt className='location-icon' />
						{address}
					</h4>
					<Link className='acc-btn' to={`${id}/uniq`}>Profile</Link>
				</div>
			</div>
		</article>
	)
}

export default memo(UserCard)
