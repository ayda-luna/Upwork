<template>
  <v-layout>
    <v-app-bar density="compact">
      <template v-slot:prepend>
        <div class="nav-logo" @click="redirectToMainPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 28"
            role="img"
            aria-hidden="true"
          >
            <path
              fill="#14a800"
              d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
            ></path>
            <path
              fill="#14a800"
              d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
            ></path>
            <polygon
              fill="#14a800"
              points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
            ></polygon>
            <path
              fill="#14a800"
              d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
            ></path>
            <path
              fill="#14a800"
              d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
            ></path>
          </svg>
        </div>
        <div class="center-menubar">
          <v-card>
            <v-btn
              variant="tonal"
              @click="showTabs = !showTabs"
              class="text-h6"
            >
              First Tab<v-icon icon="mdi-chevron-down"></v-icon>
            </v-btn>
          </v-card>
          <v-card>
            <v-btn
              variant="tonal"
              @click="showTabs = !showTabs"
              class="text-h6"
            >
              First Tab<v-icon icon="mdi-chevron-down"></v-icon>
            </v-btn>
          </v-card>
          <v-card>
            <v-btn
              variant="tonal"
              @click="showTabs = !showTabs"
              class="text-h6"
            >
              First Tab<v-icon icon="mdi-chevron-down"></v-icon>
            </v-btn>
          </v-card>

          <v-card>
            <v-btn
              variant="tonal"
              @click="showTabs = !showTabs"
              class="text-h6"
            >
              First Tab<v-icon icon="mdi-chevron-down"></v-icon>
            </v-btn>
            <!-- <v-list> -->
            <!-- <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                > -->
            <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->

            <!-- </v-list-item> -->
          </v-card>
        </div>
        <div></div>

        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card
              height="40"
              width="600"
              elevation="0"
              class="rounded-pill"
              max-width="400"
              v-bind="props"
              :color="isHovering ? 'gray' : undefined"
            >
              <v-text-field
                density="compact"
                label="Search templates"
                prepend-inner-icon="mdi-magnify"
                single-line
                @click:prepend="onClick"
                hide-details
              >
                <template #append-inner>
                  <v-divider vertical></v-divider>
                  <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                      <v-btn
                        class="rounded-pill"
                        color="green-darken-3 ma-2"
                        v-bind="props"
                      >
                        Talent <v-icon icon="mdi-chevron-down"></v-icon>
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-text-field>
            </v-card>
          </template>
        </v-hover>

        <v-btn class="rounded-pill oio"> Log in </v-btn>
        <v-btn
          class="rounded-pill h-25 uoi"
          color="green-darken-3 "
          variant="flat"
        >
          Sign up
        </v-btn>
      </template>
    </v-app-bar>
    <v-card v-if="showTabs" class="ma-15">
      <div class="d-flex flex-row mx-15 px-15">
        <v-tabs v-model="tab" direction="vertical" color="green">
          <router-link to="/dropdown"
            ><v-tab value="option-1"> Talent Marketplace </v-tab></router-link
          >
          <v-tab value="option-2"> Option 2 </v-tab>
          <v-tab value="option-3"> Option 3 </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="option-1">
            <v-card flat>
              <v-card-text>
                <h3>Talent Marketplace</h3>

                <p class="mxa-2 pa-2">
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                  lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                  non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non
                  nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-2">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                  Pellentesque libero tortor, tincidunt et, tincidunt eget,
                  semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-2">
            <v-card flat>
              <v-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                  aliquam libero, non adipiscing dolor urna a orci. Curabitur
                  ligula sapien, tincidunt non, euismod vitae, posuere
                  imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et
                  pellentesque egestas, lacus ante convallis tellus, vitae
                  iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In hac habitasse platea dictumst. Fusce ac
                  felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus
                  nunc, quis gravida magna mi a libero. Nam commodo suscipit
                  quam. In consectetuer turpis ut velit. Sed cursus turpis vitae
                  tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius
                  tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                  fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede.
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo. Fusce commodo aliquam arcu. Suspendisse enim turpis,
                  dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
          <v-window-item value="option-3">
            <v-card flat>
              <v-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque
                  facilisis. Nam eget dui. Proin viverra, ligula sit amet
                  ultrices semper, ligula arcu tristique sapien, a accumsan nisi
                  mauris ac eros. In dui magna, posuere eget, vestibulum et,
                  tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque
                  facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                  ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    tab: "option-1",
    showTabs: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
    ],
  }),
  methods: {
    redirectToMainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.nav-logo svg {
  height: 100%;
  width: 35%;
}
.nav-logo {
  width: 500px;
  display: flex;
  justify-content: center;
}
.center-menubar {
  width: 100%;
  margin: 10px;
  display: flex;
}

.v-btn__underlay {
  background: #fff !important;
  opacity: var(--v-activated-opacity);
  border-radius: inherit;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

.v-toolbar__content,
.v-toolbar__extension {
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  transition: inherit;
  width: 100%;
  height: 80px !important;
}
.searchbox {
  background: red;
  height: 40px;
  width: 60%;
}
.v-field--center-affix .v-field__append-inner,
.v-field--center-affix .v-field__clearable,
.v-field--center-affix .v-field__prepend-inner {
  align-items: center;
  padding-top: 0;
}
.v-field--appended {
  padding-inline-end: 0px !important;
}
.v-btn.v-btn--density-default {
  height: 28px !important;
  margin: 5px;

  &.uoi,
  &.oio {
    height: 35px !important;
  }
}
.v-input__details > .v-icon,
.v-input__prepend > .v-icon,
.v-input__append > .v-icon {
  opacity: var(--v-medium-emphasis-opacity);
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-btn--size-default {
  --v-btn-size: 0.875rem;
  --v-btn-height: 36px;
  font-size: var(--v-btn-size);
  min-width: 76px !important;
  padding: 0 7px !important;
}
.v-field--variant-solo,
.v-field--variant-solo-filled {
  box-shadow: none !important;
}
hr {
  margin: 10px;
}
.v-toolbar__prepend {
  margin-inline-start: 100px !important;
  margin-inline-end: 100px !important;
}
.v-btn__content {
  grid-area: content;
  justify-content: center;
  white-space: nowrap;
  font-size: 15px !important;
}
.v-btn {
  text-transform: lowercase !important;
  line-height: 0% !important;
}
.v-layout {
  --v-scrollbar-offset: 0px;
  display: flex;
  flex: 1 1 auto;
  position: absolute;
}
</style>
