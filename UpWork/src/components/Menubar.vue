<template>
    <div>
        <v-menu>
            <template #activator="{ props }">
              <v-btn variant="tonal" v-bind="props" class="text-h6">
                Activator slot <v-icon icon="mdi-chevron-down"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu><v-menu>
            <template #activator="{ props }">
              <v-btn variant="tonal" v-bind="props" class="text-h6">
                Activator slot <v-icon icon="mdi-chevron-down"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu><v-menu>
            <template #activator="{ props }">
              <v-btn variant="tonal" v-bind="props" class="text-h6">
                Activator slot <v-icon icon="mdi-chevron-down"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>