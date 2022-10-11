<template>
  <button type="button"
    class="inline-flex items-center justify-center
    rounded-md border shadow-sm
    text-base sm:text-sm font-medium
    focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[colorClasses, sizeClasses]">
    <slot></slot>
  </button>
</template>

<script>
import cntl from 'cntl'

export default {
  props: {
    color: String,
    icon: Boolean,
  },
  computed: {
    sizeClasses() {
      if (this.icon) return 'w-auto p-2'
      return 'w-full sm:w-auto px-4 py-2'
    },
    colorClasses() {
      switch (this.color) {
        case 'primary':
          return cntl`
            border-transparent
            bg-blue-600 hover:bg-blue-700
            text-white focus:ring-blue-500
          `
        case 'secondary':
          return cntl`
            border-gray-300
            bg-white hover:bg-gray-50
            text-gray-700 focus:ring-blue-500
          `
        case 'success':
          return cntl`
            border-transparent
            bg-green-600 hover:bg-green-700
            text-white focus:ring-green-500
          `
        case 'info':
          return cntl`
            border-transparent
            bg-cyan-600 hover:bg-cyan-700
            text-white focus:ring-cyan-500
          `
        case 'warning':
          return cntl`
            border-transparent
            bg-yellow-500 hover:bg-yellow-600
            text-gray-900 hover:text-white focus:ring-yellow-400
          `
        case 'danger':
          return cntl`
            border-transparent
            bg-red-600 hover:bg-red-700
            text-white focus:ring-red-500
          `
        default:
          return cntl`
            border-transparent
            bg-blue-600 hover:bg-blue-700
            text-white focus:ring-blue-500
          `
      }
    },
  },
}
</script>
