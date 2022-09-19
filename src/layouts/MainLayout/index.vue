<template>
  <div class="h-screen bg-[#121212]">
    <nav-bar />
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  name: "main-layout",
  components: {
    NavBar: defineAsyncComponent(() => import("./NavBar")),
  },
};
</script>

<style>
</style>