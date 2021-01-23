import { NuxtConfig } from '@nuxt/types';

const nuxtConfig: NuxtConfig = {
  ssr: false,
  srcDir: 'src',
  head: {
    title: process.env.npm_package_name ?? '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description ?? '' }
    ]
  },
  plugins: [
    '~/plugins/axios'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  router: {
    middleware: ['authenticated']
  }
};

export default nuxtConfig;
