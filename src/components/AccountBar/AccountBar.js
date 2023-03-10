import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { withProfileSettings } from '../../hoc/withProfileSettings'
import { logOut, selectUsers } from '../../store/slices/users/usersSlice'
import './AccountBar.css'
import { AiOutlineUserAdd, AiOutlineLogin, AiOutlineUser, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { RxUpdate } from 'react-icons/rx'
import { RiMessengerLine } from 'react-icons/ri'

function AccountBar({ isShow, setIsShow }) {
	const { currentUser } = useSelector(selectUsers)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		setIsShow(false)
	}, [navigate])

	return (
		<div className='account-bar'>
			{
				!currentUser ?
						<div className='account-bar__menu'>
							<button 
								className='icon-menu'
								onClick={() => setIsShow(isShow ? false : true)}
							>
								<AiOutlineMenu className='icon' />
								<div
								style={{ display: isShow ? 'block' : 'none' }}
								className='profile-setings'
							>
								<Link to='/login'><AiOutlineLogin className='icon' />Login</Link>
								<Link to='/reg'><AiOutlineUserAdd className='icon' />Sign Up</Link>
							</div>
							</button>
							<Link to='/login'><AiOutlineLogin className='icon' />Login</Link>
							<span> | </span>
							<Link to='/reg'><AiOutlineUserAdd className='icon' />Sign Up</Link>
						</div>
					: <>
						<div className='acc--msg'><Link to='/messenger'><RiMessengerLine /></Link></div>
						<button>
							<img
								className='account-bar__img'
								onClick={() => setIsShow(isShow ? false : true)}
								src={currentUser.profile.avatar}
								alt=""
							/>
							<div
								style={{ display: isShow ? 'block' : 'none' }}
								className='profile-setings'
							>
								<Link to='/profile'><AiOutlineUser />Profile</Link>
								{
									currentUser?.profileIsAvailable ?
										<Link to='/update-profile'><RxUpdate />Update Profile</Link>
										: <Link to='/create-profile'><IoCreateOutline />Create Profile</Link>
								}
								<Link onClick={() => dispatch(logOut())}
									to='/' ><AiOutlineLogout
									/>Log out</Link>
							</div>
						</button>
					</>
			}

		</div>
	)
}

export default memo(withProfileSettings(AccountBar))
