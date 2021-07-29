<template>
  <v-navigation-drawer permanent color="#2e7d32" app>
    <v-list>
      <v-list-item>
        <v-toolbar-title class="text-h5">CFS MIS</v-toolbar-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav>
      <v-list-item class="nav-item" to="/myadmin/dashboard">
        <v-icon class="mr-4">fas fa-border-all</v-icon><span>Dashboard</span>
      </v-list-item>
      <v-list-item class="nav-item" to="/myadmin/home">
        <v-icon class="mr-4">fas fa-home</v-icon><span>Home</span></v-list-item
      >
      <v-list-item class="nav-item" to="/">
        <v-icon class="mr-4">fas fa-user</v-icon>
        <span> Account </span>
      </v-list-item>
      <v-list-item class="nav-item" to="/">
        <v-icon class="mr-4">fas fa-file</v-icon>
        <span> Form </span>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
* {
  color: white !important;
}
.nav-item:hover {
  cursor: pointer;
  background-color: #0e360c;
}
</style>