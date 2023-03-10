import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewSkills, deleteSkill, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import './CreateSkills.css'

function CreateSkills() {
	const {skills} = useSelector(selectUCProfile)
	const [skill, setSkill] = useState('')
	const dispatch = useDispatch()

	const addSkill = () => {
		if (skill.length) {
			dispatch(addNewSkills({ skill }))
		}
	}

	const deleteSkills = (id) => {
		dispatch(deleteSkill({ id }))
	}

	return (
		<div className='skills'>
			<h3>Add Skills</h3>
			<div className='add-skills'>
				<div className='Skills--input'>
					<label className='CreateProfile--label' >Skill</label>
					<input value={skill} onChange={({ target }) => setSkill(target.value)} type='text' />
				</div>
				<div className='Skillbtn' onClick={() => (addSkill(), setSkill(''))}>Add</div>
			</div>
			<div className='skills--body'>
				<h3>Skills</h3>
				<div className='skills--section'>
					{
						skills?.map(el =>
							<div key={el.id}>
								{el.skill}
								<span onClick={() => deleteSkills(el.id)}>x</span>
							</div>)
					}
				</div>
			</div>
		</div>
	)
}

export default memo(CreateSkills)
