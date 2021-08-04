<template>
  <nav>
    <router-link to="/">{{ t('home') }}</router-link>
    <router-link to="/about">{{ t('about') }}</router-link>
    <I18nSwitcher />
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import I18nSwitcher from '@/components/I18nSwitcher.vue';

export default defineComponent({
  name: 'AppLayoutNavigation',
  components: {
    I18nSwitcher,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
