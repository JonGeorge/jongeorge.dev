import {Mode, plugin as markdown} from 'vite-plugin-markdown';

import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        sveltekit(),
        markdown({
            mode: [Mode.HTML, Mode.TOC]
        })
    ]
});
