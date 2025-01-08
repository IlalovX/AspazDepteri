import { useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../db/links'
import Sidebar from './Sidebar'
function Navbar() {
	const [showSidebar, setShowSidebar] = useState(false)

	function useOpenSidebar() {
		setShowSidebar(true)
	}
	function useCloseSidebar() {
		setShowSidebar(false)
	}
	return (
		<>
			<div className='navbar container'>
				<div className='logo-container'>
					<Link to='/' className='logo'>
						AD
					</Link>
					<p className='logo-name'>
						A<span>spaz</span>|D<span>epteri</span>
					</p>
				</div>

				<div className='nav-links'>
					{links.map(link => (
						<Link key={link.name} to={link.path}>
							{link.name}
						</Link>
					))}
				</div>
				<div
					className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn '}
					onClick={useOpenSidebar}
				>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
			</div>
			{showSidebar && <Sidebar close={useCloseSidebar} />}
		</>
	)
}

export default Navbar
