import {
	faInstagram,
	faTelegram,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
	return (
		<div className='footer container'>
			<div className='footer-section'>
				<p className='title'>AspazDepteri.com</p>
				<p>
					Aspaz Depteri - bul hár túrlı tamaqlardıń mazalı retseptlari menen
					kewilińiz hám qorningizni quvontiradigan jay hám biziń xızmetimiz
					ulıwma biypul.
				</p>
				<p>&copy; 2025 | Barlıq huqıqlar qorǵalan </p>
			</div>
			<div className='footer-section'>
				<p className='title'>Biz menen baylanıs</p>
				<p>aspazdepteri@gmail.com</p>
				<p>+98-123-45-67</p>
				<p>24 koshe Qaraqalpaqstan</p>
			</div>
			<div className='footer-section'>
				<p className='title'>Social tarmaqlarimiz</p>

				<p>
					<FontAwesomeIcon icon={faTelegram} /> Telegram
				</p>

				<p>
					<FontAwesomeIcon icon={faYoutube} /> Youtube
				</p>

				<p>
					<FontAwesomeIcon icon={faInstagram} /> Instagram
				</p>
			</div>
		</div>
	)
}

export default Footer
