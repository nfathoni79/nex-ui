<template>
  <div class="relative">
    <dt>
      <!-- Icon -->
      <div class="absolute flex h-12 w-12 items-center justify-center
        rounded-md bg-blue-500 text-white">
        <component :is="heroIcon" aria-hidden="true" class="h-6 w-6" />
      </div>
      <!-- Name -->
      <p class="ml-16 text-lg font-medium leading-6 text-gray-900">
        {{ name }}
      </p>
    </dt>
    <!-- Description -->
    <dd class="mt-2 ml-16 text-base text-gray-500">
      {{ description }}
    </dd>
  </div>
</template>

<script>
export default {
  props: {
    heroIcon: Function,
    name: String,
    description: String,
  },
}
</script>
