<template>
  <metainfo>
    <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
    <template #title="{ content }">{{ content }}</template>
  </metainfo>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'App',
  setup() {
    const { t } = useI18n();
    useMeta({
      title: t('home'),
      description: 'Home',
    });
  },
});
</script>
