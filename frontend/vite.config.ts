import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

const root= resolve(__dirname,'src')
const outDir = resolve(__dirname,'dist')
// https://vite.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        BookLibrary: resolve(root,'BookLibrary','index.html'),
        SignIn: resolve(root,'Signin','index.html'),
        SignUp: resolve(root,'SignUp','index.html'),
        UserProfile: resolve(root,'UserProfile','index.html'),
        ClassicsPage: resolve(root,'ClassicsPage','index.html'),
        BookProfile: resolve(root,'BookProfile','index.html'),
        PdfReader: resolve(root,'ReadeBook','index.html'),
        ShoppingCart: resolve(root,'Cart','index.html'),
        BookClub: resolve(root,'BookClub','index.html'),
        AudioBook: resolve(root,'AudioBook','index.html'),
        SurveyPage: resolve(root,'Survey','index.html'),
        TradingSystem: resolve(root,'TradingSystem','index.html'),
        BookForm: resolve(root,'LibraryOwner','index.html'),

      }
    }
  }
})
