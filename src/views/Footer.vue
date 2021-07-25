<template>
  <div class="bg-gray-900">
    <div class="flex justify-between px-8 py-2 text-gray-100">
      <div class="text-sm font-thin">
        &copy; {{ currentYear }} | Junaid Rasheed
      </div>
      <div class="flex text-sm font-thin">
        Powered by
        <div class="flex space-x-2 ml-2">
          <img
            src="../assets/icons/vue.png"
            alt="Tailwind"
            title="Vue.js"
            class="w-5 h-5"
          />
          <img
            src="../assets/icons/tailwind.png"
            alt="Tailwind"
            title="Tailwind CSS"
            class="w-5 h-5"
          />
        </div>
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
