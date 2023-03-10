import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAvatar, deleteAvatar, selectUCProfile } from '../../store/slices/ucProfile/ucProfile';
import './AddProfileImg.css'

function AddProfileImg() {
	const { avatar } = useSelector(selectUCProfile)
	const dispatch = useDispatch()

	const handleFileChange = (e) => {
		dispatch(addAvatar({ avatar: URL.createObjectURL(e.target.files[0]) }))
	}

	return (
		<div className='save--image'>
			<h3>Profile avatar</h3>
			<div className='save--avatar-body'>
				<input type='file' onChange={handleFileChange} />
				<div>
					{
						avatar &&
						<div className='gallery--img'>
							<img src={avatar} alt="" />
							<div onClick={() => dispatch(deleteAvatar())}
								className='gallery--btn'>x</div>
						</div>
					}
				</div>
				
			</div>
		</div>
	)
}

export default memo(AddProfileImg)
