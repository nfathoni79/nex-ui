<template>
  <div class="bg-white py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="lg:text-center">
        <h2 class="text-lg font-semibold text-blue-600">Transactions</h2>
        <p class="mt-2 text-3xl sm:text-4xl font-bold leading-8 tracking-tight text-gray-900">
          A better way to send money
        </p>
        <p class="mt-4 lg:mx-auto max-w-2xl text-xl text-gray-500">
          Lorem ipsum dolor sit amet consect adipisicing elit.
          Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <!-- Content -->
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <NxFeatureItem v-for="feature in features" :key="feature.name"
            :heroIcon="feature.icon" :name="feature.name" :description="feature.description" />
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/vue/24/outline'
import NxFeatureItem from './NxFeatureItem.vue'

export default {
  components: {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    GlobeAltIcon,
    ScaleIcon,
    NxFeatureItem,
  },
  data() {
    return {
      features: [
        {
          name: 'Competitive exchange rates',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: GlobeAltIcon,
        },
        {
          name: 'No hidden fees',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: ScaleIcon,
        },
        {
          name: 'Transfers are instant',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: BoltIcon,
        },
        {
          name: 'Mobile notifications',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
          icon: ChatBubbleBottomCenterTextIcon,
        },
      ],
    }
  }
}
</script>
