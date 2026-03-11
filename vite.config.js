import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import browserslist from 'browserslist'
import { browserslistToTargets, Features } from 'lightningcss'
import { defineConfig } from 'vite'
// import checker from 'vite-plugin-checker'
import htmlMinifier from 'vite-plugin-html-minifier'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	root: './src',
	base: 'https://pumoreiichi.pages.dev',
	publicDir: '../public',
	plugins: [
		// checker({
		// 	biome: {},
		// 	stylelint: {
		// 		lintCommand: 'stylelint "**/*.css"',
		// 		watchPath: '/src'
		// 	},
		// }),
		htmlMinifier({
			minify: {
				removeComments: true,
				minifyCSS: true,
				minifyJS: true,
				collapseWhitespace: true,
			},
		}),
	],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
			errorRecovery: true,
			exclude: Features.LabColors | Features.OklabColors,
		},
	},
	// optimizeDeps: {
	// 	entries: 'src/**/*.{html,js,css,png,jpg}',
	// },
	build: {
		cssMinify: 'lightningcss',
		minify: 'terser',
		outDir: '../dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'src/index.html'),
				about: resolve(__dirname, 'src/pages/about.html'),
				microblog: resolve(__dirname, 'src/pages/microblog.html'),
				projects: resolve(__dirname, 'src/pages/projects.html'),
				links: resolve(__dirname, 'src/pages/links.html'),
				code: resolve(__dirname, 'src/pages/code.html'),
				gallery: resolve(__dirname, 'src/pages/gallery.html'),
			},
		},
	},
})
