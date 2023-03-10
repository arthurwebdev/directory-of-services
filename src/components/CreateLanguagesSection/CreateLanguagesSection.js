import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLanguage, selectUCProfile } from '../../store/slices/ucProfile/ucProfile'
import './CreateLanguagesSection.css'

function CreateLanguagesSection() {
	const { languages } = useSelector(selectUCProfile)
	const dispatch = useDispatch()
	return (
		<div className='create-languages--section'>
			{
				languages?.map(lang =>
					<div key={lang.id}>
						<div>
							<h5>{lang.language}</h5>
							<p>{lang.level}</p>
						</div>
						<span className='delLang' onClick={() => dispatch(deleteLanguage({id: lang.id}))}>X</span>
					</div>
				)
			}
		</div>
	)
}

export default memo(CreateLanguagesSection)
