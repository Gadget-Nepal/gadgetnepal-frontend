<template>
  <v-app>
    <MyAdminHeader/>
    <MyAdminNavigationDrawer/>
    <v-main>
      <v-container fluid>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MyAdminHeader from "../components/MyAdminHeader";
import MyAdminNavigationDrawer from "../components/MyAdminNavigationDrawer";

export default {
  name: "myadmin",
  components: {MyAdminNavigationDrawer, MyAdminHeader}
}
</script>

<style scoped>

</style>
