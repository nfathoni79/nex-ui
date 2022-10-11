<template>
  <div class="bg-white p-8">
    <div class="mx-auto max-w-7xl">
      <div class="lg:flex lg:items-center lg:justify-between">
        <!-- Text -->
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl sm:text-3xl font-bold leading-7 text-gray-900
            sm:truncate sm:tracking-tight">
            Back End Developer
          </h2>
          <div class="mt-1 sm:mt-0 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon aria-hidden="true"
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
              Full-time
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon aria-hidden="true"
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
              Remote
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <CurrencyDollarIcon aria-hidden="true"
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
              $120k &ndash; $140k
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon aria-hidden="true"
                class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
              Closing on January 9, 2020
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="mt-5 lg:mt-0 lg:ml-4 flex">
          <!-- Desktop edit -->
          <span class="hidden sm:block">
            <button type="button"
              class="inline-flex items-center
              rounded-md border border-gray-300 shadow-sm
              bg-white hover:bg-gray-50
              px-4 py-2
              text-sm font-medium text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <PencilIcon aria-hidden="true"
                class="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Edit
            </button>
          </span>

          <!-- Desktop view -->
          <span class="ml-3 hidden sm:block">
            <button type="button"
              class="inline-flex items-center
              rounded-md border border-gray-300 shadow-sm
              bg-white hover:bg-gray-50
              px-4 py-2
              text-sm font-medium text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <LinkIcon aria-hidden="true"
                class="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              View
            </button>
          </span>

          <!-- Mobile & desktop publish -->
          <span class="sm:ml-3">
            <button type="button"
              class="inline-flex items-center
                rounded-md border border-transparent shadow-sm
                bg-blue-600 hover:bg-blue-700
                px-4 py-2
                text-sm font-medium text-white
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <CheckIcon aria-hidden="true" class="-ml-1 mr-2 h-5 w-5" />
              Publish
            </button>
          </span>

          <!-- Mobile more dropdown -->
          <Menu as="div" class="relative ml-3 sm:hidden">
            <MenuButton class="inline-flex items-center
              rounded-md border border-gray-300 shadow-sm
              bg-white hover:bg-gray-50
              px-4 py-2
              text-sm font-medium text-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              More
              <ChevronDownIcon aria-hidden="true"
                class="-mr-1 ml-2 h-5 w-5 text-gray-500" />
            </MenuButton>

            <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right
                rounded-md bg-white py-1 shadow-lg
                ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700']">
                    Edit
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#"
                    :class="[active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700']">
                    View
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/vue/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
  components: {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
}
</script>
