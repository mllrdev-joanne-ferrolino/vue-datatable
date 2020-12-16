<template>
  <div>
    <data-table :items="dataSource">
      <template #header="{ data }">
        <div class="text-blue-500">{{ data }}</div>
      </template>
      <template #purchases="{ data }">
        <table-label :color="getColor(data)">{{ data }}</table-label>
      </template>
      <template #address="{ data }">
        <i>{{ data }}</i>
      </template>
    </data-table>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import TableLabel from "@/components/TableLabel.vue";
import { ICustomer } from "../models/ICustomer";

import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Customer",
  components: {
    DataTable,
    TableLabel,
  },
  props: {
    dataSource: {
      type: Array as PropType<ICustomer[]>,
    },
  },
  setup() {
    function getColor(purchases: number) {
      return purchases > 10 ? "blue" : "green";
    }

    return { getColor };
  },
});
</script>

<style lang="scss" scoped></style>
