<script lang="ts" setup>
import { ref } from 'vue';

const article = ref('')

</script>

<template>
  Creator
  <v-md-editor v-model="article" height="400px"></v-md-editor>
</template>

<style lang="scss" scoped>
  
</style>