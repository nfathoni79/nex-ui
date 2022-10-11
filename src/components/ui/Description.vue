<template>
  <div class="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8 bg-gray-100">
    <div class="mx-auto max-w-4xl">
      <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <!-- Head -->
        <div class="px-4 sm:px-6 py-5">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Applicant Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>

        <!-- Content -->
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 sm:px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 sm:mt-0 text-sm text-gray-900 sm:col-span-2">
                Margot Foster
              </dd>
            </div>
            <div class="bg-white px-4 sm:px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Application for</dt>
              <dd class="mt-1 sm:mt-0 text-sm text-gray-900 sm:col-span-2">
                Backend Developer
              </dd>
            </div>
            <div class="bg-gray-50 px-4 sm:px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 sm:mt-0 text-sm text-gray-900 sm:col-span-2">
                margotfoster@example.com
              </dd>
            </div>
            <div class="bg-white px-4 sm:px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Salary expectation</dt>
              <dd class="mt-1 sm:mt-0 text-sm text-gray-900 sm:col-span-2">
                $120,000
              </dd>
            </div>
            <div class="bg-gray-50 px-4 sm:px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">About</dt>
              <dd class="mt-1 sm:mt-0 text-sm text-gray-900 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
                Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div class="bg-white px-4 sm:px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt class="text-sm font-medium text-gray-500">Attachments</dt>
              <dd class="mt-1 sm:mt-0 text-sm text-gray-900 sm:col-span-2">
                <ul role="list" class="divide-y divide-gray-200
                  rounded-md border border-gray-200">
                  <li class="flex items-center justify-between
                    py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true"
                        class="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <span class="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#"
                        class="font-medium text-blue-600 hover:text-blue-500">
                        Download
                      </a>
                    </div>
                  </li>
                  <li class="flex items-center justify-between
                    py-3 pl-3 pr-4 text-sm">
                    <div class="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true"
                        class="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                    </div>
                    <div class="ml-4 flex-shrink-0">
                      <a href="#"
                        class="font-medium text-blue-600 hover:text-blue-500">
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PaperClipIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    PaperClipIcon,
  },
}
</script>
