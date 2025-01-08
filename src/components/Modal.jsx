import { useState } from 'react'
/* eslint-disable react/prop-types */
function ModalContainer({ isOpen, closeModal, item }) {
	if (!isOpen) return null

	return (
		<div className='modal-overlay' onClick={closeModal}>
			<div className='modal-content' onClick={e => e.stopPropagation()}>
				<h1>{item.name}</h1>
				<div className='desc'>
					<img src={item.img} alt='' />
					<p>{item.desc}</p>
				</div>
				<div className='list'>
					<h2>Ingredients:</h2>
					{item.ing.map(elem => (
						<p key={elem.title}>
							<span>{elem.title}</span>
							<span>{elem.weight}</span>
						</p>
					))}
				</div>
				<button onClick={closeModal} className='btn close-btn'>
					X
				</button>
			</div>
		</div>
	)
}

function Modal({ item }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	return (
		<div className='app'>
			<button onClick={openModal} className='btn'>
				more
			</button>
			<ModalContainer
				isOpen={isModalOpen}
				closeModal={closeModal}
				item={item}
			/>
		</div>
	)
}

export default Modal
