<template>
  <div class="grid gap-4">
    <div class="col-span-4">
      <!-- Trade -->
      <div class="flex items-center">
        <!-- logo -->
        <div class="rounded-2xl bg-black border-2 border-white px-2 py-3">
          <img src="/assets/images/fav_logo.png" alt="palm" width="40" />
        </div>

        <!-- title and token address -->
        <div class="ml-5">
          <p class="text-white text-2xl font-bold">ETH/Palm</p>
          <p class="text-[#9596A3] text-md font-semibold">
            Palm Token {{ handleLongText(palmTokenAddress, 6, 6) }}
          </p>
        </div>

        <!-- trade button -->
        <button
          class="
            ml-8
            py-2
            px-6
            rounded-2xl
            text-xl text-white
            font-semibold
            border-2 border-[#9596A3]
            transition-all
            hover:bg-[#9596A3]
          "
        >
          Trade
        </button>
      </div>

      <!-- Functional buttons -->
      <div class="mt-5 flex items-center">
        <!-- look out button -->
        <button
          class="
            p-2
            text-2xl text-[#9596A3]
            rounded-xl
            border-2 border-[#9596A3]
            transition-all
            hover:bg-[#9596A3] hover:text-black
          "
        >
          <Icon icon="heroicons-solid:logout" />
        </button>

        <!-- share button -->
        <button
          class="
            ml-2
            p-2
            text-2xl text-[#9596A3]
            rounded-xl
            border-2 border-[#9596A3]
            transition-all
            hover:bg-[#9596A3] hover:text-black
          "
        >
          <Icon icon="bxs:share-alt" />
        </button>
      </div>

      <!-- Price -->
      <p class="mt-6 text-5xl text-white font-bold">
        983.47 <span class="text-3xl">USD</span>
      </p>
      <div class="mt-2 flex items-center">
        <Icon icon="cib:ethereum" class="text-lg text-[#9596A3]" />
        <p class="ml-1 text-[#9596A3] text-sm font-bold">0.24984</p>
      </div>

      <!-- Cards of meta info -->
      <div class=""></div>
    </div>
    <div class="col-span-8"></div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { PALM_TOKEN_ADDRESS } from "../../utils/constants";
import { handleLongText } from "../../utils/functions";

export default {
  name: "dashboard-page",
  components: {
    Icon,
  },
  data: () => ({
    palmTokenAddress: PALM_TOKEN_ADDRESS,
  }),
  methods: {
    handleLongText,
  },
};
</script>

<style>
</style>