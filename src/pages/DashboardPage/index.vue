<template>
  <div class="grid grid-cols-3 gap-8 pb-12">
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

      <!-- Tokens Burnt to Date -->
      <div class="mt-12 flex justify-between">
        <div class="mt-4">
          <p class="text-xl text-white font-semibold">Tokens Burnt to Date</p>
          <p class="text-4xl text-white font-bold">52%</p>
        </div>

        <Doughnut
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :plugins="plugins"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height"
        />
      </div>
    </div>

    <div class="col-span-2">
      <!-- Chart -->
      <div class="bg-[#2D2D2D] w-full h-96 rounded-2xl"></div>

      <!-- Trade history -->
      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-end">
          <p class="text-2xl text-white font-semibold">Trade History</p>
          <Icon
            icon="dashicons:arrow-down-alt2"
            class="ml-1 text-2xl text-white"
          />
        </div>

        <div class="flex items-center">
          <Icon icon="bi:funnel" class="text-white text-xl" />
          <p class="ml-3 text-md text-white font-semibold">ETH</p>
          <p class="ml-3 text-sm text-[#4D506A] font-semibold">
            Last 521 Trades
          </p>
        </div>
      </div>

      <!-- Table -->
      <div class="mt-3">
        <template v-for="(historyItem, index) in tradeHistories" :key="index">
          <table-row :historyItem="historyItem"></table-row>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { defineAsyncComponent } from "@vue/runtime-core";
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import { PALM_TOKEN_ADDRESS, UP, DOWN } from "../../utils/constants";
import { handleLongText } from "../../utils/functions";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: "dashboard-page",
  components: {
    Icon,
    Doughnut,
    InfoCard: defineAsyncComponent(() => import("./InfoCard.vue")),
    TableRow: defineAsyncComponent(() => import("./TableRow.vue")),
  },

  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 200,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
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
        isMoney: false,
      },
    ],
    chartData: {
      datasets: [
        {
          backgroundColor: ["#2EB9FF", "#404040"],
          data: [45, 55],
        },
      ],
    },
    chartOptions: {
      responsive: true,
    },
    tradeHistories: [
      {
        date: "21.05.10",
        priceInUsd: 981.47577,
        status: UP,
        priceInEth: 0.24984,
        contractAddress: PALM_TOKEN_ADDRESS,
      },
      {
        date: "21.05.10",
        priceInUsd: 981.47577,
        status: DOWN,
        priceInEth: 0.24984,
        contractAddress: PALM_TOKEN_ADDRESS,
      },
      {
        date: "21.05.10",
        priceInUsd: 981.47577,
        status: UP,
        priceInEth: 0.24984,
        contractAddress: PALM_TOKEN_ADDRESS,
      },
      {
        date: "21.05.10",
        priceInUsd: 981.47577,
        status: UP,
        priceInEth: 0.24984,
        contractAddress: PALM_TOKEN_ADDRESS,
      },
      {
        date: "21.05.10",
        priceInUsd: 981.47577,
        status: UP,
        priceInEth: 0.24984,
        contractAddress: PALM_TOKEN_ADDRESS,
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