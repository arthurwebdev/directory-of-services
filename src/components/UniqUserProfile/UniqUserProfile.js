import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addNewPersonInMessenger, changeChateName, changeMessageId, selectUsers } from '../../store/slices/users/usersSlice'
import ReviewsSection from '../ReviewsSection/ReviewsSection'
import './UniqUserProfile.css'
import { BiArrowBack } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { deleteReviewsInState } from '../../store/slices/reviews/reviewsSlice'
import { addAllReviews } from '../../store/slices/reviews/reviewsSlice';

function UniquserProfile() {
	const { usersData, currentUser } = useSelector(selectUsers)
	const [user, setUser] = useState(null)
	const [block, setBlock] = useState('gallery')
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		setUser({ ...usersData.find(user => user.id === id) })
		dispatch(addAllReviews({reviews: usersData.find(user => user.id === id).reviews}))
	}, [id])

	useEffect(() => {
		return () => {
			dispatch(deleteReviewsInState())
		}
	},[])

	const clickMessenger = () => {
		dispatch(addNewPersonInMessenger(
			{
				id: user.id,
				img: user.profile.avatar,
				name: user.firstName + " " + user.lastName,
				currentId: currentUser.id
			}
		))
		dispatch(changeMessageId({ id: user.id }))
		dispatch(changeChateName({ name: user.firstName + ' ' + user.lastName }))
	}

	return (
		<div className='Profile'>
			<div className='Profile--header'>
				<div className='acc-form__links'>
					<Link to='/'><button className='back'><BiArrowBack className='icon' />Back</button></Link>
				</div>
				<img className='Profile--avatar' src={user?.profile.avatar} alt="" />
				<div className='UserName'>
					<h1>{user?.firstName} {user?.lastName}</h1>
					<h2>{user?.profile.profession}</h2>
				</div>
				<div className='message--buton acc-form__links'>
					<Link to='/messenger'>
						<button
							onClick={clickMessenger}
							style={{display: user?.id === currentUser?.id ? 'none' : 'flex'}}
						>
							<AiFillMessage className='icon' />
							<span>Message</span>
						</button>
					</Link>
				</div>
			</div>
			<div className='Main'>
				<div className='Left--section'>
					<ul className='Profile--data'>
						<li className='contact'>{user?.phoneNumber1}</li>
						<li className='contact'>{user?.profile.phoneNumber2}</li>
						<li className='contact'>{user?.profile.email}</li>
						<li className='contact'>{user?.profile.address}</li>
						<li className='contact'>{user?.profile.birthday}</li>
					</ul>
					<div className='Profile--skills'>
						<h4>Skills</h4>
						<ul>
							{
								user?.profile.skills
									.map(skill => <li key={skill.id}>{skill.skill}</li>)
							}
						</ul>
					</div>
					<div className='Profile--languages'>
						<h4>Languages</h4>
						<div>
							{
								user?.profile.languages
									.map(language =>
										<section key={language.id}>
											<h6>{language.language}</h6>
											<span>{language.level}</span>
										</section>
									)
							}
						</div>
					</div>
					<div className='Profile--links'>
						<h4>Links</h4>
						<ul>
							{user?.profile.github && <li>{user?.profile.github}</li>}
							{user?.profile.linkedin && <li>{user?.profile.linkedin}</li>}
							{user?.profile.instagram && <li>{user?.profile.instagram}</li>}
							{user?.profile.facebook && <li>{user?.profile.facebook}</li>}
							{user?.profile.twitter && <li>{user?.profile.twitter}</li>}
							{user?.profile.other && <li>{user?.profile.other}</li>}
						</ul>
					</div>
				</div>
				<div className='Right--section'>
					<div className='Profile--education'>
						<h4>Education</h4>
						<div>
							{
								user?.profile.educations
									.map(edu =>
										<section key={edu.id}>
											<p>{edu.university}</p>
											<p>{edu.faculty}</p>
											<p>{edu.specialization} <span>from  {edu.eduStart}  to  {edu.eduEnd}</span></p>
										</section>
									)
							}
						</div>
					</div>
					<div className='Profile--experience'>
						<h4>Experience</h4>
						<div>
							{
								user?.profile.experience
									.map(exp =>
										<section key={exp.id}>
											<p>{exp.company}</p>
											<p>{exp.headline}</p>
											<p>{exp.from} - {exp.to}</p>
										</section>
									)
							}
						</div>
					</div>
					<div className='Profile--bio'>
						<h4>Biography</h4>
						<p>{user?.profile.bio}</p>
					</div>
				</div>
				<div className='Bottom--section'>
					<div className='Bottom--section__btn'>
						<button onClick={() => setBlock('gallery')}>Gallery</button>
						<button onClick={() => setBlock('reviews')}>Reviews</button>
					</div>
					<div className='Bottom--section__body'>
						<div style={{ display: block === 'gallery' ? 'block' : 'none' }}>
							<div className='Profile--gallery'>
								{
									user?.profile.gallery
										.map(photo =>
											<div key={photo.id} className='Progile--image-container'>
												<img className='Profile--gallery-img' src={photo.photo} alt="" />
											</div>
										)
								}
							</div>
						</div>
						<div style={{ display: block === 'reviews' ? 'block' : 'none' }}>
							<ReviewsSection id={user?.id} />
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default UniquserProfile
