<template>
  <div class="home">
    <data-table :values="values"></data-table>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DataTable from "@/components/DataTable.vue";
import json from "@/data/customer-info.json";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    DataTable
  },
  setup(){
    function castType<T>(data: T){
      return data;
    }
    const values = castType(json.customer);
    return { values };
  }
});
</script>
