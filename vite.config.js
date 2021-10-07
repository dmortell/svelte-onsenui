import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {								// Must also add these paths to compilerOptions in jsconfig.json for VSCode
			$lib: resolve('./src/components'),
			'$svelte-onsenui': resolve('./src/components'),
		}
	},
  plugins: [svelte()]
});
