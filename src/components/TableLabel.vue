<template>
  <div class="p-4">
    <span :class="`p-2 px-4 py-2 text-white rounded-full bg-${color}-400`">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "table-label",
  props: {
    color: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped></style>
