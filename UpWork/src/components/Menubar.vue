<template>
  <div class="menubar mx-16 px-16">
    <v-card class="mx-10">
      <v-tabs v-model="tab" bg-color="white">
        <v-tab value="one">Item One</v-tab>
        <v-tab value="two">Item Two</v-tab>
        <v-tab value="three">Item Three</v-tab>
        <v-tab value="four">Item Three</v-tab>
        <v-tab value="five">Item Three</v-tab>
        <v-tab value="six">Item Three</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one"> One </v-window-item>
          <v-window-item value="two"> Two </v-window-item>
          <v-window-item value="three"> Three </v-window-item>
          <v-window-item value="four"> Three </v-window-item>
          <v-window-item value="five"> Three </v-window-item>
          <v-window-item value="six"> Three </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],

    tab: null,
  }),

  methods: {},
};
</script>

<style>
.menubar {
  width: 100rem;
}
.v-card--variant-elevated {
  box-shadow: none !important;
}
</style>
