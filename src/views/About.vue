<template>
  <section-container background="white" max-width="2xl">
    <heading size="lg">Who am I?</heading>
    <p class="text-md tracking-wide font-thin text-gray-900">
      Hello, I am <span class="font-bold">Junaid</span>, a {{ age }} years old
      Web Developer from Lahore, Pakistan offering {{ experience }}+ years of
      professional experience in LAMP stack development. With major expertise in
      backend development using popular frameworks like PHP-Laravel and Ruby on
      Rails, I have also developed a likeness towards frontend development using
      Vue.js and Tailwind CSS.
    </p>
    <div class="flex space-x-8 mt-8 mb-4 justify-center">
      <a
        :href="social.link"
        target="blank"
        v-for="(social, idx) in socials"
        :key="idx"
      >
        <img :src="getImageURL(social.icon)" class="w-5 h-5 inline" />
      </a>
    </div>
  </section-container>
</template>
<script>
import SectionContainer from "../components/SectionContainer.vue";
import Heading from "../components/Heading.vue";
export default {
  components: {
    SectionContainer,
    Heading,
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    age() {
      return this.currentYear - 1996;
    },
    experience() {
      return this.currentYear - 2017;
    },
  },
  data() {
    return {
      socials: [
        { icon: "icons/github.png", link: "#" },
        { icon: "icons/linkedin.png", link: "#" },
        { icon: "icons/instagram.png", link: "#" },
        { icon: "icons/twitter.png", link: "#" },
        { icon: "icons/facebook.png", link: "#" },
      ],
      tools: ["vscode", "github", "dbeaver"],
    };
  },
};
</script>
