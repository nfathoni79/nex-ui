<template>
  <a href="#"
    :class="mergeClass(fullClass, $attrs.class || '')">
    <slot></slot>
  </a>
</template>

<script>
import cntl from 'cntl'

export default {
  props: {
    color: String,
  },
  data() {
    return {
      baseClass: cntl`
        inline-flex items-center justify-center
        rounded-md border border-transparent shadow
        px-5 py-3
        text-base font-medium
      `,
    }
  },
  computed: {
    colorClass() {
      switch(this.color) {
        case 'primary':
          return cntl`bg-blue-600 hover:bg-blue-700 text-white`
        case 'secondary':
          return cntl`bg-white hover:bg-blue-50 text-blue-600`
        default:
          return cntl`bg-blue-600 hover:bg-blue-700 text-white`
      }
    },
    fullClass() {
      return `${this.baseClass} ${this.colorClass}`
    }
  }
}
</script>
