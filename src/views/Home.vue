<template>
  <div class="grid grid-cols-2 gap-5 justify-items-center home">
    <customer :dataSource="customerStore"></customer>
    <employee :dataSource="employeeStore"></employee>
  </div>
</template>

<script lang="ts">
import Customer from "@/components/Customer.vue";
import Employee from "@/components/Employee.vue";
import { useStore } from '@/composables/use-store';
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Customer,
    Employee
  },
  setup() {
    const { customerStore, employeeStore } = useStore();
    return { customerStore, employeeStore };
  }
});
</script>
