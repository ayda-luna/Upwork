<template>
  <div  class="menubar mx-16 px-13">
    <v-menu>
      <template #activator="{ props }">
        <v-btn variant="tonal" v-bind="props" class="text-h6">
          Activator slot 
        </v-btn>
      </template>
    </v-menu>
    <v-menu>
      <template #activator="{ props }">
        <v-btn variant="tonal" v-bind="props" class="text-h6">
          Activator slot 
        </v-btn>
      </template>
    </v-menu>
    <v-menu>
      <template #activator="{ props }">
        <v-btn variant="tonal" v-bind="props" class="text-h6">
          Activator slot
        </v-btn>
      </template>
    </v-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menubar{
    width: 100rem;
}
</style>
