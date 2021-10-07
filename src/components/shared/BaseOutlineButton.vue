<template>
  <v-btn small outlined color="greenLighter" @click="$emit('click')">
    <slot />
  </v-btn>
</template>
