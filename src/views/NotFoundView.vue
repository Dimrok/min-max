<template>{{ t('not_found') }}</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'; // @ is an alias to /src

export default defineComponent({
  name: 'NotFoundView',
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>
