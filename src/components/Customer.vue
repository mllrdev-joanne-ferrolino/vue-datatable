<template>
  <div>
    <data-table :values="dataSource" v-slot="{ header, row }">
      <div class="text-blue-500">{{ header }}</div>
      <div class="hover:text-blue-500">{{ row }}</div>
    </data-table>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import { ICustomer } from "../models/ICustomer";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Customer",
  components: {
    DataTable,
  },
  props: {
    dataSource: {
      type: Array as PropType<ICustomer[]>,
    },
  },
});
</script>

<style lang="scss" scoped></style>
