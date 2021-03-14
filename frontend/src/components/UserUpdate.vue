<template>
  <div>
    <b-form-group label="ID:" label-for="id" label-cols="1">
      <b-form-input id="id" v-model="form.id" plaintext></b-form-input>
    </b-form-group>
    <b-form-group label="Name:" label-for="name" label-cols="1">
      <b-form-input id="name" v-model="form.name"></b-form-input>
    </b-form-group>
    <b-form-group label="E-Mail:" label-for="email" label-cols="1">
      <b-form-input id="email" v-model="form.email"></b-form-input>
    </b-form-group>
    <b-form-group label="Password:" label-for="password" label-cols="1">
      <b-form-input id="password" v-model="form.password"></b-form-input>
    </b-form-group>
    <b-form-group
      label="Role:"
      label-for="role"
      label-cols="1"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        v-model="form.role"
        :options="roles"
        value-field="id"
        text-field="name"
        :aria-describedby="ariaDescribedby"
        class="pt-2"
      ></b-form-radio-group>
    </b-form-group>
    <b-button variant="primary" @click="update()">Update User Info</b-button>
  </div>
</template>

<script>
export default {
  name: "UserUpdate",
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
      roles: [],
    };
  },
  methods: {
    getUser() {
      const url = `http://localhost:3000/api/user/${this.userId}`;
      this.axios
        .get(url)
        .then((res) => {
          const user = res.data[0];
          this.form.id = user.id;
          this.form.name = user.name;
          this.form.email = user.email;
          this.form.password = user.password;
          this.form.role = user.role_id;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update() {
      const url = `http://localhost:3000/api/user/${this.userId}`;
      this.axios
        .put(url, this.form)
        .then((res) => {
          console.log(res);
          this.showToast("Success");
        })
        .catch((err) => {
          console.error(err);
          this.showToast("Error", "danger");
        });
    },
    showToast(message, variant = "success") {
      this.$bvToast.toast(message, {
        title: "Update User Info",
        variant: variant,
        solid: true,
      });
    },
    getRoles() {
      const url = "http://localhost:3000/api/role/";
      this.axios
        .get(url)
        .then((res) => {
          this.roles = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getUser();
    this.getRoles();
  },
};
</script>