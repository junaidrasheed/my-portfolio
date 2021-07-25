<template>
  <section-container background="gray">
    <heading size="xl">My Awesome Expertise!</heading>
    <div class="md:flex space-y-4 md:space-x-8 md:space-y-0 justify-center">
      <div
        v-for="(expertise, idx) in expertise"
        :key="idx"
        class="w-full md:w-1/3 md:max-w-sm bg-white rounded shadow p-5"
      >
        <img :src="getIcon(expertise.icon)" class="w-10 h-10 mx-auto my-8" />
        <span class="block text-sm font-bold tracking-wider text-center">
          {{ expertise.title }}
        </span>
        <p class="font-thin text-gray-900 my-4">
          {{ expertise.description }}
        </p>
      </div>
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
  data() {
    return {
      expertise: [
        {
          title: "Backend",
          icon: "backend.svg",
          description:
            "Experienced in PHP/Laravel Framework, with working knowledge of Ruby on Rails.",
        },
        {
          title: "Fontend",
          icon: "frontend.svg",
          description:
            "Hands on experience of working with Vue.js frontend framework along side Tailwind CSS for UI designs.",
        },
        {
          title: "API Development",
          icon: "api.svg",
          description:
            "Working knowledge of API development using Laravel framework for multiple projects.",
        },
      ],
    };
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name);
    },
  },
};
</script>
