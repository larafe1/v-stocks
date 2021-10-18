<template>
  <v-btn
    small
    outlined
    class="mx-1 white--text"
    color="greenLighter"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>
