module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/sass/base.sass";`
			}
		}
	},
	configureWebpack: {
    devServer: {
			proxy: {
				'/api/*': {
					target: 'http://localhost:3000'
				}
			}
    }
	}
}