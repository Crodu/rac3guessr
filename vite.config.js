import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default {
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [react(), vike({ prerender: true })],
  // base: "/rac3guessr/"
}
