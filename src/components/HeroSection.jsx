import { images } from '../db/links'

function HeroSection() {
	return (
		<div className='section hero'>
			<div className='col  typography'>
				<h1 className='title'>Bizler hakimizda</h1>
				<p className='info'>
					<span>Aspaz Depteri</span> saytına xosh kelipsiz, dúnya boylap
					retseptlarni toplaw hám saqlaw platformasi. Bul jerde hár bir retsept
					- bul ótkerip jiberiletuǵın gúrriń.
				</p>
			</div>
			<div className='col gallery'>
				{images.map(image => (
					<div
						className='custom-image'
						style={{ paddingTop: '80%' }}
						key={image}
					>
						<img src={image} alt='photo' />
					</div>
				))}
			</div>
		</div>
	)
}

export default HeroSection
