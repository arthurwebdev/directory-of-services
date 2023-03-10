import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { addNewPicture} from '../../store/slices/ucProfile/ucProfile'
import GallerySecton from '../GallerySecton/GallerySecton'
import './AddProfileGallery.css'

function AddProfileGallery() {
	const dispatch = useDispatch()

	const handleFilesChange = (e) => {
		dispatch(addNewPicture({photo: URL.createObjectURL(e.target.files[0])}))
	}

	return (
		<div className='save--gallery'>
			<h3>Gallery</h3>
			<input type="file" onChange={handleFilesChange} />
			<GallerySecton />
		</div>
	)
}

export default memo(AddProfileGallery)
