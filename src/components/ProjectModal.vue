<template>
  <base-modal max-width="2xl" :show="show" @close="$emit('close')">
    <template #header>
      <span class="text-2xl font-bold">{{ project.title }}</span>
    </template>
    <template #body></template>
  </base-modal>
</template>
<script>
import BaseModal from "./BaseModal.vue";
export default {
  components: {
    BaseModal,
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
