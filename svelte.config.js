import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		floc: process.env.NODE_ENV === "development",
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
