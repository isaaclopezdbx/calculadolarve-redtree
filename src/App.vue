<template>
  <v-app>
    <NavBar />
    <v-container > 
      <ContentShow />
    </v-container>
      <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ContentShow from "./components/ContentShow.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    NavBar,
    ContentShow,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style >
.theme--light.v-application {
  background: #519872;
}
.container{
      max-width: 560px;
}
</style>
