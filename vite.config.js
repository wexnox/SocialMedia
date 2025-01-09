import * as path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {defineConfig} from "vite";
export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/scss/bootstrap";`
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'auth/login.html'),
        createPost: path.resolve(__dirname, 'pages/posts/create.html'),
        editPost: path.resolve(__dirname, 'pages/posts/edit.html'),
        listMyPosts: path.resolve(__dirname, 'pages/posts/index.html'),
        postDetails: path.resolve(__dirname, 'pages/posts/postDetails.html'),

      },
    },
  },

})