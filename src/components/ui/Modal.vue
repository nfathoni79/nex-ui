<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" @close="$emit('close')" class="relative z-10">
      <!-- Background below modal -->
      <TransitionChild as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      </TransitionChild>

      <!-- Modal wrapper -->
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end sm:items-center justify-center
          p-4 sm:p-0 text-center">
          <!-- Modal card -->
          <TransitionChild as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative overflow-hidden rounded-lg bg-white
              text-left shadow-xl transition-all
              sm:my-8 sm:w-full sm:max-w-lg">
              <!-- Content area -->
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <!-- Icon -->
                  <div class="mx-auto flex h-12 sm:h-10 w-12 sm:w-10
                    flex-shrink-0 items-center justify-center
                    rounded-full bg-red-100 sm:mx-0">
                    <ExclamationTriangleIcon aria-hidden="true"
                      class="h-6 w-6 text-red-600" />
                  </div>

                  <!-- Text -->
                  <div class="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                      Deactivate account
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Are you sure you want to deactivate your account?
                        All of your data will be permanently removed.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Buttons area -->
              <div class="bg-gray-50 px-4 sm:px-6 py-3 sm:flex sm:flex-row-reverse">
                <button type="button" @click="$emit('close')"
                  class="sm:ml-3 inline-flex w-full sm:w-auto justify-center
                  rounded-md border border-transparent shadow-sm
                  bg-red-600 hover:bg-red-700 px-4 py-2
                  text-base sm:text-sm font-medium text-white
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                  Deactivate
                </button>
                <button type="button" @click="$emit('close')"
                  class="mt-3 sm:mt-0 sm:ml-3 inline-flex w-full sm:w-auto justify-center
                  rounded-md border border-gray-300 shadow-sm
                  bg-white hover:bg-gray-50 px-4 py-2
                  text-base sm:text-sm font-medium text-gray-700
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import NxButton from '../NxButton.vue'

export default {
  props: {
    show: Boolean,
  },
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationTriangleIcon,
    NxButton,
  },
}
</script>
