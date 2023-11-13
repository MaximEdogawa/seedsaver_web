<template>
  <header class="bg-neutral-50 py-2">
    
    <nav
      class="flex items-center justify-center mx-auto "
    >
    
      <div class="flex items-center px-2">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/">
            <img
              class="h-20 w-auto"
              src="@/assets/logo_main_big_black.jpg"
              alt="Seedsaver"
            />
          </a>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 px-3 py-2 rounded-md text-base font-medium"
              >OVERVIEW</router-link
            >
            <router-link
              to="/hardware"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 px-3 py-2 rounded-md text-base font-medium"
              >HARDWARE</router-link
            >
            <router-link
              to="/software"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 px-3 py-2 rounded-md text-base font-medium"
              >SOFTWARE</router-link
            >
            <router-link
              to="/explainers"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 px-3 py-2 rounded-md text-base font-medium"
              >EXPLAINERS</router-link
            >
            <router-link
              to="/donate"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 px-3 py-2 rounded-md text-base font-medium"
              >DONATE</router-link
            >
          </div>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="-mr-2 flex md:hidden">
        <button
          @click="open = !open"
          type="button"
          class="bg-neutral-50 inline-flex items-center justify-center p-2 rounded-md text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-bg-slate-900"
          :class="{ 'bg-emerald-600': open }"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>

          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu, toggle classes based on menu state. -->
    <div
      :class="{ block: open, hidden: !open }"
      class="md:hidden"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 base:px-3">
        <router-link
              to="/"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 block px-3 py-2 rounded-md text-base font-medium"
              >OVERVIEW</router-link
            >
            <router-link
              to="/hardware"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 block px-3 py-2 rounded-md text-base font-medium"
              >HARDWARE</router-link
            >
            <router-link
              to="/software"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 block px-3 py-2 rounded-md text-base font-medium"
              >SOFTWARE</router-link
            >
            <router-link
              to="/explainers"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 block px-3 py-2 rounded-md text-base font-medium"
              >EXPLAINERS</router-link
            >
            <router-link
              to="/donate"
              class="text-bg-slate-900 hover:bg-gradient-to-r hover:from-green-300 hover:to-emerald-300 block px-3 py-2 rounded-md text-base font-medium"
              >DONATE</router-link
            >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref} from "vue";
import { reactive } from "vue";
const open = ref(false);

const state = reactive({
  open: false,
});
</script>
