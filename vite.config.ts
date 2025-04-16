import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        projects: 'projects.html',
        contact: 'contact.html',
        randglounge: 'randglounge.html',
        thelabstudio: 'thelabstudio.html',
        Ibrowsplus: 'Ibrowsplus.html',
        barber2024: 'barber2024.html',
        izumisteakhouse: 'izumisteakhouse.html',
        hibachirestaurant: 'hibachirestaurant.html',
        terrarossa: 'terrarossa.html',
      }
    }
  }
})