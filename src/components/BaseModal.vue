<template>
  <portal v-if="show" to="app">
    <transition name="fade" appear>
      <div
        v-if="show"
        class="fixed z-40 inset-0 bg-gray-900 opacity-75"
        @click="$emit('close')"
      ></div>
    </transition>

    <transition name="fade" appear>
      <div
        v-if="show"
        class="
          fixed
          left-0
          right-0
          top-1/2
          -translate-y-1/2
          z-50
          m-auto
          sm:w-full
          shadow
          p-8
          bg-black
          rounded
          transform
        "
        role="dialog"
        :class="maxWidthClass"
      >
        <div class="text-lg flex mb-3 text-gray-100">
          <slot name="header"></slot>
        </div>
        <div
          class="text-gray-100"
          :class="bodyClass ? bodyClass : 'overflow-y-auto'"
          style="max-height: 500px"
        >
          <slot name="body"></slot>
        </div>
        <div class="flex mt-5 text-gray-100">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </portal>
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    bodyClass: String,
    show: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: String,
      default: "md",
    },
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          // document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = null;
        }
      },
    },
  },
  computed: {
    maxWidthClass() {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
      }[this.maxWidth];
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
