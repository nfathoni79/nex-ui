<template>
  <!-- Contents menu -->
  <NxButton :icon="true" v-show="!contentsOpen" @click="contentsOpen = true"
    class="fixed top-8 right-2 z-50 w-auto px-2">
    <span class="sr-only">Open main menu</span>
    <Bars3Icon aria-hidden="true" class="block h-6 w-6" />
  </NxButton>

  <NxSlideOver title="Contents" :show="contentsOpen" @close="contentsOpen = false">
    <div class="prose">
      <h4>Marketing</h4>
      <ul>
        <li v-for="section in sections.slice(0, 5)" :key="section.id">
          <a :href="'#' + section.id">{{ section.name }}</a>
        </li>
      </ul>

      <h4>Application UI</h4>
      <ul>
        <li v-for="section in sections.slice(5, 23)" :key="section.id">
          <a :href="'#' + section.id">{{ section.name }}</a>
        </li>
      </ul>

      <h4>Ecommerce</h4>
      <ul>
        <li v-for="section in sections.slice(23)" :key="section.id">
          <a :href="'#' + section.id">{{ section.name }}</a>
        </li>
      </ul>
    </div>
  </NxSlideOver>

  <!-- Title -->
  <h1 class="mx-4 my-8 text-4xl font-bold text-gray-900">
    Nex<span class="text-blue-700">UI</span>
  </h1>

  <!-- Sections -->
  <NxSection :section="getSection('mark-hero')">
    <Hero />
  </NxSection>

  <NxSection :section="getSection('mark-features')">
    <Features />
  </NxSection>

  <NxSection :section="getSection('mark-cta')">
    <Cta />
  </NxSection>

  <NxSection :section="getSection('mark-navbar')">
    <Navbar />
  </NxSection>

  <NxSection :section="getSection('mark-banner')">
    <Banner />
  </NxSection>

  <NxSection :section="getSection('ui-stacked')">
    <Stacked />
  </NxSection>

  <NxSection :section="getSection('ui-heading')">
    <Heading />
  </NxSection>

  <NxSection :section="getSection('ui-description')">
    <Description />
  </NxSection>

  <NxSection :section="getSection('ui-forms')">
    <Forms />
  </NxSection>

  <NxSection :section="getSection('ui-input-group')">
    <div class="mx-auto max-w-sm">
      <InputGroup />
    </div>
  </NxSection>

  <NxSection :section="getSection('ui-select-menu')">
    <div class="mx-auto max-w-sm">
      <SelectMenu />
    </div>
  </NxSection>

  <NxSection :section="getSection('ui-sign')">
    <SignIn />
  </NxSection>

  <NxSection :section="getSection('ui-navbar')">
    <NavbarSimple />
  </NxSection>

  <NxSection :section="getSection('ui-pagination')">
    <Pagination />
  </NxSection>

  <NxSection :section="getSection('ui-modal')">
    <div class="px-2">
      <NxButton @click="modalOpen = true">Open Modal</NxButton>
    </div>
    <Modal :show="modalOpen" @close="modalOpen = false" />
  </NxSection>

  <NxSection :section="getSection('ui-modal-nx')">
    <div class="px-2">
      <NxButton @click="nxModalOpen = true">Open NX Modal</NxButton>
    </div>
    <NxModal :show="nxModalOpen" @close="nxModalOpen = false">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex h-12 sm:h-10 w-12 sm:w-10
            flex-shrink-0 items-center justify-center
            rounded-full bg-red-100 sm:mx-0">
            <ExclamationTriangleIcon aria-hidden="true"
              class="h-6 w-6 text-red-600" />
          </div>

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

      <div class="bg-gray-50 px-4 sm:px-6 py-3 sm:flex sm:flex-row-reverse">
        <NxButton @click="nxModalOpen = false" color="danger" class="sm:ml-3">
          Deactivate
        </NxButton>
        <NxButton @click="nxModalOpen = false" color="secondary" class="mt-3 sm:mt-0 sm:ml-3">
          Cancel
        </NxButton>
      </div>
    </NxModal>
  </NxSection>

  <NxSection :section="getSection('ui-slideover')">
    <div class="px-2">
      <NxButton @click="slideOpen = true">Open Slide-over</NxButton>
    </div>
    <SlideOver :show="slideOpen" @close="slideOpen = false" />
  </NxSection>

  <NxSection :section="getSection('ui-slideover-nx')">
    <div class="px-2">
      <NxButton @click="nxSlideOpen = true">Open NX Slide-over</NxButton>
    </div>
    <NxSlideOver title="Coba Title" :show="nxSlideOpen" @close="nxSlideOpen = false">
      Coba Slideover
    </NxSlideOver>
  </NxSection>

  <NxSection :section="getSection('ui-button-nx')">
    <div class="flex items-center p-4
      space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
      <NxButton>Primary</NxButton>
      <NxButton color="secondary">Secondary</NxButton>
      <NxButton color="success">Success</NxButton>
      <NxButton color="info">Info</NxButton>
      <NxButton color="warning">Warning</NxButton>
      <NxButton color="danger">Danger</NxButton>
      <NxButton :icon="true">
        <Bars3Icon aria-hidden="true" class="block h-6 w-6" />
      </NxButton>
    </div>
  </NxSection>

  <NxSection :section="getSection('ui-avatar')">
    <AvatarStack />
  </NxSection>

  <NxSection :section="getSection('ui-dropdown')">
    <div class="mx-auto max-w-sm text-right">
      <Dropdown />
    </div>
  </NxSection>

  <NxSection :section="getSection('ui-dropdown-nx')">
    <div class="mx-auto max-w-sm text-right">
      <NxDropdown title="Coba Dropdown" :options="options" />
    </div>
  </NxSection>

  <NxSection :section="getSection('ui-dropdown-div')">
    <div class="mx-auto max-w-sm text-right">
      <DropdownDivider />
    </div>
  </NxSection>

  <NxSection :section="getSection('ecom-product-overview')">
    <ProductOverview />
  </NxSection>

  <NxSection :section="getSection('ecom-product-list')">
    <ProductList />
  </NxSection>

  <NxSection :section="getSection('ecom-product-list-simple')">
    <ProductListSimple />
  </NxSection>

  <NxSection :section="getSection('ecom-category-preview')">
    <CategoryPreview />
  </NxSection>

  <NxSection :section="getSection('ecom-shopping-cart')">
    <div class="px-2">
      <NxButton @click="cartOpen = true">Open shopping cart</NxButton>
    </div>
    <ShoppingCart :show="cartOpen" @close="cartOpen = false" />
  </NxSection>

  <NxSection :section="getSection('ecom-category-filter')">
    <CategoryFilter />
  </NxSection>

  <NxSection :section="getSection('ecom-product-quickview')">
    <div class="px-2">
      <NxButton @click="quickviewOpen = true">Open product quickview</NxButton>
    </div>
    <ProductQuickview :show="quickviewOpen" @close="quickviewOpen = false" />
  </NxSection>

  <NxSection :section="getSection('ecom-product-feature')">
    <ProductFeature />
  </NxSection>

  <NxSection :section="getSection('ecom-promo')">
    <PromoSection />
  </NxSection>

  <NxSection :section="getSection('ecom-store-nav')">
    <StoreNavigation />
  </NxSection>
</template>

<script>
import { DialogTitle, MenuItem } from '@headlessui/vue'
import { ExclamationTriangleIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import Hero from './components/marketing/Hero.vue'
import Features from './components/marketing/Features.vue'
import Cta from './components/marketing/Cta.vue'
import Navbar from './components/marketing/Navbar.vue'
import Banner from './components/marketing/Banner.vue'

import Stacked from './components/ui/Stacked.vue'
import Heading from './components/ui/Heading.vue'
import Description from  './components/ui/Description.vue'
import Forms from './components/ui/Forms.vue'
import InputGroup from './components/ui/InputGroup.vue'
import SelectMenu from './components/ui/SelectMenu.vue'
import SignIn from './components/ui/SignIn.vue'
import NavbarSimple from './components/ui/NavbarSimple.vue'
import Pagination from './components/ui/Pagination.vue'
import Modal from './components/ui/Modal.vue'
import SlideOver from './components/ui/SlideOver.vue'
import AvatarStack from './components/ui/AvatarStack.vue'
import Dropdown from './components/ui/Dropdown.vue'
import DropdownDivider from './components/ui/DropdownDivider.vue'

import ProductOverview from './components/ecommerce/ProductOverview.vue'
import ProductList from './components/ecommerce/ProductList.vue'
import ProductListSimple from './components/ecommerce/ProductListSimple.vue'
import CategoryPreview from './components/ecommerce/CategoryPreview.vue'
import ShoppingCart from './components/ecommerce/ShoppingCart.vue'
import CategoryFilter from './components/ecommerce/CategoryFilter.vue'
import ProductQuickview from './components/ecommerce/ProductQuickview.vue'
import ProductFeature from './components/ecommerce/ProductFeature.vue'
import StoreNavigation from './components/ecommerce/StoreNavigation.vue'
import PromoSection from './components/ecommerce/PromoSection.vue'

import NxCompHead from './components/NxCompHead.vue'
import NxSection from './components/NxSection.vue'
import NxModal from './components/NxModal.vue'
import NxButton from './components/NxButton.vue'
import NxSlideOver from './components/NxSlideOver.vue'
import NxDropdown from './components/NxDropdown.vue'

import sections from './data/sections'

export default {
  components: {
    DialogTitle,
    MenuItem,
    ExclamationTriangleIcon,
    Bars3Icon,
    XMarkIcon,
    Hero,
    Features,
    Cta,
    Navbar,
    Banner,
    Stacked,
    Heading,
    Description,
    Forms,
    InputGroup,
    SelectMenu,
    SignIn,
    NavbarSimple,
    Pagination,
    Modal,
    SlideOver,
    AvatarStack,
    Dropdown,
    DropdownDivider,
    ProductOverview,
    ProductList,
    ProductListSimple,
    CategoryPreview,
    ShoppingCart,
    CategoryFilter,
    ProductQuickview,
    ProductFeature,
    StoreNavigation,
    PromoSection,
    NxCompHead,
    NxSection,
    NxModal,
    NxButton,
    NxSlideOver,
    NxDropdown,
  },
  data() {
    return {
      contentsOpen: false,
      modalOpen: false,
      nxModalOpen: false,
      slideOpen: false,
      nxSlideOpen: false,
      cartOpen: false,
      quickviewOpen: false,
      options: [
        {
          name: 'Coba 1',
          href: '#',
        },
        {
          name: 'Coba 2',
          href: '#',
        },
        {
          name: 'Coba 3',
          href: '#',
        },
      ],
      sections,
    }
  },
  methods: {
    getSection(id) {
      return this.sections.filter((section) => {
        return section.id == id
      })[0] || this.sections[0]
    },
  },
}
</script>
