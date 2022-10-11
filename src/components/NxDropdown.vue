<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center
        rounded-md border border-gray-300 shadow-sm
        bg-white hover:bg-gray-50
        px-4 py-2
        text-sm font-medium text-gray-700
        focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:ring-offset-2 focus:ring-offset-gray-100">
        {{ title }}
        <ChevronDownIcon aria-hidden="true" class="-mr-1 ml-2 h-5 w-5" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95">
      <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right
        rounded-md bg-white shadow-lg
        ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-for="option in options" v-slot="{ active }">
            <a :href="option.href"
              :class="[active
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-700',
              'block px-4 py-2 text-sm']">
              {{ option.name }}
            </a>
          </MenuItem>
          <slot></slot>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
  },
  props: {
    title: String,
    options: Array,
  },
}
</script>
