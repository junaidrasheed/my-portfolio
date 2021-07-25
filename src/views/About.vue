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
        <img :src="getIcon(social.icon)" class="w-5 h-5 inline" />
      </a>
    </div>
  </section-container>
  <!-- <div class="md:flex h-full">
    <ProfileCard class="w-full max-w-sm md:shadow-2xl"/>
    <div class="w-full md:w-3/4 bg-white my-8 rounded md:rounded-l-none md:rounded-r overflow-y-auto">
      <div>
        <Heading title="Main Domains"/>
        <div class="md:flex space-y-8 md:space-y-0 md:space-x-24 py-12 px-8">
          <div class="w-full md:w-1/3 text-center" v-for="(domain,idx) in mainDomains" :key="idx">
            <div class="flex items-center justify-center mx-auto rounded-full bg-red-500 w-20 h-20" v-html="domain.icon"></div>
            <h1 class="my-4 text-xl">{{ domain.title }}</h1>
            <p>{{ domain.description }}</p>
          </div>
        </div>
      </div>
      <div id="resume">
        <Heading title="Resume"/>
        <div class="flex flex-col items-center justify-center py-10 md:py-20">
          <img class="w-20 h-20 text-red-500 cursor-pointer" src="../assets/pdf.svg"/>
          <p class="my-2 mx-4 text-center">If you are a recruiter, feel free to get in touch!</p>
        </div>
      </div>
      <div id="work">
        <Heading title="Work Experience"/>
        <div class="md:flex space-y-8 md:space-y-0 md:space-x-24 py-12 px-8">
          <p>Over the years, I have been part of various projects both professional and academic. Some of those have been highlighted below.</p>
        </div>
      </div>
    </div>
  </div> -->
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
        { icon: "github.png", link: "#" },
        { icon: "linkedin.png", link: "#" },
        { icon: "instagram.png", link: "#" },
        { icon: "twitter.png", link: "#" },
        { icon: "facebook.png", link: "#" },
      ],
      tools: ["vscode", "github", "dbeaver"],
    };
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name);
    },
  },
};
</script>
