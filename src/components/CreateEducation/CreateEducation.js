import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEducation } from '../../store/slices/ucProfile/ucProfile'
import CreateEducationSection from '../CreateEducationSection/CreateEducationSection'
import './CreateEducation.css'

function CreateEducation() {
	const [university, setUniversity] = useState('')
	const [faculty, setFaculty] = useState('')
	const [specialization, setSpecialiazation] = useState('')
	const [eduStart, setEduStart] = useState('')
	const [eduEnd, setEduEnd] = useState('')
	const dispatch = useDispatch()

	const addEdu = () => {
		if (university.length && faculty.length && specialization.length && eduStart.length && eduEnd.length) {
			dispatch(addEducation({ university, faculty, specialization, eduEnd, eduStart }))
			setEduEnd('')
			setEduStart('')
			setFaculty('')
			setSpecialiazation('')
			setUniversity('')
		}
	}

	return (
		<div className='Create-education'>
			<h3>Add Education</h3>
			<div className='Add--education'>
				<div className='section'>
					<div className='Education--input'>
						<label className='CreateProfile--label' >University</label>
						<input value={university} onChange={({ target }) => setUniversity(target.value)} type='text' />
					</div>
					<div className='Education--input'>
						<label className='CreateProfile--label' >Faculty</label>
						<input value={faculty} onChange={({ target }) => setFaculty(target.value)} type='text' />
					</div>
				</div>
				<div className='section'>
					<div className='Education--input'>
						<label className='CreateProfile--label' >Specialization</label>
						<input value={specialization} onChange={({ target }) => setSpecialiazation(target.value)} type='text' />
					</div>
					<div className='Experience--input last-input'>
						<div>
							<label className='CreateProfile--label' >Start</label>
							<input value={eduStart} onChange={({ target }) => setEduStart(target.value)} type='number' min="1970" />
						</div>
						<div>
							<label className='CreateProfile--label' >End</label>
							<input value={eduEnd} onChange={({ target }) => setEduEnd(target.value)} type='number' min="1972" />
						</div>
					</div>
				</div>
				<div onClick={addEdu} className='acc-btn edu-btn'>Add</div>
			</div>
			<div className='create-education--body'>
				<h3>Education</h3>
				<CreateEducationSection />
			</div>
		</div>
	)
}

export default memo(CreateEducation)
