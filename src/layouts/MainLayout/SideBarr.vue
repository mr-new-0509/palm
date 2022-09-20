<template>
  <div class="fixed top-30 left-0 flex flex-col items-center pl-6 pr-8">
    <!-- Home button -->
    <router-link class="mt-12 text-[#9596A3] text-2xl" to="/">
      <Icon icon="ant-design:home-outlined" />
    </router-link>

    <!-- Other navigate links -->
    <div
      class="
        mt-8
        pt-3
        pb-6
        px-2
        rounded-3xl
        bg-[#2EB9FF]/[12%]
        flex flex-col
        items-center
      "
    >
      <template v-for="linkItem in links" :key="linkItem.to">
        <router-link
          v-if="linkItem.to === path"
          class="
            mt-3
            rounded-full
            bg-[#2EB9FF]
            py-2
            px-2
            text-lg text-white
            flex flex-col
            justify-center
          "
          :to="linkItem.to"
        >
          <Icon :icon="linkItem.icon" />
        </router-link>
        <router-link v-else class="mt-3 text-2xl text-white" :to="linkItem.to">
          <Icon :icon="linkItem.icon" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "side-barr",
  components: {
    Icon,
  },
  data: () => ({
    links: [
      {
        icon: "humbleicons:dashboard",
        to: "/",
      },
      {
        icon: "ic:sharp-swap-horiz",
        to: "/swap",
      },
      {
        icon: "fluent:lock-closed-24-regular",
        to: "/staking",
      },
    ],
  }),
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>