<template>
  <div>
    <table class="justify-center text-base border border-gray-500">
      <thead>
        <tr>
          <th
            class="px-4 py-4 bg-white"
            v-for="(header, index) in formattedHeaders"
            :key="index"
          >
            <slot name="header" :header="header"></slot>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
          class="py-4 bg-white border border-gray-500 hover:bg-gray-200"
        >
          <td
            class="px-2"
            v-for="(header, index) in columnHeaders"
            :key="index"
          >
            <slot :name="header" :data="item[header]">{{ item[header] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, PropType } from "vue";
export default defineComponent({
  name: "data-table",
  props: {
    items: {
      type: Array as PropType<any[]>,
    },
  },
  setup(props) {
    const data = reactive(props.items ?? []);
    const columnHeaders = computed(() => Object.keys(data[0]));

    function formatHeaders(word: string) {
      const newWord = word.charAt(0).toUpperCase() + word.slice(1);
      return newWord.replace(/([A-Z])/g, " $1").trim();
    }

    const formattedHeaders = computed(() =>
      columnHeaders.value.map((x) => formatHeaders(x))
    );

    return {
      data,
      columnHeaders,
      formattedHeaders,
    };
  },
});
</script>

<style lang="scss" scoped></style>
