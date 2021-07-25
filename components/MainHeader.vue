<template>
  <v-app-bar app absolute color="transparent" flat>
<!--    <nuxt-link to="/">-->
<!--      <v-img  width="250px" src="/images/sarangcode_logo_right.png"></v-img>-->
<!--    </nuxt-link>-->



    <v-btn class="custom-menu-button" text nuxt plain  to="/">Home</v-btn>
    <v-btn class="custom-menu-button" text nuxt plain to="news">News</v-btn>
    <v-btn class="custom-menu-button" text nuxt plain to="reviews">Reviews</v-btn>
    <v-btn class="custom-menu-button" text nuxt plain to="videos">Videos</v-btn>
    <v-btn class="custom-menu-button" text nuxt plain to="gadget">Gadget Finder</v-btn>
    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    <v-btn class="custom-menu-button" text nuxt to="contact">Contact Us</v-btn>
    <v-btn class="custom-menu-button button4" rounded depressed nuxt to="about">About Us</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped>

</style>
