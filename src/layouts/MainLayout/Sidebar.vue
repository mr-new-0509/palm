<template>
  <div class="flex flex-col items-center px-6">
    <!-- Home button -->
    <router-link class="mt-12 text-[#9596A3] text-2xl" to="/">
      <iconify-icon icon="ant-design:home-outlined" />
    </router-link>

    <div
      class="
        mt-8
        py-6
        px-2
        rounded-3xl
        bg-[#2EB9FF]/[12%]
        flex flex-col
        items-center
      "
    >
      <!-- Dashboard button -->
      <router-link
        class="
          rounded-full
          bg-[#2EB9FF]
          py-2
          px-2
          text-lg text-white
          flex flex-col
          justify-center
        "
        to="/dashboard"
      >
        <iconify-icon icon="humbleicons:dashboard" />
      </router-link>

      <!-- Swap button -->
      <router-link class="mt-3 text-2xl text-white" to="/swap">
        <iconify-icon icon="ic:sharp-swap-horiz" />
      </router-link>

      <!-- Staking button -->
      <router-link class="mt-3 text-2xl text-white" to="/staking">
        <iconify-icon icon="fluent:lock-closed-24-regular" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-bar",
};
</script>