import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
	integrations: [svelte()],
	vite: {
		resolve: {
			alias: {
				$shared: new URL('./src/shared', import.meta.url).pathname,
				$entities: new URL('./src/entities', import.meta.url).pathname,
				$features: new URL('./src/features', import.meta.url).pathname,
				$widgets: new URL('./src/widgets', import.meta.url).pathname
			}
		}
	}
});
