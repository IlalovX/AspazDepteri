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
	'../assets/img/gallery/img_1.jpg',
	'../assets/img/gallery/img_2.jpg',
	'../assets/img/gallery/img_3.jpg',
	'../assets/img/gallery/img_4.jpg',
	'../assets/img/gallery/img_5.jpg',
	'../assets/img/gallery/img_6.jpg',
	'../assets/img/gallery/img_7.jpg',
	'../assets/img/gallery/img_8.jpg',
	'../assets/img/gallery/img_9.jpg',
]

export const food = [
	{
		img: '../food/Плов.jfif',
		desc: 'Plov - Ózbekstandaǵı eń ataqlı hám ardaqlı tamaqlardan biri. Bul gósh (ádetde qoy yamasa siyir góshi), palız eginleri, piyaz, tatımlıqlar hám sarımsaq menen tayarlanǵan gúrish Plov kóbinese bayramlar hám bayramlarda xızmet etedi.',
		name: 'Plov',
		ing: [
			{
				title: 'Gurish',
				weight: '500g',
			},
			{
				title: 'Gosh',
				weight: '400g',
			},
			{
				title: 'Geshir',
				weight: '400g',
			},
			{
				title: 'Piyaz',
				weight: '2 sht',
			},
			{
				title: 'Ósimlik mayı',
				weight: '100ml',
			},
		],
	},
	{
		img: '../food/Шашлык.jfif',
		desc: 'Shashliq - bul gósh bólekleri, ádetde qoy yamasa siyir góshi, tatımlıqlar menen marinadlangan hám kómirde qovurilganOl pishiriqlar, palız eginleriler hám souslar menen birge beriledi.',
		name: 'Shashliq',
		ing: [
			{
				title: 'Gosh',
				weight: '1kg',
			},
			{
				title: 'Piyaz',
				weight: '4sht',
			},
			{
				title: 'Ósimlik mayı',
				weight: '3 stakan',
			},
			{
				title: 'Uksus',
				weight: '1 stakan',
			},
		],
	},
	{
		img: '../food/Самса.jfif',
		desc: 'Samsa - bul kóbinese gósh (qoy yamasa siyir góshi), piyaz hám tatımlıqlar menen hár qıylı toldırılǵan tartlar Samsa oshaqta tayarlanadı hám ol awqatlanıw ushın júdá ataqlı.',
		name: 'Samsa',
		ing: [
			{
				title: 'Qatlamlı qamır',
				weight: '500g',
			},
			{
				title: 'Gosh',
				weight: '300g',
			},
			{
				title: 'Piyaz',
				weight: '3 sht',
			},
			{
				title: 'Mayek',
				weight: '1 sht',
			},
		],
	},
	{
		img: '../food/Шакароб.jfif',
		desc: 'Shakarob - bul Ózbekstanda keń tarqalǵan dástúriy salat.Ol pomidor, qıyar, piyaz, palız eginlerilerden ibarat bolıp, kóp muǵdarda palız eginleri mayı hám limon sherbeti menen toldırılǵan.Bul jeńil hám shıpabaxsh salat.',
		name: 'Shakarob',
		ing: [
			{
				title: 'Pomidor',
				weight: '3 sht',
			},
			{
				title: 'Qiyar',
				weight: '2 sht',
			},
			{
				title: 'Kok Piyaz',
				weight: '1 sht',
			},
			{
				title: 'Ósimlik mayı',
				weight: '2 stakan',
			},
			{
				title: 'Limon soki',
				weight: '1 stakan',
			},
		],
	},
	{
		img: '../food/513198.webp',
		desc: "Mastava - bul gósh, gúrish, kartoshka, pomidor, piyaz hám palız eginlerilerden tayarlanǵan dástúriy ózbek sıpa Bul kebirva mazalı ta'mga iye hám kóbinese lavash menen taǵamlanadı.",
		name: 'Mastava',
		ing: [
			{
				title: 'Gosh',
				weight: '300g',
			},
			{
				title: 'Gurish',
				weight: '100g',
			},
			{
				title: 'Kartoshka',
				weight: '2sht',
			},
			{
				title: 'Geshir',
				weight: '1sht',
			},
			{
				title: 'Piyaz',
				weight: '1sht',
			},
			{
				title: 'Pomidor',
				weight: '2sht',
			},
			{
				title: 'Sarımsaq basi',
				weight: '2sht',
			},
			{
				title: 'Ósimlik mayı',
				weight: '2 stakan',
			},
		],
	},
]
