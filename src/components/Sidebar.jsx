import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../db/links'
function Sidebar({close}) {
	return (
		<div className='sidebar' onClick={close}>
			{links.map(link => (
				<a className='sidebar-link ' key={link.name} href={link.path}>
					<FontAwesomeIcon icon={link.icon} />
					{link.name}
				</a>
			))}
		</div>
	)
}

export default Sidebar
