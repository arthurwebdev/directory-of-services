import React, { memo, useEffect } from 'react'
import './CreateProfile.css'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { currentInformation, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import AddProfileImg from '../AddProfileImg/AddProfileImg'
import AddProfileGallery from '../AddProfileGallery/AddProfileGallery'
import { addNewUserProfile, changeCurrentUserStatus, selectUsers, updateUserInformation } from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router-dom'
import CreateExperience from '../CreateExperience/CreateExperience'
import CreateEducation from '../CreateEducation/CreateEducation'
import CreateSkills from '../CreateSkills/CreateSkills'
import CreateLanguages from '../CreateLanguages/CreateLanguages'

function CreateProfile() {
	const { experience, skills, gallery, avatar, educations, languages } = useSelector(selectUCProfile)
	const { currentUser } = useSelector(selectUsers)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		if (currentUser.profileIsAvailable) {
			dispatch(currentInformation({
				experience: currentUser.profile.experience,
				skills: currentUser.profile.skills,
				gallery: currentUser.profile.gallery,
				avatar: currentUser.profile.avatar,
				educations: currentUser.profile.educations,
				languages: currentUser.profile.languages
			}))

		}
	}, [])

	const validationSchema = yup.object().shape({
		profession: yup.string().typeError('Not filled in correctly').required('Field is required'),
		address: yup.string().typeError('Not filled in correctly').required('Field is required'),
		phoneNumber2: yup.number().typeError('Not filled in correctly'),
		email: yup.string().email('Not filled in correctly').required('Field is required'),
		bio: yup.string().required('Field is required'),
		linkedin: yup.string().typeError('Not filled in correctly'),
		gitHub: yup.string().typeError('Not filled in correctly'),
		category: yup.string().required('Field is required'),
		birthday: yup.string().required('Field is required'),
		other: yup.string().typeError('Not filled in correctly'),
		instagram: yup.string().typeError('Not filled in correctly'),
		facebook: yup.string().typeError('Not filled in correctly'),
		twitter: yup.string().typeError('Not filled in correctly'),
	})

	return (
		<Formik
			initialValues={{
				profession: currentUser.profileIsAvailable ? currentUser.profile.profession : '',
				address: currentUser.profileIsAvailable ? currentUser.profile.address : '',
				phoneNumber2: currentUser.profileIsAvailable ? currentUser.profile.phoneNumber2 : '',
				email: currentUser.profileIsAvailable ? currentUser.profile.email : '',
				bio: currentUser.profileIsAvailable ? currentUser.profile.bio : '',
				linkedin: currentUser.profileIsAvailable ? currentUser.profile.linkedin : '',
				gitHub: currentUser.profileIsAvailable ? currentUser.profile.gitHub : '',
				category: currentUser.profileIsAvailable ? currentUser.profile.category : '',
				birthday: currentUser.profileIsAvailable ? currentUser.profile.birthday : '',
				other: currentUser.profileIsAvailable ? currentUser.profile.other : '',
				facebook: currentUser.profileIsAvailable ? currentUser.profile.facebook : '',
				instagram: currentUser.profileIsAvailable ? currentUser.profile.instagram : '',
				twitter: currentUser.profileIsAvailable ? currentUser.profile.twitter : '',
			}}

			onSubmit={values => {
				if (!currentUser.profileIsAvailable) {
					dispatch(addNewUserProfile({
						id: currentUser.id,
						profession: values.profession,
						address: values.address,
						phoneNumber2: values.phoneNumber2,
						email: values.email,
						bio: values.bio,
						linkedin: values.linkedin,
						gitHub: values.gitHub,
						category: values.category,
						birthday: values.birthday,
						other: values.other,
						instagram: values.instagram,
						facebook: values.facebook,
						twitter: values.twitter,
						experience, skills, gallery, avatar,
						educations, languages
					}))
					dispatch(changeCurrentUserStatus({ id: currentUser.id }))
				}
				else {
					dispatch(updateUserInformation({
						id: currentUser.id,
						profession: values.profession,
						address: values.address,
						phoneNumber2: values.phoneNumber2,
						email: values.email,
						bio: values.bio,
						linkedin: values.linkedin,
						gitHub: values.gitHub,
						category: values.category,
						birthday: values.birthday,
						other: values.other,
						instagram: values.instagram,
						facebook: values.facebook,
						twitter: values.twitter,
						experience, skills, gallery, avatar,
						educations, languages
					}))
				}
				navigate('/profile')
			}}

			validateOnBlur

			validationSchema={validationSchema}
		>
			{
				({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
					<div className='CreateProfile'>
						<form className='CreateProfile--body' onSubmit={handleSubmit}>
							<div className='input profession'>
								<label className='CreateProfile--label' >Profession</label>
								<input
									type='text'
									name='profession'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.profession}
									required
								/>
								{touched.profession && errors.profession && <p>{errors.profession}</p>}
							</div>
							<div className='input address'>
								<label className='CreateProfile--label' >Address</label>
								<input
									type='text'
									name='address'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.address}
									required
								/>
								{touched.address && errors.address && <p>{errors.address}</p>}
							</div>
							<div className='input category'>
								<label className='CreateProfile--label' >Category</label>
								<select
									value={values.category}
									onChange={handleChange}
									name='category'
									onBlur={handleBlur}
									required
								>
									<option value=''>All Category</option>
									<option value="1">Software development</option>
									<option value="2">Quality Assurance /Control</option>
									<option value="3">UI/UX/Graphic Design</option>
									<option value="4">Product/Project Management</option>
									<option value="5">Hardware design</option>
									<option value="6">Other IT</option>
									<option value="7">Sales/service management</option>
									<option value="8">Administrative/office-work</option>
									<option value="9">Tourism/Hospitality/HoReCa</option>
									<option value="10">Marketing/Advertising</option>
									<option value="11">Communications/Journalism/PR</option>
									<option value="12">Accounting/Bookkeeping/Cash register</option>
									<option value="13">Finance Management</option>
									<option value="14">Banking/credit</option>
									<option value="15">TV/Radio</option>
									<option value="16">Education/training</option>
									<option value="17">Legal</option>
									<option value="18">Audit/Compliance</option>
									<option value="19">Healthcare/Pharmaceutical</option>
									<option value="20">Construction</option>
									<option value="21">Human Resources</option>
									<option value="22">Sports/Beauty</option>
									<option value="23">Procurement/Logistics/Courier</option>
									<option value="24">Production</option>
									<option value="25">Business/Management</option>
									<option value="26">Art/Design/Architecture</option>
									<option value="27">General/professional/Other services</option>
									<option value="28">IT security/Networks</option>
									<option value="29">NGO/Nonprofit</option>
									<option value="31">Insurance</option>
									<option value="33">Entertainment</option>
									<option value="34">Data Science/Data Engineering</option>
									<option value="35">Foreign language</option>
									<option value="36">Economics</option>
									<option value="37">Hardware Design / Engineering</option>
									<option value="38">Data Research/Analysis</option>
									<option value="39">Business Software Consultancy</option>
									<option value="40">Mechanical/Engineering</option>
									<option value="41">System Admin/Engineer</option>
									<option value="42">Retail business</option>
									<option value="43">Network Administration</option>
									<option value="44">Consultancy</option>
									<option value="45">State/ Public/ Civil service</option>
									<option value="46">Science</option>
									<option value="47">Content writing</option>
									<option value="48">Security</option>
									<option value="49">Aviation</option>
									<option value="50">DevOps/Infrastructure </option>
									<option value="51">IT Support/Technician</option>
									<option value="59">Motion Graphic Design</option>
								</select>
								{touched.category && errors.category && <p>{errors.category}</p>}
							</div>
							<div className='input phone2'>
								<label className='CreateProfile--label' >Phone 2</label>
								<input
									type='tel'
									name='phoneNumber2'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.phoneNumber2}
								/>
								{touched.phoneNumber2 && errors.phoneNumber2 && <p>{errors.phoneNumber2}</p>}
							</div>
							<div className='input email'>
								<label className='CreateProfile--label' >Email</label>
								<input
									type='email'
									name='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									required
								/>
								{touched.email && errors.email && <p>{errors.email}</p>}
							</div>
							<div className='input birthday'>
								<label className='CreateProfile--label' >Birthday</label>
								<input
									type='date'
									name='birthday'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.birthday}
									required
								/>
								{touched.birthday && errors.birthday && <p>{errors.birthday}</p>}
							</div>
							<div className='input linkedin'>
								<label className='CreateProfile--label' >Linkedin</label>
								<input
									type='text'
									name='linkedin'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.linkedin}
								/>
								{touched.linkedin && errors.linkedin && <p>{errors.linkedin}</p>}
							</div>
							<div className='input github'>
								<label className='CreateProfile--label' >GitHub</label>
								<input
									type='text'
									name='gitHub'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.gitHub}
								/>
								{touched.gitHub && errors.gitHub && <p>{errors.gitHub}</p>}
							</div>
							<div className='input instagram'>
								<label className='CreateProfile--label' >Instagram</label>
								<input
									type='text'
									name='instagram'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.instagram}
								/>
								{touched.instagram && errors.instagram && <p>{errors.instagram}</p>}
							</div>
							<div className='input facebook'>
								<label className='CreateProfile--label' >Facebook</label>
								<input
									type='text'
									name='facebook'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.facebook}
								/>
								{touched.facebook && errors.facebook && <p>{errors.facebook}</p>}
							</div>
							<div className='input twitter'>
								<label className='CreateProfile--label' >Twitter</label>
								<input
									type='text'
									name='twitter'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.twitter}
								/>
								{touched.twitter && errors.twitter && <p>{errors.twitter}</p>}
							</div>
							<div className='input other'>
								<label className='CreateProfile--label' >Other</label>
								<input
									type='text'
									name='other'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.other}
								/>
								{touched.other && errors.other && <p>{errors.other}</p>}
							</div>
							<div className='input bio'>
								<label className='CreateProfile--label' >Biography</label>
								<textarea
									name='bio'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.bio}
									required
								></textarea>
								{touched.bio && errors.bio && <p>{errors.bio}</p>}
							</div>
							<CreateEducation />
							<CreateExperience />
							<CreateSkills />
							<CreateLanguages />
							<AddProfileImg />
							<AddProfileGallery />
							<div className='create-btn'>
								<button
									className='acc-btn'
									type='submit'
									disabled={!isValid && !dirty}
								>
									Add Information
								</button>
							</div>
						</form>
					</div>
				)
			}
		</Formik>
	)
}

export default memo(CreateProfile)
