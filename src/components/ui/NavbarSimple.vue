<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button-->
        <div class="absolute inset-y-0 left-0 flex sm:hidden items-center">
          <DisclosureButton class="inline-flex items-center justify-center
            rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" aria-hidden="true" class="block h-6 w-6" />
            <XMarkIcon v-else aria-hidden="true" class="block h-6 w-6" />
          </DisclosureButton>
        </div>

        <!-- Mobile logo / Desktop logo & nav items -->
        <div class="flex flex-1
          items-center sm:items-stretch justify-center sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500" alt="Your Company"
              class="block lg:hidden h-8 w-auto" />
            <img src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500" alt="Your Company"
              class="hidden lg:block h-8 w-auto" />
          </div>

          <!-- Desktop nav items -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :aria-current="item.current ? 'page' : undefined"
                :class="[item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-700',
                'px-3 py-2 rounded-md text-sm font-medium']">
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>

        <!-- Notification and profile -->
        <div class="absolute sm:static inset-y-0 right-0 sm:inset-auto
          flex items-center pr-2 sm:pr-0 sm:ml-6">
          <button type="button" class="rounded-full
            bg-gray-800 p-1 text-gray-400 hover:text-white
            focus:outline-none focus:ring-2 focus:ring-white
            focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" class="h-6 w-6" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="flex rounded-full bg-gray-800 text-sm
                focus:outline-none focus:ring-2 focus:ring-white
                focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open user menu</span>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                  class="h-8 w-8 rounded-full" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right
                rounded-md bg-white py-1 shadow-lg
                ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700']">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700']">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700']">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- Mobile nav items -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :aria-current="item.current ? 'page' : undefined"
          :class="[item.current ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block px-3 py-2 rounded-md text-base font-medium']">
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Bars3Icon,
    BellIcon,
    XMarkIcon
  },
  data() {
    return {
      navigation: [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ],
    }
  },
}
</script>
