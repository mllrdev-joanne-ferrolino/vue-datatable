<template>
  <div>
    <data-table :values="dataSource">Employees</data-table>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import { Employee } from "../models/employee";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Employee",
  components: {
    DataTable,
  },
  props: {
    dataSource: {
      type: Array as PropType<Employee[]>,
    },
  }
});
</script>

<style lang="scss" scoped></style>
