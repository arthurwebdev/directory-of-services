import React from 'react'
import './Registration.css'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, selectUsers } from '../../store/slices/users/usersSlice'
import { Link, useNavigate } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import {AiOutlineLogin} from 'react-icons/ai'

function Registration() {
	const { currentUser } = useSelector(selectUsers)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const validationSchema = yup.object().shape({
		firstName: yup.string().typeError('Not filled in correctly').required('Field is required'),
		lastName: yup.string().typeError('Not filled in correctly').required('Field is required'),
		phoneNumber1: yup.number().typeError('Not filled in correctly').required('Field is required'),
		login: yup.string().email('Not filled in correctly').required('Field is required'),
		password: yup.string().typeError('Not filled in correctly').required('Field is required'),
		comfirmPassword: yup.string().typeError('Not filled in correctly').oneOf([yup.ref('password')], 'Passwords do not match').required('Field is required')
	})
	return (

		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				phoneNumber1: '',
				login: '',
				password: '',
				comfirmPassword: '',
			}}

			onSubmit={values => {
				dispatch(addNewUser({
					firstName: values.firstName,
					lastName: values.lastName,
					phoneNumber1: values.phoneNumber1,
					login: values.login,
					password: values.password
				}))
				navigate('/login')
			}}

			validateOnBlur

			validationSchema={validationSchema}
		>
			{
				({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
					<div className='registartion acc-form'>
						<div className='acc-form__links'>
							<Link to='/'><button><BiArrowBack className='icon'/>Home</button></Link>
							<Link to='/login'><button><AiOutlineLogin className='icon'/>Login</button></Link>
						</div>
						<form className='registartion__body acc-body' onSubmit={handleSubmit}>
							<h1 className='acc-h1'>Registration</h1>
							<div className='input'>
								<div className='floating-label-group'>
									<input
										type='text'
										name='firstName'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.firstName}
										required
									/>
									<label className="floating-label">Fist name</label>
								</div>
								{touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
							</div>
							<div className='input'>
								<div className='floating-label-group'>
									<input
										type='text'
										name='lastName'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.lastName}
										required
									/>
									<label className="floating-label">Last name</label>
								</div>
								{touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
							</div>
							<div className='input'>
								<div className='floating-label-group'>
									<input
										type='text'
										name='phoneNumber1'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.phoneNumber1}
										required
									/>
									<label className="floating-label">Phone</label>
								</div>
								{touched.phoneNumber1 && errors.phoneNumber1 && <p>{errors.phoneNumber1}</p>}
							</div>
							<div className='input'>
								<div className='floating-label-group'>
									<input
										type='text'
										name='login'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.login}
										required
									/>
									<label className="floating-label">Login</label>
								</div>
								{touched.login && errors.login && <p>{errors.login}</p>}
							</div>
							<div className='input'>
								<div className='floating-label-group'>
									<input
										type='text'
										name='password'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
										required
									/>
									<label className="floating-label">Password</label>
								</div>
								{touched.password && errors.password && <p>{errors.password}</p>}
							</div>
							<div className='input'>
								<div className='floating-label-group'>
									<input
										type='text'
										name='comfirmPassword'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.comfirmPassword}
										required
									/>
									<label className="floating-label">ComfirmPassword</label>
								</div>
								{touched.comfirmPassword && errors.comfirmPassword && <p>{errors.comfirmPassword}</p>}
							</div>
							<button
								className='acc-btn'
								type='submit'
								disabled={!isValid && !dirty}
							>
								Registration
							</button>

						</form>
					</div>
				)
			}
		</Formik>
	)
}

export default Registration
