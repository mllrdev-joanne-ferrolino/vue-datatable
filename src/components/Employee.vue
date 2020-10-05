<template>
  <div>
    <data-table :values="dataSource">Employees</data-table>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import { IEmployee } from "../models/employee";
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
  }
});
</script>

<style lang="scss" scoped></style>
