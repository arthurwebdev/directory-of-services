import React, { memo } from 'react'
import './CommentsSection.css'
import Comment from '../Comment/Comment'
import { selectReviews } from '../../store/slices/reviews/reviewsSlice'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'

function CommentsSection({id}) {
	const {usersData} = useSelector(selectUsers)
	const uniqReviews = usersData.find(user => user.id === id)?.reviews;
	const reviews = useSelector(selectReviews)
	const arr = [1,5,2]
	return (
		<div className='CommentsSection'>
			{
				(
				reviews
					.map(review => <Comment
						key={review.reviewId}
						comment={review.comment}
						rating={review.rating}
						avatar={review.avatar}
						fullName={review.fullName}
						date={review.date}
					/>
					),
					uniqReviews?.map(review => <Comment
						key={review.reviewId}
						comment={review.comment}
						rating={review.rating}
						avatar={review.avatar}
						fullName={review.fullName}
						date={review.date}
					/>)
				)
			}
		</div>
	)
}

export default memo(CommentsSection)
