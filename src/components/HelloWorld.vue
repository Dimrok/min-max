<template>
  <h1>{{ t('hi') }}</h1>
</template>

<i18n>
{
  "en": {
    "hi": "Hello",
  },
  "fr": {
    "hi": "Bonjour",
  },
}
</i18n>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const { t } = useI18n();

    // Something to do here ...

    return { t };
  },
});
</script>
