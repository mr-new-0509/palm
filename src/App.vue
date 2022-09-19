<template>
  <main-layout />
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  components: {
    MainLayout: defineAsyncComponent(() => import("./layouts/MainLayout")),
  },
};
</script>

