<template>
  <div>
    <table class="table-auto border px-4 py-2">
      <thead>
        <tr>
          <th
            class="border border-gray-400 px-4 py-2 text-gray-800"
            v-for="(header, index) in columnHeaders"
            :key="index"
          >
            {{ header | capitalize }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(header, index) in columnHeaders" :key="index">
            {{ row[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
export default defineComponent({
  name: "data-table",
  props: {
    values: {
      type: Array as any,
    },
  },
  filters:{
    capitalize: function(value: string) {
      if(!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  setup(prop) {
    const data = prop.values ?? [];
    const columnHeaders = computed(() => Object.keys(data[0]));

    return {
      data,
      columnHeaders
    };
  },
});
</script>

<style lang="scss" scoped>
table th:hover {
  background: #717699;
  color: #ffffff;
}
</style>
