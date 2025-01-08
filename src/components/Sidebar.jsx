import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { links } from '../db/links'
// eslint-disable-next-line react/prop-types
function Sidebar({ close }) {
	return (
		<div className='sidebar' onClick={close}>
			{links.map(link => (
				<Link className='sidebar-link ' key={link.name} to={link.path}>
					<FontAwesomeIcon icon={link.icon} />
					{link.name}
				</Link>
			))}
		</div>
	)
}

export default Sidebar
