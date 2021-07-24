<template>
  <div class="bg-gray-900">
    <div class="flex justify-between px-8 py-2 text-gray-100">
      <div class="text-sm font-thin">
        &copy; {{ currentYear }} | Junaid Rasheed
      </div>
      <div class="text-sm font-thin">
        Powered by
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
