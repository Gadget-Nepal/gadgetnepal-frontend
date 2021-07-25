<template>
  <v-app>
    <v-container fluid>
      <div>
        <h1>Homepage</h1>
        <p>This is homepage</p>


      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28265.26275162639!2d85.28375314870772!3d27.681515958627113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb235778191bb3%3A0x608016ce5587e64c!2sBigyapan!5e0!3m2!1sen!2snp!4v1624167742461!5m2!1sen!2snp" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </v-container>

  </v-app>
</template>

<script>



export default {

  head() {
    return {
      title: 'GadgetNepal',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Home Page of GadgetNepal'
      }
      ]

    }
  }
}
</script>

<style lang="css">

</style>
