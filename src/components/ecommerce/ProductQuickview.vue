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
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-10" @close="$emit('close')">
      <TransitionChild as="template" enter="ease-out duration-300"
        enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 hidden md:block bg-gray-500 bg-opacity-75 transition-opacity"></div>
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-stretch md:items-center justify-center
          md:px-2 lg:px-4 text-center">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
            <DialogPanel class="md:my-8 flex md:max-w-2xl lg:max-w-4xl w-full
              md:px-4 text-left text-base transition">
              <div class="relative flex w-full items-center
                overflow-hidden bg-white shadow-2xl
                px-4 sm:px-6 pt-14 sm:pt-8 pb-8 md:p-6 lg:p-8">
                <button type="button" @click="$emit('close')"
                  class="absolute top-4 right-4 sm:top-8 sm:right-6
                  md:top-6 md:right-6 lg:top-8 lg:right-8
                  text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" class="h-6 w-6" />
                </button>

                <div class="grid w-full grid-cols-1 sm:grid-cols-12 items-start
                  gap-y-8 gap-x-6 lg:gap-x-8">
                  <div class="aspect-w-2 aspect-h-3 sm:col-span-4 lg:col-span-5
                    rounded-lg overflow-hidden bg-gray-100">
                    <img :src="product.imageSrc" :alt="product.imageAlt"
                      class="object-cover object-center" />
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                      {{ product.name }}
                    </h2>

                    <section aria-labelledby="information-heading" class="mt-2">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>

                      <p class="text-2xl text-gray-900">{{ product.price }}</p>

                      <!-- Reviews -->
                      <div class="mt-6">
                        <h4 class="sr-only">Reviews</h4>
                        <div class="flex items-center">
                          <div class="flex items-center">
                            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                            aria-hidden="true"
                            :class="[product.rating > rating ? 'text-gray-900'
                            : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" />
                          </div>
                          <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                          <a href="#" class="ml-3 text-sm font-medium
                            text-blue-600 hover:text-blue-500">
                            {{ product.reviewCount }} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" class="mt-10">
                      <h3 id="options-heading" class="sr-only">Product options</h3>

                      <form>
                        <!-- Colors -->
                        <div>
                          <h4 class="text-sm font-medium text-gray-900">Color</h4>

                          <RadioGroup v-model="selectedColor" class="mt-4">
                            <RadioGroupLabel class="sr-only"> Choose a color </RadioGroupLabel>
                            <span class="flex items-center space-x-3">
                              <RadioGroupOption as="template"
                                v-for="color in product.colors"
                                :key="color.name" :value="color"
                                v-slot="{ active, checked }">
                                <div :class="[color.selectedClass,
                                  active && checked ? 'ring ring-offset-1' : '',
                                  !active && checked ? 'ring-2' : '',
                                  '-m-0.5 relative p-0.5 flex items-center justify-center',
                                  'rounded-full cursor-pointer focus:outline-none']">
                                  <RadioGroupLabel as="span" class="sr-only">
                                    {{ color.name }}
                                  </RadioGroupLabel>
                                  <span aria-hidden="true" :class="[color.class,
                                    'h-8 w-8 border border-black border-opacity-10 rounded-full']"></span>
                                </div>
                              </RadioGroupOption>
                            </span>
                          </RadioGroup>
                        </div>

                        <!-- Sizes -->
                        <div class="mt-10">
                          <div class="flex items-center justify-between">
                            <h4 class="text-sm font-medium text-gray-900">
                              Size
                            </h4>
                            <a href="#" class="text-sm font-medium
                              text-blue-600 hover:text-blue-500">
                              Size guide
                            </a>
                          </div>

                          <RadioGroup v-model="selectedSize" class="mt-4">
                            <RadioGroupLabel class="sr-only">
                              Choose a size
                            </RadioGroupLabel>
                            <div class="grid grid-cols-4 gap-4">
                              <RadioGroupOption as="template"
                                v-for="size in product.sizes"
                                :key="size.name" :value="size"
                                :disabled="!size.inStock"
                                v-slot="{ active, checked }">
                                <div :class="[size.inStock
                                  ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                  active ? 'ring-2 ring-blue-500' : '',
                                  'group relative flex sm:flex-1 items-center justify-center',
                                  'border rounded-md hover:bg-gray-50 py-3 px-4',
                                  'text-sm font-medium uppercase focus:outline-none']">
                                  <RadioGroupLabel as="span">
                                    {{ size.name }}
                                  </RadioGroupLabel>
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

                        <button type="submit"
                          class="mt-6 flex w-full items-center justify-center
                          rounded-md border border-transparent
                          bg-blue-600 hover:bg-blue-700
                          py-3 px-8
                          text-base font-medium text-white
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          Add to bag
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Dialog,
    DialogPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
    StarIcon,
  },
  props: {
    show: Boolean,
  },
  data() {
    return {
      selectedColor: null,
      selectedSize: null,
      product: {
        name: 'Basic Tee 6-Pack ',
        price: '$192',
        rating: 3.9,
        reviewCount: 117,
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        colors: [
          { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
          { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],
        sizes: [
          { name: 'XXS', inStock: true },
          { name: 'XS', inStock: true },
          { name: 'S', inStock: true },
          { name: 'M', inStock: true },
          { name: 'L', inStock: true },
          { name: 'XL', inStock: true },
          { name: 'XXL', inStock: true },
          { name: 'XXXL', inStock: false },
        ],
      }
    }
  },
  created() {
    this.selectedColor = this.product.colors[0]
    this.selectedSize = this.product.sizes[2]
  },
}
</script>
