<template>
  <div>
    <data-table :values="dataSource" v-slot="{ header, row }">
      <div class="text-green-700">{{ header }}</div>
      <div class="hover:text-green-500">{{ row }}</div>
    </data-table>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import { IEmployee } from "../models/IEmployee";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Employee",
  components: {
    DataTable,
  },
  props: {
    dataSource: {
      type: Array as PropType<IEmployee[]>,
    },
  },
});
</script>

<style lang="scss" scoped></style>
