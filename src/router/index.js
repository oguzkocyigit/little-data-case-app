import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/General/Home.vue'
import TattooArtists from '../views/General/TattooArtists.vue'
import Arborist from '../views/General/Arborist.vue'
import PersonalSupportWorker from '../views/General/PersonalSupportWorker.vue'
import HomeAfrica from '../views/Africa/HomeAfrica.vue'
import PersonalSupportWorkerAfrica from '../views/Africa/PersonalSupportWorkerAfrica.vue'
import ArboristAfrica from '../views/Africa/ArboristAfrica.vue'
import TattooArtistsAfrica from '../views/Africa/TattooArtistsAfrica.vue'
import HomeTurkey from '../views/Turkey/HomeTurkey.vue'
import TattooArtistsTurkey from '../views/Turkey/TattooArtistsTurkey.vue'
import ArboristTurkey from '../views/Turkey/ArboristTurkey.vue'
import PersonalSupportWorkerTurkey from '../views/Turkey/PersonalSupportWorkerTurkey.vue'
import HomeRussia from '../views/Russia/HomeRussia.vue'
import TattooArtistsRussia from '../views/Russia/TattooArtistsRussia.vue'
import ArboristRussia from '../views/Russia/ArboristRussia.vue'
import PersonalSupportWorkerRussia from '../views/Russia/PersonalSupportWorkerRussia.vue'
import { i18n } from '@/plugins/vue-i18n'
import VueGtag from 'vue-gtag'

Vue.use(VueRouter)

const supportedLanguages = ['en', 'tr', 'ru']

const routes = [
  {
    path: '/:lang',
    name: 'welcome',
    props: true,
    component: Home,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/tattoo-artist',
    name: 'tattoo-artist',
    props: true,
    component: TattooArtists,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/arborist',
    name: 'arborist',
    props: true,
    component: Arborist,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/personal-support-worker',
    name: 'personal-support-worker',
    props: true,
    component: PersonalSupportWorker,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/africa/',
    name: 'home.africa',
    props: true,
    component: HomeAfrica,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/africa/personal-support-worker',
    name: 'personal-support-worker-africa',
    props: true,
    component: PersonalSupportWorkerAfrica,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/africa/tattoo-artist',
    name: 'tattoo-artist-africa',
    props: true,
    component: TattooArtistsAfrica,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/africa/arborist',
    name: 'arborist-africa',
    props: true,
    component: ArboristAfrica,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/turkey/',
    name: 'home.turkey',
    props: true,
    component: HomeTurkey,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/turkey/personal-support-worker',
    name: 'personal-support-worker-turkey',
    props: true,
    component: PersonalSupportWorkerTurkey,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/turkey/tattoo-artist',
    name: 'tattoo-artist-turkey',
    props: true,
    component: TattooArtistsTurkey,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/turkey/arborist',
    name: 'arborist-turkey',
    props: true,
    component: ArboristTurkey,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/russia/',
    name: 'home.russia',
    props: true,
    component: HomeRussia,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/russia/personal-support-worker',
    name: 'personal-support-worker-russia',
    props: true,
    component: PersonalSupportWorkerRussia,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/russia/tattoo-artist',
    name: 'tattoo-artist-russia',
    props: true,
    component: TattooArtistsRussia,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '/:lang/russia/arborist',
    name: 'arborist-russia',
    props: true,
    component: ArboristRussia,
    beforeEnter (to, from, next) {
      const lang = to.params.lang
      if (!supportedLanguages.includes(lang)) return next('en')
      if (i18n.locale !== lang) {
        i18n.locale = lang
      }
      return next()
    },
  },
  {
    path: '*',
    redirect: '/en',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS_ID,
  },
}, router)

export default router
