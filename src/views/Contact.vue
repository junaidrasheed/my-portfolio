<template>
  <div background="black" class="parallax-bg contact-bg-img">
    <div
      class="bg-gray-800 bg-opacity-80 h-full text-white py-16 px-10 text-center space-y-8"
    >
      <heading size="lg">Say Hello!</heading>
      <div class="text-center items-center">
        <div class="flex justify-evenly">
          <div>
            <map-svg class="h-10 w-10 mx-auto" />
            <span class="font-thin mt-2">Lahore, Pakistan</span>
          </div>
          <div>
            <phone-svg class="h-10 w-10 mx-auto" />
            <span class="font-thin mt-2">+923054380652</span>
          </div>
          <div>
            <mail-svg class="h-10 w-10 mx-auto" />
            <span class="font-thin mt-2">junaidrasheed1@gmail.com</span>
          </div>
        </div>
      </div>
      <div class="text-center items-center max-w-7xl space-y-8 mx-auto">
        <div class="flex space-x-8">
          <input
            placeholder="Name"
            v-model="name"
            class="contact-input w-1/2"
          />
          <input
            placeholder="Email"
            v-model="email"
            class="contact-input w-1/2"
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
import MapSvg from "../components/svg/Map.vue";
import PhoneSvg from "../components/svg/Phone.vue";
import MailSvg from "../components/svg/Mail.vue";
export default {
  components: {
    Heading,
    MapSvg,
    PhoneSvg,
    MailSvg,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>
