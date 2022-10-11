<template>
  <section :id="section.id" class="mt-8">
    <div class="m-2 rounded-md px-4 py-2 bg-blue-100">
      <h3 class="text-xl font-semibold text-gray-900">
        {{ section.name }}
      </h3>
    </div>

    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    section: Object,
  },
}
</script>
