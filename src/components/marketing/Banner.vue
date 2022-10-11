<template>
  <div class="bg-blue-600">
    <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <!-- Text -->
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg bg-blue-800 p-2">
            <MegaphoneIcon aria-hidden="true" class="h-6 w-6 text-white" />
          </span>
          <p class="ml-3 truncate font-medium text-white">
            <span class="md:hidden">We announced a new product!</span>
            <span class="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
          </p>
        </div>

        <!-- Button -->
        <div class="order-3 sm:order-2 mt-2 sm:mt-0 w-full sm:w-auto flex-shrink-0">
          <a href="#"
            class="flex items-center justify-center
            rounded-md shadow-sm border border-transparent
            bg-white hover:bg-indigo-50
            px-4 py-2
            text-sm font-medium text-blue-600">
            Learn more
          </a>
        </div>

        <!-- Close -->
        <div class="order-2 sm:order-3 flex-shrink-0 sm:ml-3">
          <button type="button"
            class="-mr-1 sm:-mr-2 flex rounded-md p-2 hover:bg-blue-500
            focus:outline-none focus:ring-2 focus:ring-white">
            <span class="sr-only">Dismiss</span>
            <XMarkIcon aria-hidden="true" class="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MegaphoneIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    MegaphoneIcon,
    XMarkIcon,
  },
}
</script>
