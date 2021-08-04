<template>
  <header class="header" />
  <AppLayoutNavigation />
  <main>
    <slot />
  </main>
  <footer class="footer" />
</template>

<script>
import AppLayoutNavigation from '@/layouts/AppLayoutNavigation';
export default {
  name: 'AppLayoutAbout',
  components: {
    AppLayoutNavigation,
  },
};
</script>

<style scoped>
.header {
  height: 5rem;
  background-color: blue;
}
</style>
