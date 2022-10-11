<template>
  <div class="flex items-center justify-between
    border-t border-gray-200 bg-white px-4 sm:px-6 py-3">
    <!-- Mobile -->
    <div class="flex sm:hidden flex-1 justify-between">
      <a href="#" class="relative inline-flex items-center
        rounded-md border border-gray-300
        bg-white hover:bg-gray-50
        px-4 py-2
        text-sm font-medium text-gray-700">
        Previous
      </a>
      <a href="#" class="relative ml-3 inline-flex items-center
        rounded-md border border-gray-300
        bg-white hover:bg-gray-50
        px-4 py-2
        text-sm font-medium text-gray-700">
        Next
      </a>
    </div>

    <!-- Desktop -->
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <!-- Showing -->
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">1</span>
          to
          <span class="font-medium">10</span>
          of
          <span class="font-medium">97</span>
          results
        </p>
      </div>

      <!-- Pages -->
      <div>
        <nav aria-label="Pagination" class="isolate inline-flex -space-x-px
          rounded-md shadow-sm">
          <!-- Previous -->
          <a href="#" class="relative inline-flex items-center
            rounded-l-md border border-gray-300
            bg-white hover:bg-gray-50
            px-2 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon aria-hidden="true" class="h-5 w-5" />
          </a>

          <!-- Current: "z-10 bg-blue-50 border-blue-500 text-blue-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a href="#" aria-current="page"
            class="relative z-10 inline-flex items-center
            border border-blue-500 bg-blue-50 px-4 py-2
            text-sm font-medium text-blue-600 focus:z-20">
            1
          </a>
          <a href="#" class="relative inline-flex items-center
            border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            2
          </a>
          <a href="#" class="relative hidden md:inline-flex items-center
            border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            3
          </a>

          <span class="relative inline-flex items-center
            border border-gray-300 bg-white px-4 py-2
            text-sm font-medium text-gray-700">
            ...
          </span>

          <a href="#" class="relative hidden md:inline-flex items-center
            border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            8
          </a>
          <a href="#" class="relative inline-flex items-center
            border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            9
          </a>
          <a href="#" class="relative inline-flex items-center
            border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            10
          </a>

          <!-- Next -->
          <a href="#" class="relative inline-flex items-center
            rounded-r-md border border-gray-300
            bg-white hover:bg-gray-50
            px-2 py-2
            text-sm font-medium text-gray-500 focus:z-20">
            <span class="sr-only">Next</span>
            <ChevronRightIcon aria-hidden="true" class="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
}
</script>
