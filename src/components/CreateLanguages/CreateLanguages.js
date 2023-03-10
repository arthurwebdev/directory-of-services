import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLanguage, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import CreateLanguagesSection from '../CreateLanguagesSection/CreateLanguagesSection'
import './CreateLanguages.css'

function CreateLanguages() {
	const [language, setLanguage] = useState('')
	const [level, setlevel] = useState('')
	const { languages } = useSelector(selectUCProfile)
	const dispatch = useDispatch()

	const addLang = () => {
		if(level.length && language.length){
			dispatch(addLanguage({level,language}))
			setLanguage('')
			setlevel('')
		}
	}

	return (
		<div className='create-languages'>
			<h3>Add Language</h3>
			<div className='add-languages'>
				<div className='language--input'>
					<label className='CreateProfile--label' >Language</label>
					<input value={language} onChange={({ target }) => setLanguage(target.value)} type='text' />
				</div>
				<div className='language--input'>
					<label className='CreateProfile--label' >Level</label>
					<input value={level} onChange={({ target }) => setlevel(target.value)} type='text' />
				</div>
				<div className='languagebtn' onClick={addLang}>Add</div>
			</div>
			<div className='create-languages--body'>
				<h3>Languages</h3>
				<CreateLanguagesSection />
			</div>
		</div>
	)
}

export default memo(CreateLanguages)
