<template>
  <div>
    <b-form-group label="Name:" label-for="name" label-cols="1">
      <b-form-input id="name" v-model="form.name"></b-form-input>
    </b-form-group>
    <b-form-group label="E-Mail:" label-for="email" label-cols="1">
      <b-form-input id="email" v-model="form.email"></b-form-input>
    </b-form-group>
    <b-form-group label="Password:" label-for="password" label-cols="1">
      <b-form-input id="password" v-model="form.password"></b-form-input>
    </b-form-group>
    <b-form-group label="Role:" label-for="role" label-cols="1">
      <b-form-input id="role" v-model="form.role"></b-form-input>
    </b-form-group>
    <b-button variant="primary" @click="post()">Add New User</b-button>
  </div>
</template>

<script>
export default {
  name: "UserAdd",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    post() {
      const url = "http://localhost:3000/api/user/";
      this.axios
        .post(url, this.form)
        .then((res) => {
          console.log(res);
          this.clearForm();
          this.showToast("Success");
        })
        .catch((err) => {
          console.error(err);
          this.showToast("Error", "danger");
        });
    },
    showToast(message, variant = "success") {
      this.$bvToast.toast(message, {
        title: "Add New User",
        variant: variant,
        solid: true,
      });
    },
    clearForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.form.role = "";
    },
  },
};
</script>