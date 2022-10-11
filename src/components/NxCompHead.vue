<template>
  <div class="rounded-md px-4 py-2 bg-blue-100">
    <h3 :id="id" class="text-xl font-semibold text-gray-900">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
  }
}
</script>
