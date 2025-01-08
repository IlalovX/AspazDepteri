import CustomImage from './CustomImage'

function HeroSection() {
	const images = [
		'/assets/img/gallery/img_1.jpg',
		'/assets/img/gallery/img_2.jpg',
		'/assets/img/gallery/img_3.jpg',
		'/assets/img/gallery/img_4.jpg',
		'/assets/img/gallery/img_5.jpg',
		'/assets/img/gallery/img_6.jpg',
		'/assets/img/gallery/img_7.jpg',
		'/assets/img/gallery/img_8.jpg',
		'/assets/img/gallery/img_9.jpg',
	]
	return (
		<div className='section hero'>
			<div className='col'>
				<h1 className='title'>Bizler hakimizda</h1>
				<p className='info'>
					<span>Aspaz Depteri</span> saytına xosh kelipsiz, dúnya boylap
					retseptlarni toplaw hám saqlaw platformasi. Bul jerde hár bir retsept
					- bul ótkerip jiberiletuǵın gúrriń.
				</p>
			</div>
			<div className='col gallery'>
				{images.map(image => (
					<CustomImage key={image} imgSrc={image} pt={'85%'} />
				))}
			</div>
		</div>
	)
}

export default HeroSection
