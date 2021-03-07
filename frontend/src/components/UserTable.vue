<template>
  <b-table striped hover :items="users"></b-table>
</template>

<script>
export default {
  name: "UserTable",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.axios.get("http://localhost:3000/api/user").then((res) => {
      this.users = res.data;
    });
  },
};
</script>