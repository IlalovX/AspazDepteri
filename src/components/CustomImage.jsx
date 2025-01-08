/* eslint-disable react/prop-types */
function CustomImage({ imgSrc, pt }) {
	return (
		<div className='custom-image' style={{ paddingTop: pt }}>
			<img src={imgSrc} alt='photo' />
		</div>
	)
}

export default CustomImage
