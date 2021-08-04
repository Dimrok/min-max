<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script lang="ts">
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';
import { shallowRef, watch, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'AppLayout',
  setup() {
    const layout = shallowRef(AppLayoutDefault);
    const route = useRoute();
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await require(`@/layouts/${meta.layout}.vue`);
          layout.value = component?.default || AppLayoutDefault;
        } catch (e) {
          layout.value = AppLayoutDefault;
        }
      },
    );
    return { layout };
  },
});
</script>
