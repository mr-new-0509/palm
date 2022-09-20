<template>
  <div class="flex flex-col h-screen bg-[#121212]">
    <nav-bar />
    <div class="grow-1 flex">
      <side-bar />
      <div class="grow-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default {
  name: "main-layout",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
</style>