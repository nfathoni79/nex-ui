<template>
  <Popover class="relative bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="flex items-center justify-between md:justify-start
        border-b-2 border-gray-100 py-6 md:space-x-10">
        <!-- Logo -->
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt=""
              class="h-8 sm:h-10 w-auto" />
          </a>
        </div>

        <!-- Mobile nav open -->
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center
            rounded-md bg-white hover:bg-gray-100 p-2
            text-gray-400 hover:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon aria-hidden="true" class="h-6 w-6" />
          </PopoverButton>
        </div>

        <!-- Desktop nav items -->
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <!-- Solutions sub nav -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md',
              'bg-white text-base font-medium hover:text-gray-900',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2']">
              <span>Solutions</span>
              <ChevronDownIcon aria-hidden="true" :class="[open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500']" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <!-- Solutions sub nav items -->
              <PopoverPanel class="absolute z-10 -ml-4 lg:ml-0 mt-3
                w-screen max-w-md px-2 sm:px-0
                lg:left-1/2 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 sm:gap-8 bg-white px-5 py-6 sm:p-8">
                    <NxNavbarIconLink v-for="item in solutions" :key="item.name"
                      :href="item.href" :heroIcon="item.icon" :name="item.name"
                      :description="item.description" />
                  </div>
                  <div class="space-y-6 sm:space-y-0 sm:space-x-10
                    bg-gray-50 px-5 sm:px-8 py-5 sm:flex">
                    <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                      <a :href="item.href"
                        class="-m-3 flex items-center rounded-md p-3
                        text-base font-medium text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" aria-hidden="true"
                          class="h-6 w-6 flex-shrink-0 text-gray-400" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            Docs
          </a>

          <!-- More sub nav -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center rounded-md',
              'bg-white text-base font-medium hover:text-gray-900',
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2']">
              <span>More</span>
              <ChevronDownIcon aria-hidden="true" :class="[open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500']" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <!-- More sub nav items -->
              <PopoverPanel class="absolute left-1/2 z-10 mt-3
                w-screen max-w-md -translate-x-1/2 px-2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative grid gap-6 sm:gap-8 bg-white px-5 py-6 sm:p-8">
                    <NxNavbarIconLink v-for="item in resources" :key="item.name"
                      :href="item.href" :heroIcon="item.icon" :name="item.name"
                      :description="item.description" />
                  </div>
                  <div class="bg-gray-50 px-5 sm:px-8 py-5 sm:py-8">
                    <div>
                      <h3 class="text-base font-medium text-gray-500">Recent Posts</h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li v-for="post in recentPosts" :key="post.id"
                          class="truncate text-base">
                          <a :href="post.href"
                            class="font-medium text-gray-900 hover:text-gray-700">
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                        View all posts
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>

        <!-- Sign in & up -->
        <div class="hidden md:flex md:flex-1 items-center justify-end lg:w-0">
          <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </a>
          <a href="#" class="ml-8 px-4 py-2 inline-flex items-center justify-center
            whitespace-nowrap rounded-md shadow-sm border border-transparent
            bg-blue-600 hover:bg-blue-700
            text-base font-medium text-white">
            Sign up
          </a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">

      <!-- Mobile nav  -->
      <PopoverPanel focus class="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg
          ring-1 ring-black ring-opacity-5">

          <!-- Mobile nav head & solutions -->
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <!-- Logo -->
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="Your Company" />
              </div>
              <!-- Mobile nav close -->
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center
                  rounded-md bg-white hover:bg-gray-100 p-2
                  text-gray-400 hover:text-gray-500
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" class="h-6 w-6" />
                </PopoverButton>
              </div>
            </div>

            <!-- Mobile solutions -->
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in solutions" :key="item.name" :href="item.href"
                  class="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                  <component :is="item.icon" aria-hidden="true"
                    class="h-6 w-6 flex-shrink-0 text-blue-600" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>

          <!-- Mobile other nav -->
          <div class="space-y-6 py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>
              <a v-for="item in resources" :key="item.name" :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </a>
            </div>
            <div>
              <a href="#"
                class="flex w-full items-center justify-center px-4 py-2
                rounded-md shadow-sm border border-transparent
                bg-blue-600 hover:bg-blue-700
                text-base font-medium text-white">
                Sign up
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" class="text-blue-600 hover:text-blue-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import NxNavbarIconLink from './NxNavbarIconLink.vue'

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
    ChevronDownIcon,
    NxNavbarIconLink,
  },
  data() {
    return {
      solutions: [
        {
          name: 'Analytics',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '#',
          icon: ChartBarIcon,
        },
        {
          name: 'Engagement',
          description: 'Speak directly to your customers in a more meaningful way.',
          href: '#',
          icon: CursorArrowRaysIcon,
        },
        {
          name: 'Security',
          description: "Your customers' data will be safe and secure.",
          href: '#',
          icon: ShieldCheckIcon
        },
        {
          name: 'Integrations',
          description: "Connect with third-party tools that you're already using.",
          href: '#',
          icon: Squares2X2Icon,
        },
        {
          name: 'Automations',
          description: 'Build strategic funnels that will drive your customers to convert',
          href: '#',
          icon: ArrowPathIcon,
        },
      ],
      callsToAction: [
        { name: 'Watch Demo', href: '#', icon: PlayIcon },
        { name: 'Contact Sales', href: '#', icon: PhoneIcon },
      ],
      resources: [
        {
          name: 'Help Center',
          description: 'Get all of your questions answered in our forums or contact support.',
          href: '#',
          icon: LifebuoyIcon,
        },
        {
          name: 'Guides',
          description: 'Learn how to maximize our platform to get the most out of it.',
          href: '#',
          icon: BookmarkSquareIcon,
        },
        {
          name: 'Events',
          description: 'See what meet-ups and other events we might be planning near you.',
          href: '#',
          icon: CalendarIcon,
        },
        {
          name: 'Security',
          description: 'Understand how we take your privacy seriously.',
          href: '#',
          icon: ShieldCheckIcon,
        },
      ],
      recentPosts: [
        { id: 1, name: 'Boost your conversion rate', href: '#' },
        { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
        { id: 3, name: 'Improve your customer experience', href: '#' },
      ],
    }
  }
}
</script>
