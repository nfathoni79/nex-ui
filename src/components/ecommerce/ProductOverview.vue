<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex items-center max-w-2xl lg:max-w-7xl
          space-x-2 px-4 sm:px-6 lg:px-8">
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">
                {{ breadcrumb.name }}
              </a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a :href="product.href" aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600">
              {{ product.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl lg:max-w-7xl
        lg:grid lg:grid-cols-3 lg:gap-x-8
        sm:px-6 lg:px-8">
        <div class="aspect-w-3 aspect-h-4
          hidden lg:block overflow-hidden rounded-lg">
          <img :src="product.images[0].src" :alt="product.images[0].alt"
            class="h-full w-full object-cover object-center" />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img :src="product.images[1].src" :alt="product.images[1].alt"
              class="h-full w-full object-cover object-center" />
          </div>
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img :src="product.images[2].src" :alt="product.images[2].alt"
              class="h-full w-full object-cover object-center" />
          </div>
        </div>
        <div class="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4
          sm:overflow-hidden sm:rounded-lg">
          <img :src="product.images[3].src" :alt="product.images[3].alt"
            class="h-full w-full object-cover object-center" />
        </div>
      </div>

      <!-- Product info -->
      <div class="mx-auto max-w-2xl lg:max-w-7xl
        lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr]
        lg:gap-x-8 px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">
            {{ product.price }}
          </p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                  aria-hidden="true"
                  :class="[reviews.average > rating
                  ? 'text-gray-900'
                  : 'text-gray-200',
                  'h-5 w-5 flex-shrink-0']" />
              </div>
              <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
              <a :href="reviews.href" class="ml-3 text-sm font-medium
                text-blue-600 hover:text-blue-500">
                {{ reviews.totalCount }} reviews
              </a>
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">Color</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only"> Choose a color </RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption as="template"
                    v-for="color in product.colors"
                    :key="color.name" :value="color"
                    v-slot="{ active, checked }">
                    <div :class="[color.selectedClass,
                      active && checked ? 'ring ring-offset-1' : '',
                      !active && checked ? 'ring-2' : '',
                      '-m-0.5 relative p-0.5 rounded-full',
                      'flex items-center justify-center',
                      'cursor-pointer focus:outline-none']">
                      <RadioGroupLabel as="span" class="sr-only">
                        {{ color.name }}
                      </RadioGroupLabel>
                      <span aria-hidden="true" :class="[color.class,
                        'h-8 w-8 border border-black border-opacity-10 rounded-full']"></span>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Size guide
                </a>
              </div>

              <RadioGroup v-model="selectedSize" class="mt-4">
                <RadioGroupLabel class="sr-only"> Choose a size </RadioGroupLabel>
                <div class="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-4">
                  <RadioGroupOption as="template" v-for="size in product.sizes"
                    :key="size.name" :value="size" :disabled="!size.inStock"
                    v-slot="{ active, checked }">
                    <div :class="[size.inStock
                      ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                      : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      active ? 'ring-2 ring-blue-500' : '',
                      'group relative',
                      'flex sm:flex-1 items-center justify-center',
                      'border rounded-md',
                      'hover:bg-gray-50',
                      'py-3 sm:py-6 px-4',
                      'text-sm font-medium uppercase focus:outline-none']">
                      <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                      <span v-if="size.inStock" aria-hidden="true"
                        :class="[active ? 'border' : 'border-2',
                        checked ? 'border-blue-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-md']"></span>
                      <span v-else aria-hidden="true"
                        class="pointer-events-none absolute -inset-px
                        rounded-md border-2 border-gray-200">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor"
                          class="absolute inset-0 h-full w-full
                          stroke-2 text-gray-200">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <button type="submit" class="mt-10 flex w-full items-center justify-center
              rounded-md border border-transparent
              bg-blue-600 hover:bg-blue-700
              py-3 px-8
              text-base font-medium text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Add to bag
            </button>
          </form>
        </div>

        <!-- Description and details -->
        <div class="lg:col-span-2 lg:col-start-1
          py-10 lg:pt-6 lg:pb-16 lg:pr-8
          lg:border-r lg:border-gray-200">
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in product.highlights" :key="highlight"
                  class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    StarIcon,
  },
  created() {
    this.selectedColor = this.product.colors[0]
    this.selectedSize = this.product.sizes[2]
  },
  data() {
    return {
      selectedColor: null,
      selectedSize: null,
      product: {
        name: 'Basic Tee 6-Pack',
        price: '$192',
        href: '#',
        breadcrumbs: [
          { id: 1, name: 'Men', href: '#' },
          { id: 2, name: 'Clothing', href: '#' },
        ],
        images: [
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
          },
          {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
          },
        ],
        colors: [
          { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
          { name: 'XXS', inStock: false },
          { name: 'XS', inStock: true },
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: true },
          { name: '2XL', inStock: true },
          { name: '3XL', inStock: true },
        ],
        description:
          `The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.
          Feeling adventurous? Put on a heather gray tee.
          Want to be a trendsetter? Try our exclusive colorway: "Black".
          Need to add an extra pop of color to your outfit? Our white tee has you covered.`,
        highlights: [
          'Hand cut and sewn locally',
          'Dyed with our proprietary colors',
          'Pre-washed & pre-shrunk',
          'Ultra-soft 100% cotton',
        ],
        details:
          `The 6-Pack includes two black, two white, and two heather gray Basic Tees.
          Sign up for our subscription service and be the first to get new, exciting colors,
          like our upcoming "Charcoal Gray" limited release.`,
      },
      reviews: { href: '#', average: 4, totalCount: 117 },
    }
  },
}
</script>
