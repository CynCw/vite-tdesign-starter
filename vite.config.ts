import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', {
        from: 'vue-router',
        imports: ['RouteRecordRaw'],
        type: true,
      }, {
        from: 'vue-router',
        imports: ['createRouter', 'createWebHistory'],
      }],
      resolvers: [TDesignResolver({
        library: 'mobile-vue',
      })],
      eslintrc: {
        enabled: true, // <-- this
      },
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [TDesignResolver({
        library: 'mobile-vue',
      })],
    }),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
})
