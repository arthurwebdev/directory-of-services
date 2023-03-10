import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewExperience } from '../../store/slices/ucProfile/ucProfile'
import CreateExperinceSection from '../CreateExperinceSection/CreateExperinceSection'
import './CreateExperience.css'

function CreateExperience() {
	const dispatch = useDispatch()
	const [company, setCompany] = useState('')
	const [headline, setHeadline] = useState('')
	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')
	const [completed, setCompleted] = useState(false)

	const addExperience = (e) => {
		e.preventDefault()
		if (company.length && headline.length && from.length && (to.length || completed)) {
			dispatch(addNewExperience({ company, headline, from, to: completed ? 'sitll working' : to }))
			setCompany('')
			setHeadline('')
			setFrom('')
			setTo('')
			setCompleted(false)
		}
	}

	return (
		<div className='experience'>
			<h3>Add your experience</h3>
			<div className='add-experience'>
				<div className='section'>
					<div className='Experience--input'>
						<label className='CreateProfile--label' >Company Name</label>
						<input value={company} onChange={({ target }) => setCompany(target.value)} type='text' />
					</div>
					<div className='Experience--input'>
						<label className='CreateProfile--label' >Headline</label>
						<input value={headline} onChange={({ target }) => setHeadline(target.value)} type='text' />
					</div>
				</div>
				<div className='section'>
					<div className='Experience--input'>
						<label className='CreateProfile--label' >From</label>
						<input value={from} onChange={({ target }) => setFrom(target.value)} type='date' />
					</div>
					<div className='Experience--input'>
						<label className='CreateProfile--label' >To</label>
						<input value={to} onChange={({ target }) => setTo(target.value)} type='date' />
						<p><input checked={completed} onChange={() => setCompleted(!completed)} className='checkbox' type="checkbox" /> Still working</p>
					</div>
				</div>
				<button onClick={addExperience} className='acc-btn' >Add</button>
			</div>
			<div className='experience--body'>
				<h3>Experience</h3>	
					<CreateExperinceSection />
			</div>
		</div>
	)
}

export default memo(CreateExperience)
