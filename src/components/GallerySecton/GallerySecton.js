import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePicture, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import './GallerySecton.css'

function GallerySecton() {
	const {gallery} = useSelector(selectUCProfile)
	const dispatch = useDispatch()

	const handleChangeGallery = (id) => {
		dispatch(deletePicture({id}))
	}

	return (
		<div className='gallery--section'>
			{
				gallery?.map(photo =>
					<div className='gallery--img' key={photo.id}>
						<img src={photo.photo} alt="" />
						<div onClick={() => handleChangeGallery(photo.id)}
							className='gallery--btn'>x</div>
					</div>
				)
			}
		</div>
	)
}

export default memo(GallerySecton)
