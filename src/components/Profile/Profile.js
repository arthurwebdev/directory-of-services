import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import CommentsSection from '../CommentsSection/CommentsSection'
import './Profile.css'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Profile() {
	const { currentUser } = useSelector(selectUsers)
	const [block, setBlock] = useState('gallery')

	useEffect(() => {
		console.log(currentUser);
	}, [])

	return (
		<div className={`Profile ${!currentUser.profileIsAvailable ? 'profileIsAvailable' : ''}`}>
			{
				!currentUser.profileIsAvailable ?
					<div className='profile__create-profil'>
						<h1>Create your profile</h1>
						<Link 
							to='/create-profile'
							className='acc-btn profile__create-profil--btn'
						>
							Lets go
						</Link>
					</div>
					: <><div className='Profile--header'>
						<div className='acc-form__links'>
							<Link to='/'><button className='back'><BiArrowBack className='icon' />Back</button></Link>
						</div>
						<div className='profile__header-img'>
							<img className='Profile--avatar' src={currentUser.profile.avatar} alt="" />
						</div>
						<div className='UserName'>
							<h1>{currentUser.firstName} {currentUser.lastName}</h1>
							<h2>{currentUser.profile.profession}</h2>
						</div>
					</div>
						<div className='Main'>
							<div className='Left--section'>
								<ul className='Profile--data'>
									<li className='contact'>{currentUser.phoneNumber1}</li>
									<li className='contact'>{currentUser.profile.phoneNumber2}</li>
									<li className='contact'>{currentUser.profile.email}</li>
									<li className='contact'>{currentUser.profile.address}</li>
									<li className='contact'>{currentUser.profile.birthday}</li>
								</ul>
								<div className='Profile--skills'>
									<h4>Skills</h4>
									<ul>
										{
											currentUser.profile.skills
												?.map(skill => <li key={skill.id}>{skill.skill}</li>)
										}
									</ul>
								</div>
								<div className='Profile--languages'>
									<h4>Languages</h4>
									<div>
										{
											currentUser.profile.languages
												?.map(language =>
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
										{currentUser.profile.github && <li>{currentUser.profile.github}</li>}
										{currentUser.profile.linkedin && <li>{currentUser.profile.linkedin}</li>}
										{currentUser.profile.instagram && <li>{currentUser.profile.instagram}</li>}
										{currentUser.profile.facebook && <li>{currentUser.profile.facebook}</li>}
										{currentUser.profile.twitter && <li>{currentUser.profile.twitter}</li>}
										{currentUser.profile.other && <li>{currentUser.profile.other}</li>}
									</ul>
								</div>
							</div>
							<div className='Right--section'>

								<div className='Profile--education'>
									<h4>Education</h4>
									<div>
										{
											currentUser.profile.educations
												?.map(edu =>
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
											currentUser.profile.experience
												?.map(exp =>
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
									<p>{currentUser.profile.bio}</p>
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
												currentUser.profile.gallery
													?.map(photo =>
														<div className='Progile--image-container'>
															<img className='Profile--gallery-img' key={photo.id} src={photo.photo} alt="" />
														</div>
													)
											}
										</div>
									</div>
									<div style={{ display: block === 'reviews' ? 'block' : 'none' }}>
										<CommentsSection id={currentUser?.id} />
									</div>
								</div>
							</div>
						</div>
					</>
			}
		</div>
	)
}

export default Profile
