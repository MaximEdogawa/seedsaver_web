<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
</script>
