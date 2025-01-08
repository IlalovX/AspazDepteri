import { faCog, faHome, faList } from '@fortawesome/free-solid-svg-icons'

export const links = [
	{
		name: 'Home',
		path: '/',
		icon: faHome,
	},
	{
		name: 'Recipes',
		path: '/recipes',
		icon: faList,
	},
	{
		name: 'Settings',
		path: '/settings',
		icon: faCog,
	},
]
export const images = [
	'../../public/assets/img/gallery/img_1.jpg',
	'../../public/assets/img/gallery/img_2.jpg',
	'../../public/assets/img/gallery/img_3.jpg',
	'../../public/assets/img/gallery/img_4.jpg',
	'../../public/assets/img/gallery/img_5.jpg',
	'../../public/assets/img/gallery/img_6.jpg',
	'../../public/assets/img/gallery/img_7.jpg',
	'../../public/assets/img/gallery/img_8.jpg',
	'../../public/assets/img/gallery/img_9.jpg',
]

export const food = [
	{
		img: '../assets/img/gallery/img_1.jpg',
		name: 'sushi',
		desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas at mollitia assumenda odit nobis eveniet, molestias tempore non, qui nostrum facere atque fugit ut! Minus enim laboriosam eos necessitatibus ipsum.',
		ing: [
			{
				title: 'sugar',
				weight: '300gt',
			},
			{
				title: 'sold',
				weight: '300gt',
			},
		],
	},
	{
		img: '../assets/img/gallery/img_1.jpg',
		name: 'pizza',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.',
		ing: [
			{
				title: 'flour',
				weight: '200gt',
			},
			{
				title: 'cheese',
				weight: '150gt',
			},
			{
				title: 'tomato',
				weight: '100gt',
			},
		],
	},
	{
		img: '../assets/img/gallery/img_2.jpg',
		name: 'burger',
		desc: 'Cras id dui. Integer vehicula sollicitudin eros. Sed velit nulla, mollis et volutpat at, suscipit et massa. Etiam egestas wisi ac ipsum. Suspendisse sapien odio, dictum sed, congue at, commodo sit amet, augue.',
		ing: [
			{
				title: 'beef patty',
				weight: '150gt',
			},
			{
				title: 'bun',
				weight: '100gt',
			},
			{
				title: 'lettuce',
				weight: '50gt',
			},
		],
	},
	{
		img: '../assets/img/gallery/img_3.jpg',
		name: 'pasta',
		desc: 'Phasellus tempus nunc orci, nec tempus erat tincidunt et. Morbi cursus ante id justo placerat, euismod aliquet arcu convallis. Nam ut dui at purus elementum hendrerit.',
		ing: [
			{
				title: 'pasta',
				weight: '200gt',
			},
			{
				title: 'olive oil',
				weight: '30ml',
			},
			{
				title: 'garlic',
				weight: '10gt',
			},
		],
	},
	{
		img: '../assets/img/gallery/img_1.jpg',
		name: 'salad',
		desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
		ing: [
			{
				title: 'lettuce',
				weight: '100gt',
			},
			{
				title: 'tomatoes',
				weight: '80gt',
			},
			{
				title: 'cucumber',
				weight: '50gt',
			},
			{
				title: 'olive oil',
				weight: '20ml',
			},
		],
	},
]
