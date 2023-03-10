import React, { memo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReviewsInState } from '../../store/slices/reviews/reviewsSlice'
import { addUserReview, selectUsers } from '../../store/slices/users/usersSlice'
import CommentsSection from '../CommentsSection/CommentsSection'
import './ReviewsSection.css'

function ReviewsSection({ id }) {
	const { currentUser, usersData } = useSelector(selectUsers)
	const [rating, setRating] = useState(0)
	const formRef = useRef(null)
	const dispatch = useDispatch()

	const handleSumbit = (e) => {
		e.preventDefault()
		let comment = formRef.current[5].value
		if (comment.length && rating != 0) {
			const reviewId = new Date().getTime().toString()
			dispatch(
				addUserReview(
					{
						id, comment, rating,
						reviewId,
						avatar: currentUser.profile.avatar,
						fullName: currentUser.firstName + ' ' + currentUser.lastName
					}
				)
			)
			dispatch(addReviewsInState(
				{
					comment, rating,
					reviewId,
					avatar: currentUser.profile.avatar,
					fullName: currentUser.firstName + ' ' + currentUser.lastName
				}
			))

			setRating(0)
			formRef.current.reset()
		}
	}

	return (
		<div className='Profile--reviews'>
			{
				currentUser ?
					<form 
						ref={formRef} 
						onSubmit={handleSumbit}
						style={{display: id === currentUser?.id ? 'none' : 'flex'}}
					>
						<div className="rating">
							<input type="radio" name='rating' onClick={({ target }) => setRating(target.value)} value="5" id="5" /><label htmlFor="5">☆</label>
							<input type="radio" name='rating' onClick={({ target }) => setRating(target.value)} value="4" id="4" /><label htmlFor="4">☆</label>
							<input type="radio" name='rating' onClick={({ target }) => setRating(target.value)} value="3" id="3" /><label htmlFor="3">☆</label>
							<input type="radio" name='rating' onClick={({ target }) => setRating(target.value)} value="2" id="2" /><label htmlFor="2">☆</label>
							<input type="radio" name='rating' onClick={({ target }) => setRating(target.value)} value="1" id="1" /><label htmlFor="1">☆</label>
						</div>
						<div className="comment-area">
							<textarea className="form-control" placeholder="What is your view?" rows="5"></textarea>
						</div>
						<button className='acc-btn'>Send</button>
					</form>
					: null
			}
			<CommentsSection id={id} />
		</div>
	)
}

export default memo(ReviewsSection)
