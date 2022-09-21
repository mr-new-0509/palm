<template>
  <div class="container mx-auto py-12">
    <div
      class="max-w-md mx-auto rounded-3xl px-6 py-6 border-2 border-[#8D8D8D]"
    >
      <div class="flex justify-end">
        <!-- Setting button -->
        <button
          class="
            text-2xl text-white
            font-bold
            bg-[#3B3C4E]
            rounded-lg
            p-2
            transition-all
            hover:bg-gray-600
          "
        >
          <Icon icon="ant-design:setting-outlined" />
        </button>
      </div>

      <!-- Input busd -->
      <div class="mt-5">
        <!-- label -->
        <div class="flex items-center justify-between">
          <span class="text-md text-[#8B8CA7]">Pay</span>
          <span class="text-md text-[#8B8CA7]">Available 500</span>
        </div>

        <!-- input -->
        <div class="w-full mt-3">
          <div class="relative">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <div class="flex items-center">
                <img
                  src="/assets/images/from-crypto.png"
                  alt="BUSD"
                  width="25"
                />
                <span class="text-lg text-white font-bold ml-2">BUSD</span>
              </div>
            </div>

            <input
              id="search"
              name="search"
              class="
                w-full
                pl-28
                pr-6
                py-3
                border border-[#575757]
                bg-[#121212]
                text-2xl text-gray-300
                font-bold
                placeholder-gray-400
                focus:outline-none focus:text-gray-200
                rounded-2xl
                direction-rtl
              "
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <!-- Swap icon -->
      <div class="flex justify-center mt-5">
        <Icon icon="bi:arrow-down-circle" class="text-2xl text-white" />
      </div>

      <!-- Input token -->
      <div class="mt-5">
        <!-- label -->
        <div class="flex items-center justify-between">
          <span class="text-md text-[#8B8CA7]">Receive (Estimated)</span>
          <span class="text-md text-[#8B8CA7]">Available 1,200</span>
        </div>

        <!-- input -->
        <div class="w-full mt-3">
          <div class="relative">
            <div
              class="
                absolute
                inset-y-0
                left-0
                pl-3
                flex
                items-center
                pointer-events-none
              "
            >
              <div class="flex items-center">
                <img src="/assets/images/fav_logo.svg" alt="BUSD" width="25" />
                <span class="text-lg text-white font-bold ml-2">Palm</span>
              </div>
            </div>

            <input
              id="search"
              name="search"
              class="
                w-full
                pl-28
                pr-6
                py-3
                border border-[#575757]
                bg-[#121212]
                text-2xl text-gray-300
                font-bold
                placeholder-gray-400
                focus:outline-none focus:text-gray-200
                rounded-2xl
                direction-rtl
              "
              placeholder="0"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mt-5">
        <span class="text-md text-[#8B8CA7]">1 BUSD = 1.0005 Palm</span>
        <Icon icon="heroicons-solid:refresh" class="text-white text-xl ml-3" />
      </div>

      <!-- Button -->
      <button
        class="w-full mt-5 bg-[#1e1e1e] rounded-2xl text-[#aaaaaa] text-xl py-3"
      >
        Confirm Order
      </button>

      <p class="text-md text-[#8B8CA7] text-center mt-1">
        Enter an amount to see more trading details
      </p>

      <!-- Stake button -->
      <button
        class="
          flex
          items-center
          text-md text-[#8B8CA7]
          mt-5
          hover:text-white
          transition-all
        "
      >
        Stake
        <Icon icon="eva:question-mark-circle-outline" class="text-xl ml-1" />
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "swap-page",

  components: {
    Icon,
  },

  data: () => ({
    swappingAmount: "",
    swappedAmount: "",
  }),

  methods: {},
};
</script>

<style>
</style>