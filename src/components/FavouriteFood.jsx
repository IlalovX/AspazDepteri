import { food } from '../db/links'
import Modal from './Modal'

function FavouriteFood() {
	return (
		<div className='favourite-food'>
			<h1>Favourite Food</h1>
			{food.map(item => {
				return (
					<div className='card' key={item.name}>
						<div className='img-container'>
							<img src={item.img} alt='' />
						</div>
						<div className='card-desc'>
							<h2>{item.name}</h2>
							<p className='desc'>{item.desc}</p>
							<Modal item={item} />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default FavouriteFood
