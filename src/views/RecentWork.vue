<template>
  <section-container background="gray">
    <heading size="lg">My Recent Works.</heading>
    <div class="">
      <div class="flex justify-center space-x-8 px-4">
        <button
          v-for="(category, idx) in categories"
          :key="idx"
          :class="
            selectedCategory == category
              ? 'text-gray-900 font-semibold'
              : 'text-gray-900'
          "
          class="outline-none focus:outline-none tracking-wider font-thin"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
      <div class="w-full mx-auto md:max-w-7xl">
        <div class="flex flex-wrap -mx-4 overflow-hidden">
          <div
            v-for="(project, idx) in filteredProjects"
            :key="idx"
            class="my-4 px-4 w-full overflow-hidden md:w-1/4"
          >
            <div class="h-64 bg-white shadow relative">
              <div
                class="flex items-center justify-center p-4 absolute inset-0 z-0"
              >
                <img :src="project.image" />
              </div>
              <div
                class="opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-95 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold"
              >
                <div class="p-4">
                  <span class="text-lg font-semibold pb-4">
                    {{ project.title }}
                  </span>
                  <p class="text-sm">
                    {{ project.shortDescription }}
                  </p>
                  <button
                    @click="
                      selectedProject = project;
                      showModal = true;
                    "
                    title="See Details"
                    class="rounded text-sm px-2 py-px font-semibold bg-white text-gray-900 hover:bg-gray-100 outline-none focus:outline-none"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <project-modal
      :project="selectedProject"
      :show="showModal"
      @close="reset()"
    ></project-modal>
  </section-container>
</template>
<script>
import SectionContainer from "../components/SectionContainer.vue";
import ProjectModal from "../components/ProjectModal.vue";
import Heading from "../components/Heading.vue";
import CointelegraphLogo from "../assets/projects/ct-pro-dark.png";
import TheTieLogo from "../assets/projects/the_tie.svg";
import SigDevLogo from "../assets/projects/sigdev.svg";
import HBILogo from "../assets/projects/hbi.png";
export default {
  components: {
    SectionContainer,
    ProjectModal,
    Heading,
  },
  data() {
    return {
      selectedProject: {},
      showModal: false,
      selectedCategory: "All",
      categories: ["All", "Professional", "Personal", "Academic"],
      projects: [
        {
          title: "Cointelegraph Markets Pro",
          image: CointelegraphLogo,
          shortDescription:
            "A simple and easy-to-use dashboard powered by the same technology and data used by the leading institutional investors",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
        {
          title: "TheTIE Vision",
          image: TheTieLogo,
          shortDescription:
            "Leading information services provider for digital assets. We help businesses in the cryptocurrency industry act on market-moving information.",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
        {
          title: "TheTIE SigDev Terminal",
          image: SigDevLogo,
          shortDescription:
            "SigDev parsing through thousands of primary sources around the globe to help identify the news that matters, faster than anyone in crypto space.",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
        {
          title: "Healthcare Business Insights",
          image: HBILogo,
          shortDescription:
            "Providing healthcare insights that change lives. Helping healthcare professionals optimize performance, engage and retain employees, and understand the market.",
          longDescription: "",
          tools: [],
          link: "",
          type: "Professional",
          reponsibilities: [],
        },
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory == "All") {
        return this.projects;
      } else {
        return this.projects.filter((x) => x.type == this.selectedCategory);
      }
    },
  },
  methods: {
    reset() {
      this.selectedProject = {};
      this.showModal = false;
    },
  },
};
</script>
