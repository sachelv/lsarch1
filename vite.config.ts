import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        projects: 'projects.html',
        contact: 'contact.html',
        randglounge: 'randglounge.html'
      }
    }
  }
})