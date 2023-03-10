import React, { memo, useState } from 'react'
import './Comment.css'

function Comment({ comment, rating, avatar, fullName, date }) {


	return (
		<div className='comment'>
			<div style={{padding: '2px'}}><img src={avatar} alt="" /></div>
			<div className='comment__header'>
				<h2>{fullName}</h2>
				<div className='comment__stars-and-date'>
					<div>
						{
							[...Array(5)].map((star, i) => {
								i += 1;
								return (
									rating >= i ? <span key={i} style={{ color: 'yellow' }}>&#9733;</span>
										: <span key={i} style={{ color: 'grey' }}>&#9733;</span>)
							}
							)
						}
					</div>
					<span>{date}</span>
				</div>
				<p className='comment__text'>{comment}</p>
			</div>
		</div>
	)
}

export default memo(Comment)
