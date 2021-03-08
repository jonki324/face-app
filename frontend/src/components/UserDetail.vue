<template>
  <div>{{ form }}</div>
</template>

<script>
export default {
  name: "UserDetail",
  props: {
    userId: Number,
  },
  data() {
    return {
      form: {
        id: "",
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  mounted() {
    let url = `http://localhost:3000/api/user/${this.userId}`;
    this.axios.get(url).then((res) => {
      console.log(res.data);
      let user = res.data[0];
      this.form.id = user.id;
      this.form.name = user.name;
      this.form.email = user.email;
      this.form.password = user.password;
      this.form.role = user.role_id;
    });
  },
};
</script>