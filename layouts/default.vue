<template>
  <v-app>
    <WebsiteHeader/>
    <v-main>
      <v-container fluid>
        <Nuxt/>
      </v-container>
    </v-main>
    <WebsiteFooter/>
  </v-app>
</template>

<script>
import WebsiteHeader from "../components/WebsiteHeader";
import WebsiteFooter from "../components/WebsiteFooter";

export default {
  components: {WebsiteFooter, WebsiteHeader}
}
</script>

<style>

</style>
