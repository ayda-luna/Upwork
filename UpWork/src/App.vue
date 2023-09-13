<template>
  <div>
    <v-container>
      <Navbar></Navbar>
    </v-container>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    SvgIcon,
  },
  data() {
    return {
      path: mdiAccount,
    };
  },
};
</script>

<style></style>
