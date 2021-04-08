import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

export class RouterService {

	static use$(data) {
		const routes = this.collectRoutes(data); /*
			{ name: 'home', path: '/' },
			{ name: 'profile', path: '/profile' }
		];*/
		const router = createRouter(routes, {
			allowNotFound: false,
			autoCleanUp: true,
			defaultRoute: 'welcome',
			defaultParams: {},
			queryParams: {
				arrayFormat: 'default',
				nullFormat: 'default',
				booleanFormat: 'default'
			},
			queryParamsMode: 'default',
			trailingSlashMode: 'default',
			strictTrailingSlash: false,
			caseSensitive: false,
			urlParamsEncoding: 'default'
		});
		router.usePlugin(browserPlugin({
			useHash: true,
		}));
		router.start();
		// console.log(router);
		this.router = router;
		// router.navigate('chi-siamo');
		return router;
	}

	static collectRoutes(data, routes = []) {
		data.forEach(item => {
			const route = { name: item.path, path: '/' + item.path };
			if (item.items) {
				routes = this.collectRoutes(item.items, routes);
			}
			/*
			if (item.items) {
				route.children = this.collectRoutes(item.items, []);
			}
			*/
			routes.push(route);
		});
		return routes;
	}

}
