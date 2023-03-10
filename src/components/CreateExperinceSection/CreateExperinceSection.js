import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExp, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import './CreateExperinceSection.css'

function CreateExperinceSection() {
	const { experience } = useSelector(selectUCProfile)
	const dispatch = useDispatch()

	return (
		<div className='experience--sections'>
			{
				experience?.map(exp =>
					<div key={exp.id} className='CreateExperience' >
						<div>
							<h5>{exp.headline}</h5>
							<p>{exp.company}<span>{exp.from}  -  {exp.to}</span></p>
						</div>
						<div className='experience-button'>
							<button onClick={() => dispatch(deleteExp({ id: exp.id }))}><p>Delete</p></button>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default memo(CreateExperinceSection)
