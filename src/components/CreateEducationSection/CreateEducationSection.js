import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEducation, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import './CreateEducationSection.css'

function CreateEducationSection() {
	const { educations } = useSelector(selectUCProfile)
	const dispatch = useDispatch()
	return (
		<div className='create-education--section'>
			{
				educations.map(education =>
					<div key={education.id} className='created-education'>
						<div className='created-education--body'>
							<h5>{education.university}</h5>
							<p>{education.faculty}</p>
							<p>{education.specialization}   <span>{education.eduStart}  -  {education.eduEnd}</span></p>
						</div>
						<div className='created-edubtn' onClick={() => dispatch(deleteEducation({ id: education.id }))}>
							<p>Delete</p>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default memo(CreateEducationSection)
