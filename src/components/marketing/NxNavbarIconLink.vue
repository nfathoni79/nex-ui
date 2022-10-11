<template>
  <a href="#"
    class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
    <component :is="heroIcon" aria-hidden="true"
      class="h-6 w-6 flex-shrink-0 text-blue-600" />
    <div class="ml-4">
      <p class="text-base font-medium text-gray-900">{{ name }}</p>
      <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    heroIcon: String,
    name: String,
    description: String,
  },
}
</script>
