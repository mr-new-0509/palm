<template>
  <div
    class="mt-4 bg-[#2d2d2d] rounded-xl px-4 py-6 flex items-center justify-between"
  >
    <!-- date -->
    <span class="text-[#9596A3] text-sm">{{ historyItem.date }}</span>

    <!-- price in usd -->
    <div class="flex items-center">
      <span class="text-[#9596A3] text-sm">$ {{ historyItem.priceInUsd }}</span>
      <Icon
        icon="bi:graph-up-arrow"
        class="ml-2 text-lg text-[#4AFFDE]"
        v-if="historyItem.status === statusUp"
      />
      <Icon
        icon="bi:graph-down-arrow"
        class="ml-2 text-lg text-[#FF6370]"
        v-else
      />
    </div>

    <!-- price in eth -->
    <div class="flex items-center">
      <Icon icon="cib:ethereum" class="text-sm text-[#9596A3]" />
      <span class="text-[#9596A3] text-sm">{{ historyItem.priceInEth }}</span>
    </div>

    <span class="text-[#9596A3] text-sm">{{ historyItem.priceInEth }}</span>

    <span class="text-[#9596A3] text-sm">{{ historyItem.priceInEth }}</span>

    <span class="text-[#9596A3] text-sm">{{
      visibleContractAddress
    }}</span>

    <button class="text-[#9596A3] text-md">
      <Icon icon="ant-design:share-alt-outlined" />
    </button>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { UP, DOWN } from "../../utils/constants";
import { handleLongText } from "@/utils/functions";

export default {
  name: "table-row",
  components: {
    Icon,
  },
  props: {
    historyItem: Object,
  },
  data: () => ({
    statusUp: UP,
    statusDown: DOWN,
  }),
  computed: {
    visibleContractAddress() {
      console.log(this.historyItem.contractAddress);
      return handleLongText(this.historyItem.contractAddress, 6, 3);
    },
  },
};
</script>