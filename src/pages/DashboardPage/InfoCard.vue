<template>
  <div
    class="rounded-2xl bg-[#2d2d2d] px-4 py-5 flex items-center"
  >
    <!-- Icon -->
    <div class="rounded-2xl px-2 py-4" :class="[iconBgColorClass]">
      <Icon :icon="icon" class="text-3xl" :class="[iconColorClass]" />
    </div>

    <!-- label and value -->
    <div class="ml-2">
      <p class="text-sm text-[#9596A3] font-semibold">{{ label }}</p>

      <div v-if="isMoney === true" class="flex items-center">
        <Icon
          icon="material-symbols:attach-money"
          class="text-xl text-white font-bold"
        />
        <p class="text-md text-white font-semibold">{{ value }}</p>
      </div>
      <p v-else class="text-md text-white font-semibold">{{ value }}</p>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "info-card",
  components: {
    Icon,
  },
  props: {
    icon: String,
    iconBgColorClass: String,
    iconColorClass: String,
    label: String,
    value: String,
    isMoney: Boolean,
  },
};
</script>
