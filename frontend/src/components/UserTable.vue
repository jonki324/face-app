<template>
  <b-table striped hover :items="users" :fields="fields">
    <template #cell(action)="row">
      <router-link :to="{ name: 'Detail', params: { id: row.item.id } }">
        <b-button variant="primary">Detail</b-button>
      </router-link>
      <b-button variant="success" to="/about">Edit</b-button>
      <b-button variant="danger" to="/about">Delete</b-button>
    </template>
  </b-table>
</template>

<script>
export default {
  name: "UserTable",
  data() {
    return {
      users: [],
      fields: ["id", "name", "email", "action"],
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/api/user").then((res) => {
      this.users = res.data;
    });
  },
};
</script>