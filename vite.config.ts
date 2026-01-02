import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        projects: 'projects.html',
        contact: 'contact.html',
        // Project pages (organized into subfolders under /projects)
        rh_mollytea: 'projects/restaurant-hospitality/mollytea.html',
        rh_pizzarock: 'projects/restaurant-hospitality/pizzarock.html',
        rh_randglounge: 'projects/restaurant-hospitality/randglounge.html',
        rh_izumisteakhouse: 'projects/restaurant-hospitality/izumisteakhouse.html',
        rh_chinamama: 'projects/restaurant-hospitality/chinamama.html',
        rh_hotelroomremodel: 'projects/restaurant-hospitality/hotelroomremodel.html',
        rh_breakfastjunkies: 'projects/restaurant-hospitality/breakfastjunkies.html',
        rh_terrarossa: 'projects/restaurant-hospitality/terrarossa.html',
        rh_hibachirestaurant: 'projects/restaurant-hospitality/hibachirestaurant.html',

        sr_thelabstudio: 'projects/studios-retail/thelabstudio.html',
        sr_lawlowfades: 'projects/studios-retail/lawlowfades.html',
        sr_liquorworld: 'projects/studios-retail/liquorworld.html',
        sr_tesolife: 'projects/studios-retail/tesolife.html',
        sr_Ibrowsplus: 'projects/studios-retail/Ibrowsplus.html',

        cc_templeatbuffalo: 'projects/community-centers/templeatbuffalo.html',
        cc_seniorrecreationcenter: 'projects/community-centers/seniorrecreationcenter.html',

        ch_whitevilla: 'projects/custom-homes/whitevilla.html',
      }
    }
  }
})