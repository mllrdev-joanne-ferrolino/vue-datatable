<template>
  <div>
    <data-table :items="dataSource">
      <template #header="{ header }">{{ header }} </template>
      <template #image="{ data }">
        <img :src="data" style="height:100px"/>
      </template>
      <template #proficiency="{ data }">
        <progress :value="data" max="100"></progress>
        <div>{{ data }}%</div>
      </template>
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

<style lang="scss" scoped>
progress[value]::-webkit-progress-value {
  background-color: #48bb78;
  border-radius: 2px;
}

progress[value]::-webkit-progress-bar {
  background-color: #cbd5ec;
  border-radius: 2px;
}
</style>
