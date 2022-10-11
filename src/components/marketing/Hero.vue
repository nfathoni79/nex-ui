<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 bg-white
        pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32
        lg:w-full lg:max-w-2xl">

        <!-- Hero image diagonal cut   -->
        <svg fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"
          class="absolute inset-y-0 right-0
          hidden lg:block
          h-full w-48
          translate-x-1/2
          text-white">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <!-- Mobile & Desktop nav  -->
        <Popover>
          <div class="relative px-4 sm:px-6 lg:px-8 pt-6">
            <nav aria-label="Global"
              class="relative flex items-center justify-between lg:justify-start sm:h-10">
              <div class="flex shrink-0 grow lg:grow-0 items-center">
                <div class="flex w-full md:w-auto items-center justify-between">
                  <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img alt="Your Company" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                    class="h-8 sm:h-10 w-auto" />
                  </a>

                  <!-- Mobile nav open -->
                  <div class="-mr-2 flex md:hidden items-center">
                    <PopoverButton class="inline-flex items-center justify-center
                      rounded-md bg-white hover:bg-gray-100 p-2 text-gray-400 hover:text-gray-500
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" class="h-6 w-6" />
                    </PopoverButton>
                  </div>
                </div>
              </div>

              <!-- Desktop nav items -->
              <div class="hidden md:block md:ml-10 md:space-x-8 md:pr-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="font-medium text-gray-500 hover:text-gray-900">
                  {{ item.name }}
                </a>
                <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                  Log in
                </a>
              </div>
            </nav>
          </div>

          <!-- Mobile nav items -->
          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus
              class="absolute inset-x-0 top-0 z-10
              origin-top-right p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md
                ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt=""
                      class="h-8 w-auto" />
                  </div>
                  <!-- Mobile nav close -->
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center
                      rounded-md bg-white hover:bg-gray-100 p-2 text-gray-400 hover:text-gray-500
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>

                <!-- Mobile nav items -->
                <div class="space-y-1 px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="block rounded-md px-3 py-2
                    text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {{ item.name }}
                  </a>
                </div>
                <a href="#"
                  class="block w-full px-5 py-3
                  bg-gray-50 hover:bg-gray-100 text-center font-medium text-blue-600">
                  Log in
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <!-- Hero main -->
        <main class="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28
          max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              <span class="block xl:inline">Data to enrich your </span>
              <span class="block xl:inline text-blue-600">online business</span>
            </h1>
            <p class="mt-3 sm:mt-5 md:mt-5 sm:mx-auto lg:mx-0 sm:max-w-xl
              text-base sm:text-lg md:text-xl text-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <NxHeroLink href="#" color="primary">
                Get started
              </NxHeroLink>
              <NxHeroLink href="#" color="secondary" class="mt-3 sm:mt-0 sm:ml-3">
                Live demo
              </NxHeroLink>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Hero image -->
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""
        class="h-56 sm:h-72 md:h-96 lg:h-full w-full lg:w-full object-cover" />
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import NxHeroLink from './NxHeroLink.vue'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    NxHeroLink,
  },
  data() {
    return {
      navigation: [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ],
    }
  },
}
</script>
