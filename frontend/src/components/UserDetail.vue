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
    <b-form-group label="Role:" label-for="role" label-cols="1">
      <b-form-input id="role" v-model="form.role" plaintext></b-form-input>
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