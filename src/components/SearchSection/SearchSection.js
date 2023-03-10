import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilter } from '../../store/slices/search/searchSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './SearchSection.css'

function SearchSection() {
	const {usersData} = useSelector(selectUsers)
	const formRef = useRef(null)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const category = formRef.current[0].value
		const input = formRef.current[1].value
		dispatch(searchFilter({category,input}))
		formRef.current.reset()
	}

	return (
		<div className='search--section'>
			<form ref={formRef} onSubmit={handleSubmit}>
					<select>
						<option value=''>All Category</option>
						<option value="1">Software development</option>
						<option value="2">Quality Assurance /Control</option>
						<option value="3">UI/UX/Graphic Design</option>
						<option value="4">Product/Project Management</option>
						<option value="5">Hardware design</option>
						<option value="6">Other IT</option>
						<option value="7">Sales/service management</option>
						<option value="8">Administrative/office-work</option>
						<option value="9">Tourism/Hospitality/HoReCa</option>
						<option value="10">Marketing/Advertising</option>
						<option value="11">Communications/Journalism/PR</option>
						<option value="12">Accounting/Bookkeeping/Cash register</option>
						<option value="13">Finance Management</option>
						<option value="14">Banking/credit</option>
						<option value="15">TV/Radio</option>
						<option value="16">Education/training</option>
						<option value="17">Legal</option>
						<option value="18">Audit/Compliance</option>
						<option value="19">Healthcare/Pharmaceutical</option>
						<option value="20">Construction</option>
						<option value="21">Human Resources</option>
						<option value="22">Sports/Beauty</option>
						<option value="23">Procurement/Logistics/Courier</option>
						<option value="24">Production</option>
						<option value="25">Business/Management</option>
						<option value="26">Art/Design/Architecture</option>
						<option value="27">General/professional/Other services</option>
						<option value="28">IT security/Networks</option>
						<option value="29">NGO/Nonprofit</option>
						<option value="31">Insurance</option>
						<option value="33">Entertainment</option>
						<option value="34">Data Science/Data Engineering</option>
						<option value="35">Foreign language</option>
						<option value="36">Economics</option>
						<option value="37">Hardware Design / Engineering</option>
						<option value="38">Data Research/Analysis</option>
						<option value="39">Business Software Consultancy</option>
						<option value="40">Mechanical/Engineering</option>
						<option value="41">System Admin/Engineer</option>
						<option value="42">Retail business</option>
						<option value="43">Network Administration</option>
						<option value="44">Consultancy</option>
						<option value="45">State/ Public/ Civil service</option>
						<option value="46">Science</option>
						<option value="47">Content writing</option>
						<option value="48">Security</option>
						<option value="49">Aviation</option>
						<option value="50">DevOps/Infrastructure </option>
						<option value="51">IT Support/Technician</option>
						<option value="59">Motion Graphic Design</option>
					</select>
				<input type="text" />
				<button className='acc-btn'>Search</button>
			</form>
		</div>
	)
}

export default SearchSection
