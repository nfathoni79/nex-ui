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
        flex items-center justify-center
        rounded-md border border-transparent shadow
        px-8 md:px-10 py-3 md:py-4
        text-base md:text-lg font-medium
      `,
    }
  },
  computed: {
    colorClass() {
      switch (this.color) {
        case 'primary':
          return cntl`bg-blue-600 hover:bg-blue-700 text-white`
        case 'secondary':
          return cntl`bg-blue-100 hover:bg-blue-200 text-blue-700`
        default:
          return cntl`bg-blue-600 hover:bg-blue-700 text-white`
      }
    },
    fullClass() {
      return `${this.baseClass} ${this.colorClass}`
    },
  },
}
</script>
