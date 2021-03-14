<template>
  <div>
    <b-form-group label="ID:" label-for="id" label-cols="1">
      <b-form-input id="id" v-model="form.id" plaintext></b-form-input>
    </b-form-group>
    <b-form-group label="Name:" label-for="name" label-cols="1">
      <b-form-input id="name" v-model="form.name" plaintext></b-form-input>
    </b-form-group>
    <b-form-group label="E-Mail:" label-for="email" label-cols="1">
      <b-form-input id="email" v-model="form.email" plaintext></b-form-input>
    </b-form-group>
    <b-form-group label="Password:" label-for="password" label-cols="1">
      <b-form-input
        id="password"
        v-model="form.password"
        plaintext
      ></b-form-input>
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
        disabled
      ></b-form-radio-group>
    </b-form-group>
  </div>
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
      roles: [],
    };
  },
  methods: {
    getUsers() {
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
    this.getUsers();
    this.getRoles();
  },
};
</script>