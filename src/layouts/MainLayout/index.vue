<template>
  <div class="bg-[#121212] pb-12">
    <div class="flex flex-col min-h-screen">
      <nav-bar />
      <div class="relative px-12">
        <side-barr />
        <div class="container pl-12">
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
