<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <div class="flex min-h-full items-center justify-center
    py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="Your Company"
          class="mx-auto h-12 w-auto" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
            start your 14-day free trial
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />

        <!-- Email & password -->
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email"
              autocomplete="email" placeholder="Email address" required
              class="relative block w-full appearance-none rounded-none rounded-t-md
              border border-gray-300 focus:border-blue-500
              px-3 py-2
              text-gray-900 placeholder-gray-500 sm:text-sm
              focus:z-10 focus:outline-none focus:ring-blue-500" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password"
              autocomplete="current-password" placeholder="Password" required
              class="relative block w-full appearance-none rounded-none rounded-b-md
              border border-gray-300 focus:border-blue-500
              px-3 py-2
              text-gray-900 placeholder-gray-500 sm:text-sm
              focus:z-10 focus:outline-none focus:ring-blue-500" />
          </div>
        </div>

        <!-- Remember & forgot password -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 rounded border-gray-300
              text-blue-600 focus:ring-blue-500" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
          </div>
        </div>

        <!-- Submit -->
        <div>
          <button type="submit"
            class="group relative flex w-full justify-center
            rounded-md border border-transparent
            bg-blue-600 hover:bg-blue-700
            py-2 px-4
            text-sm font-medium text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon aria-hidden="true"
                class="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    LockClosedIcon,
  },
}
</script>
