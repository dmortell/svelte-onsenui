import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {								// Must also add these paths to compilerOptions in jsconfig.json for VSCode
			$lib: resolve('./src/components'),
			// $js: resolve('./src/js'),			// resolve(__dirname, './src/js'),
		}
	},
  plugins: [svelte(), resolve()]
});
