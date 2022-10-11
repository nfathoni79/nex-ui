<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="mx-auto max-w-7xl bg-gray-100 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none py-16 sm:py-24 lg:py-32">
      <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

      <div class="mt-6 lg:grid lg:grid-cols-3
        lg:gap-x-6 space-y-12 lg:space-y-0 ">
        <div v-for="callout in callouts" :key="callout.name" class="group relative">
          <div class="relative h-80 sm:h-64 w-full
            sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1
            rounded-lg overflow-hidden bg-white group-hover:opacity-75">
            <img :src="callout.imageSrc" :alt="callout.imageAlt"
              class="h-full w-full object-cover object-center" />
          </div>
          <h3 class="mt-6 text-sm text-gray-500">
            <a :href="callout.href">
              <span class="absolute inset-0"></span>
              {{ callout.name }}
            </a>
          </h3>
          <p class="text-base font-semibold text-gray-900">
            {{ callout.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      callouts: [
        {
          name: 'Desk and Office',
          description: 'Work from home accessories',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Self-Improvement',
          description: 'Journals and note-taking',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: 'Travel',
          description: 'Daily commute essentials',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
      ],
    }
  }
}
</script>
