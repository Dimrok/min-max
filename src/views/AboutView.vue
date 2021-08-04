<template>
  <h1>{{ t('about') }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'AboutView',
  setup() {
    const { t } = useI18n();
    useMeta({ title: 'About' });

    return { t };
  },
});
</script>
