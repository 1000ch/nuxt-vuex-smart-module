<template>
  <nuxt />
</template>

<script lang="ts">
import Vue from 'vue';
import { authMapper } from '~/store/modules/auth';

export default Vue.extend({
  computed: {
    ...authMapper.mapGetters(['isLoggedIn'])
  }
});
</script>
