// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_variables.scss" as *; 
            @use "~/assets/scss/_fonts.scss" as *;
            // @use "~/assets/scss/_mixins.scss" as *;
            @use "~/assets/scss/_typography.scss" as *;
          `,
        }
      }
    }
  },
  modules: [
    'nuxt-icons',
  ],
  components: [
    '~/components',
    {
      path: '~/components/ui',
      extensions: ['vue'],
      pathPrefix: false
    }
  ]
})
