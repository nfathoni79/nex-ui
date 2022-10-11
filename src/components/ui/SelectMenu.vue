<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium text-gray-700">
      Assigned to
    </ListboxLabel>
    <div class="relative mt-1">
      <ListboxButton class="relative w-full cursor-default
        rounded-md border border-gray-300 focus:border-blue-500
        bg-white py-2 pl-3 pr-10 shadow-sm
        text-left sm:text-sm
        focus:outline-none focus:ring-1 focus:ring-blue-500">
        <span class="flex items-center">
          <img :src="selected.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3
          flex items-center pr-2">
          <ChevronUpDownIcon aria-hidden="true" class="h-5 w-5 text-gray-400" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto
          rounded-md bg-white shadow-lg py-1
          text-base sm:text-sm
          ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ListboxOption as="template" v-for="person in people"
            :key="person.id" :value="person" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-blue-600' : 'text-gray-900',
              'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <img :src="person.avatar" alt=""
                  class="h-6 w-6 flex-shrink-0 rounded-full" />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ person.name }}
                </span>
              </div>

              <span v-if="selected"
                :class="[active ? 'text-white' : 'text-blue-600',
                'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon aria-hidden="true" class="h-5 w-5" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronUpDownIcon,
  },
  data() {
    return {
      selected: null,
      people: [
        {
          id: 1,
          name: 'Wade Cooper',
          avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          name: 'Arlene Mccoy',
          avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 3,
          name: 'Devon Webb',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          id: 4,
          name: 'Tom Cook',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 5,
          name: 'Tanya Fox',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 6,
          name: 'Hellen Schmidt',
          avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 7,
          name: 'Caroline Schultz',
          avatar: 'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 8,
          name: 'Mason Heaney',
          avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 9,
          name: 'Claudie Smitham',
          avatar: 'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 10,
          name: 'Emil Schaefer',
          avatar: 'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    }
  },
  created() {
    this.selected = this.people[3]
  },
}
</script>
