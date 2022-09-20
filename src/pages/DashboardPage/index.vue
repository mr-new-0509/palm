<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-1">
      <!-- Trade -->
      <div class="flex items-center">
        <!-- logo -->
        <div class="rounded-2xl bg-black border-2 border-white px-2 py-3">
          <img src="/assets/images/fav_logo.svg" alt="palm" width="40" />
        </div>

        <!-- title and token address -->
        <div class="ml-5">
          <p class="text-white text-2xl font-bold">ETH/Palm</p>
          <p class="text-[#9596A3] text-md font-semibold">
            Palm Token {{ handleLongText(palmTokenAddress, 6, 3) }}
          </p>
        </div>

        <!-- trade button -->
        <button
          class="
            ml-12
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
      <div class="grid grid-cols-2 gap-4 mt-6">
        <div
          class="col-span-1"
          v-for="tokenInfo in tokenInfos"
          :key="tokenInfo.label"
        >
          <info-card
            :icon="tokenInfo.icon"
            :iconBgColorClass="tokenInfo.iconBgColorClass"
            :iconColorClass="tokenInfo.iconColorClass"
            :label="tokenInfo.label"
            :value="tokenInfo.value"
            :isMoney="tokenInfo.isMoney"
          />
        </div>
      </div>
    </div>
    <div class="col-span-2"></div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { PALM_TOKEN_ADDRESS } from "../../utils/constants";
import { handleLongText } from "../../utils/functions";
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "dashboard-page",
  components: {
    Icon,
    InfoCard: defineAsyncComponent(() => import("./InfoCard.vue")),
  },
  data: () => ({
    palmTokenAddress: PALM_TOKEN_ADDRESS,
    tokenInfos: [
      {
        icon: "material-symbols:attach-money",
        iconColorClass: "text-[#4AFFDE]",
        iconBgColorClass: "bg-[#4AFFDE]/[18%]",
        label: "Total Liquidity",
        value: "262000.56",
        isMoney: true,
      },
      {
        icon: "simple-line-icons:graph",
        iconColorClass: "text-[#4A6DFF]",
        iconBgColorClass: "bg-[#4A6DFF]/[18%]",
        label: "24 Hour Volume",
        value: "2372139.74",
        isMoney: true,
      },
      {
        icon: "fluent:lock-closed-24-regular",
        iconColorClass: "text-[#FFC14A]",
        iconBgColorClass: "bg-[#FFC14A]/[18%]",
        label: "Total Staked",
        value: "153234.80",
        isMoney: true,
      },
      {
        icon: "bx:group",
        iconColorClass: "text-[#9A4AFF]",
        iconBgColorClass: "bg-[#9A4AFF]/[18%]",
        label: "Holders",
        value: "1386",
        isMoney: false,
      },
      {
        icon: "ep:histogram",
        iconColorClass: "text-[#BE7BBB]",
        iconBgColorClass: "bg-[#BE7BBB]/[18%]",
        label: "Market Cap",
        value: "1153234",
        isMoney: true,
      },
      {
        icon: "icon-park-outline:shoulder-bag",
        iconColor: "#41709C",
        iconColorClass: "text-[#41709C]",
        iconBgColorClass: "bg-[#41709C]/[18%]",
        label: "Supply",
        value: "200000000",
        isMoney: true,
      },
    ],
  }),
  methods: {
    handleLongText,
  },
};
</script>

<style>
</style>