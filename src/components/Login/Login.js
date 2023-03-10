import React, { useEffect, useRef } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import {BiArrowBack} from 'react-icons/bi'
import {AiOutlineLogin} from 'react-icons/ai'


function Login() {
	const formRef = useRef(null)
	const navigate = useNavigate()
	const {currentUser,usersData} = useSelector(selectUsers)
	const dispatch = useDispatch()

	useEffect(() => {
		if(currentUser){
			navigate('/')
		}
	},[currentUser])

	console.log(usersData);

	const handleSubmit = (e) => {
		e.preventDefault()
		const login = formRef.current[0].value
		const password = formRef.current[1].value
		if(login.length && password.length && usersData.some(user => user.login === login && user.password === password)){
			dispatch(toggleCurrentUser({login: login, password: password}))
		}
	}

	return (
		<div className='acc-form login'>
			<div className='acc-form__links'>
							<Link to='/'><button><BiArrowBack className='icon'/>Home</button></Link>
							<Link to='/reg'><button><AiOutlineLogin className='icon'/>Sign Up</button></Link>
						</div>
			<form ref={formRef} onSubmit={handleSubmit} className='acc-body login__body'>
				<h1 className='acc-h1'>Login</h1>
				<div className='input'>
					<div className='floating-label-group'>
						<input type='text' required />
						<label className="floating-label">Login</label>
					</div>
				</div>
				<div className='input'>
					<div className='floating-label-group'>
						<input type='password' required />
						<label className="floating-label">Password</label>
					</div>
				</div>
				<button className='acc-btn'>Login</button>
			</form>
		</div>
	)
}

export default Login
