import { createApp } from 'vue'
import { twMerge } from 'tailwind-merge'
import './style.css'
import App from './App.vue'

createApp(App)
.mixin({
  methods: {
    mergeClass(baseClass, extraClass) {
      const extraClassList = extraClass.split(' ')
      let merged = twMerge(baseClass, extraClass)

      for (const item of extraClassList) {
        merged = merged.replace(item, '')
      }

      return merged
    },
  },
})
.mount('#app')
