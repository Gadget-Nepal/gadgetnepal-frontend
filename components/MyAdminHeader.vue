<template>
  <v-app-bar app>
    <v-icon class="mx-2" size="1rem">fas fa-ellipsis-h</v-icon>
    <v-icon class="mx-2" size="1rem">fas fa-arrow-left</v-icon>
    <v-icon class="mx-2" size="1rem">fas fa-arrow-right</v-icon>
    <v-icon class="mx-2" size="1rem">fas fa-redo-alt</v-icon>
    <v-spacer></v-spacer>
    <v-icon @click="displayToggle = !displayToggle" size="2.5rem"
      >fas fa-user-circle</v-icon
    >
    <v-card class="profile-card" :class="`${displayToggle ? 'show' : ''}`">
      <v-card-title>
        <v-icon class="mr-2" size="">fas fa-user</v-icon>
        CFS MIS
      </v-card-title>
      <v-card-subtitle> this is card subtitle </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text> Lorem ipsum dolor sit amet. </v-card-text>
      <v-btn class="ml-4 mb-4">
        <v-icon class="mr-1" size="1rem">fas fa-sign-out-alt</v-icon>
        Log Out</v-btn
      >
    </v-card>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      displayToggle: false,
    };
  },
};
</script>

<style scoped>
.profile-card {
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
}
.show {
  display: block;
}
</style>


