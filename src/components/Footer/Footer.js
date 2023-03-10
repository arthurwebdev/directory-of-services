import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
	return (
		<footer className="footer-distributed">
			<div className="footer-right">
				<Link to=''><FaFacebook /></Link>
				<Link to=''><FaInstagram /></Link>
				<Link to=''><FaLinkedin /></Link>
				<Link to=''><FaTwitter /></Link>
			</div>
			<div className="footer-left">
				<p className="footer-links">
					<Link className="link-1" to='/'>Home</Link>
					<Link to=''>About</Link>
					<Link to=''>Faq</Link>
					<Link to=''>Contact</Link>
				</p>
				<p>IWillWork &copy; 2023</p>
			</div>
		</footer>
	)
}

export default Footer
