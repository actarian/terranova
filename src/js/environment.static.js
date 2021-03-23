
export const environmentStatic = {
	flags: {
		production: false,
	},
	logo: null,
	background: {
		image: '/terranova/img/background.jpg',
		video: '/terranova/img/background.mp4',
	},
	colors: {
		menuBackground: '#000000',
		menuForeground: '#ffffff',
		menuOverBackground: '#0099ff',
		menuOverForeground: '#ffffff',
		menuBackBackground: '#0099ff',
		menuBackForeground: '#000000',
		menuBackOverBackground: '#0099ff',
		menuBackOverForeground: '#ffffff',
	},
	assets: '/terranova/',
	worker: './js/workers/image.service.worker.js',
	githubDocs: 'https://raw.githubusercontent.com/actarian/terranova/main/docs/',
	url: {
		index: '/',
	},
	languages: ['en'],
	defaultLanguage: 'en',
};
