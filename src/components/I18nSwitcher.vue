<template>
  <select v-model="locale">
    <option v-for="availableLocale in availableLocales" :key="availableLocale" :value="availableLocale">
      {{ t(`locale.${availableLocale}`) }}
    </option>
  </select>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { t, locale, availableLocales } = useI18n({ useScope: 'global' });
    return { t, locale, availableLocales };
  },
});
</script>
