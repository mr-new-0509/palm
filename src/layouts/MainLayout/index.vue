<template>
  <div class="bg-[#121212] pb-12">
    <div class="flex flex-col min-h-screen">
      <nav-bar />
      <div class="relative">
        <side-barr />
        <div class="ml-28">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  name: "main-layout",
  components: {
    NavBar: defineAsyncComponent(() => import("./NavBar")),
    SideBarr: defineAsyncComponent(() => import("./SideBarr")),
  },
};
</script>
