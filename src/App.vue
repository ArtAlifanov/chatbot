<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      Chatbot
      <v-spacer />
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  /* to offset header height */
  margin-top: 64px;
}
</style>
