<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl py-12 lg:py-16 px-4 sm:px-6 lg:px-8
      lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        <span class="block">Ready to dive in?</span>
        <span class="block text-blue-600">Start your free trial today.</span>
      </h2>
      <div class="mt-8 lg:mt-0 flex lg:flex-shrink-0">
        <NxCtaLink href="#">
          Get started
        </NxCtaLink>
        <NxCtaLink href="#" color="secondary" class="ml-3">
          Learn more
        </NxCtaLink>
      </div>
    </div>
  </div>
</template>

<script>
import NxCtaLink from './NxCtaLink.vue'

export default {
  components: {
    NxCtaLink,
  },
}
</script>
