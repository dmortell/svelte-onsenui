import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {								// alias $svelte-onsenui to the component directory
			'$svelte-onsenui': resolve('../src/components'),
		}
	},
  plugins: [svelte()]
});
