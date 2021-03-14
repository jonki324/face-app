<template>
  <b-table striped hover :items="users" :fields="fields">
    <template #cell(action)="row">
      <router-link :to="{ name: 'Detail', params: { id: row.item.id } }">
        <b-button variant="info">Detail</b-button>
      </router-link>
      <router-link :to="{ name: 'Update', params: { id: row.item.id } }">
        <b-button variant="success">Edit</b-button>
      </router-link>
      <b-button variant="danger" @click="delUser(row.item.id)">Delete</b-button>
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
  methods: {
    getUsers() {
      this.axios.get("http://localhost:3000/api/user").then((res) => {
        this.users = res.data;
      });
    },
    delUser(id) {
      this.axios
        .delete(`http://localhost:3000/api/user/${id}`)
        .then((res) => {
          console.log(res);
          this.getUsers();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>