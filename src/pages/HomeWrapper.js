import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function HomeWrapper() {
	const location = useLocation()

	let {pathname} = location
	return (
		<>
			<Header />
			<div style={{flex: '1'}}>
				<Outlet />
			</div>
			{
				pathname === '/messenger' ? null : <Footer />
			}
			<ScrollToTop color='#0182f4' smooth />
		</>
	)
}

export default HomeWrapper
