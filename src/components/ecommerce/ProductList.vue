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
  <div class="mx-auto max-w-2xl lg:max-w-7xl bg-white
    py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      Customers also purchased
    </h2>

    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      gap-y-10 gap-x-6 xl:gap-x-8">
      <div v-for="product in products" :key="product.id" class="group relative">
        <div class="min-h-80 lg:h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full
          rounded-md overflow-hidden bg-gray-200 group-hover:opacity-75">
          <img :src="product.imageSrc" :alt="product.imageAlt"
            class="h-full w-full lg:h-full lg:w-full object-cover object-center" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a :href="product.href">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ product.name }}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
          </div>
          <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 2,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 3,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 4,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
        {
          id: 5,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
      ],
    }
  }
}
</script>
