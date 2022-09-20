<template>
  <div class="flex flex-col h-screen bg-[#121212]">
    <nav-bar />
    <div class="grow-1 flex">
      <side-barr />
      <div class="grow-1">
        <router-view />
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
    SideBarr: defineAsyncComponent(() => import("./SideBarr"))
  },
};
</script>
