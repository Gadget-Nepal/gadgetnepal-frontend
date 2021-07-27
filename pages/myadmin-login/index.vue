<template>
  <v-container fill-height fluid>
    <v-row justify="center">
      <v-col cols="4">
        <h3>Gadget Nepal</h3>
        <h4>CMS Login</h4>
        <v-text-field v-model="username" hint="gadgetnepal@gmail.com" label="Username" outlined
                      placeholder="Enter your username"
                      prepend-inner-icon="fas fa-user"></v-text-field>
        <v-text-field v-model="password" :append-icon="showPassword?'fas fa-eye':'fas fa-eye-slash'"
                      :type="showPassword?'text':'password'" label="Password" outlined
                      placeholder="Enter your password" prepend-inner-icon="fas fa-key"
                      @click:append="showPassword=!showPassword"></v-text-field>
        <v-btn block color="primary" @click="login">Login</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index.vue",
  layout: "CleanLayout",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
    }
  },
  methods: {
    login() {
      const mypointer = this;
      this.$store.dispatch("auth/login", {
        data: {
          email: mypointer.username,
          password: mypointer.password,
        }
      }).then(function (response) {
        if(response.status === 200){
          mypointer.$store.commit("auth/SET_USER",response.data.data.user);
          mypointer.$store.commit("auth/SET_ACCESS_TOKEN",response.data.data.accessToken);
          console.log(response.message);
        }
      }).catch(function (error) {
        console.log(error.message);
      });
    }
  }
}
</script>

<style scoped>
</style>
