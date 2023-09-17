<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-6">
          <Navbar></Navbar>
        </v-sheet>
      </v-col>
      <v-col cols="12">
        <v-sheet class="pa-6">
          <Menubar></Menubar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import Navbar from "./components/Navbar.vue";
import Menubar from "./components/Menubar.vue";
export default {
  components: {
    Navbar,
    SvgIcon,
    Menubar,
  },
  data() {
    return {
      path: mdiAccount,
    };
  },
};
</script>

<style></style>
