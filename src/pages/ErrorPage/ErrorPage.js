import React from 'react'
import {SiGhostery} from 'react-icons/si'
import './ErrorPage.css'

function ErrorPage() {
	return (
		<div className='error-page'>
			<h1>4<span><SiGhostery /></span>4</h1>
			<h2>Error: 404 page not found</h2>
			<p>Sorry, the page you're looking for cannot be accessed</p>
		</div>
	)
}

export default ErrorPage
