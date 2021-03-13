<template>
  <b-container>
    <b-row>
      <b-col class="mt-4">
        <PageHeader title="User List" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5">
        <UserTable />
        <router-link :to="{ name: 'Add' }">
          <b-button variant="primary">Add New User</b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import UserTable from "@/components/UserTable.vue";
export default {
  name: "Home",
  components: {
    PageHeader,
    UserTable,
  },
};
</script>
