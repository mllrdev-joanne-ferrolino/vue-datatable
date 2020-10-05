<template>
  <div>
    <data-table :values="dataSource">Customer</data-table>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue";
import { Customer } from "../models/customer";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "Customer",
  components: {
    DataTable
  },
  props: {
    dataSource: {
      type: Array as PropType<Customer[]>
    }
  }
});
</script>

<style lang="scss" scoped></style>
