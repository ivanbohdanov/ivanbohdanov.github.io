import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    publicDir: 'public',
    root: './',
    build: {
        outDir: 'dist',
    },
    plugins: [
        eslint({
            cache: false,
            fix: true,
        }),
        Icons({ compiler: 'raw' }),
    ],
})
