<template>
  <div class="menubar mx-16 px-16">
    <v-card class="mx-10">
      <v-tabs v-model="tab" bg-color="white">
        <v-tab v-for="(item, index) in items" :key="index">
          <template v-if="item.hide">
            <router-link :to="item.path" class="nav-link">
              {{ item.tab }}
            </router-link>
          </template>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { tab: "Development & IT", path: "main", hide: true },
      { tab: "AI Services", path: "product", hide: true },
      { tab: "Design & Creative", path: "test", hide: true },
      { tab: "Click Me4", path: "asdasd", hide: true },
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
a {
  background-color: transparent;
  text-decoration: none;
  color: black;
}
</style>
