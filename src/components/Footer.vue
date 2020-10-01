<template>
  <v-footer id="footer">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }} <a href="">RedTree</a></div>
    <v-spacer></v-spacer>
  </v-footer>
</template>
<script>
export default {};
</script>

<style>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
}
</style>
