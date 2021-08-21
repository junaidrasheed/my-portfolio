<template>
  <div background="black" class="parallax-bg contact-bg-img">
    <div
      class="bg-gray-800 bg-opacity-80 h-full text-white py-16 px-10 text-center"
    >
      <heading size="lg">Say Hello!</heading>
      <div class="text-center items-center">
        <div class="space-y-8 md:flex md:space-y-0 justify-evenly items-end">
          <div
            v-for="(contact, idx) in contacts"
            :key="idx"
            class="items-end text-gray-100"
          >
            <img
              :src="getImageURL(contact.icon)"
              :class="[contact.size, 'mx-auto']"
            />
            <span class="font-thin mt-2">{{ contact.value }}</span>
          </div>
        </div>
      </div>
      <div class="text-center items-center max-w-7xl space-y-8 mx-auto mt-12">
        <div class="space-x-0 space-y-8 md:flex md:space-y-0 md:space-x-8">
          <input
            placeholder="Name"
            v-model="name"
            class="contact-input w-full md:w-1/2"
          />
          <input
            placeholder="Email"
            v-model="email"
            class="contact-input w-full md:w-1/2"
          />
        </div>
        <div class="">
          <textarea
            placeholder="Message"
            v-model="message"
            rows="6"
            class="contact-input w-full resize-none"
          />
        </div>
        <div class="">
          <button
            class="px-8 py-4 rounded-full bg-transparent font-thin tracking-wide border border-gray-600 outline-none focus:outline-none hover:bg-white hover:text-gray-900 transition duration-200 ease-linear"
          >
            Send Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from "../components/Heading.vue";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      contacts: [
        {
          icon: "icons/map.svg",
          size: "w-10 h-10",
          value: "Lahore, Pakistan",
        },
        {
          icon: "icons/phone.svg",
          size: "w-8 h-8",
          value: "+923054380652",
        },
        {
          icon: "icons/mail.svg",
          size: "w-10 h-10",
          value: "junaidrasheed1@gmail.com",
        },
      ],
      name: "",
      email: "",
      message: "",
    };
  }
};
</script>
