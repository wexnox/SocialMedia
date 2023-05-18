// import {resolve} from 'path'
import path, {resolve} from 'path'
import eslint from 'vite-plugin-eslint';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        { // default settings on build (i.e. fail on error)
            ...eslint(),
            apply: 'build',
        },
        { // do not fail on serve (i.e. local development)
            ...eslint({
                failOnWarning: false,
                failOnError: false,
            }),
            apply: 'serve',
            enforce: 'post'
        },
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                feed: resolve(__dirname, 'pages/feed/index.html'),
                profile: resolve(__dirname, 'pages/profile/index.html'),
                login: resolve(__dirname, 'pages/profile/login/index.html'),
                register: resolve(__dirname, 'pages/profile/register/index.html'),
            },

        },
    },
    server: {
        hot: true
    },
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },

})
