import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
build:{
    rollupOptions:{
        input:{
            main: resolve(__dirname,'index.html'),
            about: resolve(__dirname,'pages/about.html'),
            contact: resolve(__dirname,'pages/contact.html'),
            challenge: resolve(__dirname,'pages/challenge.html'),
            maqueta: resolve(__dirname,'pages/maqueta.html'),
            portfolio: resolve(__dirname,'pages/portfolio.html')
        }
    }
}
})