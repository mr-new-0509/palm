<template>
  <div class="flex flex-col items-center px-6">
    <!-- Home button -->
    <button class="mt-12 text-[#9596A3] text-2xl">
      <iconify-icon icon="ant-design:home-outlined" />
    </button>

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
      <button
        class="
          rounded-full
          bg-[#2EB9FF]
          py-2
          px-2
          text-lg text-white
          flex flex-col
          justify-center
        "
      >
        <iconify-icon icon="humbleicons:dashboard" />
      </button>

      <!-- Swap button -->
      <button class="mt-3 text-2xl text-white">
        <iconify-icon icon="ic:sharp-swap-horiz" />
      </button>

      <!-- Staking button -->
      <button class="mt-3 text-2xl text-white">
        <iconify-icon icon="fluent:lock-closed-24-regular" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-bar",
};
</script>