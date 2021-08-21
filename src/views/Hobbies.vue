<template>
  <section-container background="white">
    <heading size="lg">What I do for fun.</heading>
    <div class="md:p-4 md:space-y-8">
      <div
        v-for="(hobby, idx) in hobbies"
        :key="idx"
        class="md:flex md:justify-end md:items-center"
        :class="{ 'md:flex-row-reverse': idx % 2 != 0 }"
      >
        <div class="w-full md:w-1/2 text-left md:px-12">
          <span class="text-xl font-bold block">{{ hobby.title }}</span>
          <p class="font-thin py-4 md:pr-28">{{ hobby.description }}</p>
        </div>
        <div class="w-full md:w-1/2 p-4 md:p-8">
          <template v-if="Array.isArray(hobby.image)">
            <div class="md:flex">
              <div v-for="(x,idx) in [{start: 0, end: 2}, {start: 2, end: 4}]" :key="idx"
                class="flex py-4 md:px-4 space-x-6 overflow-x-auto md:overflow-x-hidden"
              >
                <div
                  v-for="(image, idx) in hobby.image.slice(x.start,x.end)"
                  :key="idx"
                  class="w-full h-52 md:w-36 md:h-96 bg-gray-600 rounded-lg shadow"
                  :class="{ 'md:mt-8': idx % 2 == 0 }"
                >
                  <a :href="getImageURL(image.path)" target="_blank" :title="image.title">
                    <img :src="getImageURL(image.path)" :alt="image.title" class="object-cover h-full rounded-lg">
                  </a>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <img class="mx-auto w-48 h-48 md:w-96 md:h-96" :src="getImageURL(hobby.image)" />
          </template>
        </div>
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
      hobbies: [
        {
          title: "Play",
          description:
            "My free time is often spent playing video games on my HP Omen 15 gaming laptop. I am a huge fan of Assassing's Creed (AC) and Need for Speed (NFS) franchises and whenever I have some time available on my hand I am either exploring the cities of Ancient Rome, Egypt, Norway or tearing up the streets of NFS with my Nissan GTR. Some of my other all time favorite titles include Tomb Raider, Dead Space, Tekken and Far Cry franchise.",
          image: 'videogames.svg',
        },
        {
          title: "Travel",
          description:
            " Every year, with the company of some amazing friends, I go on road  trips across the northern part of Pakistan to explore the beautiful  mountains, valleys and rivers it has to offer. The chilling winds on  top of the Babusar pass, the mesmerizing, and cold, water of Aansu  Jheel, the long wide rivers of Swat, the tall mountains of Kashmir  and the Worlds' highest elevated plains of Deosai Skardu are some of  most memorable places I have ever visited.",
          image: [
            { title: 'Shangrila - Skardu', path: 'shangrila_apple_tree.jpeg' },
            { title: 'Monal - Islamabad', path: 'islamabad.jpg' },
            { title: 'Lady Bug - Murree', path: 'bug.jpg' },
            { title: 'Hiking Trek - Nathiagali', path: 'nathiagali_mountains.jpg' }
          ],
        },
        {
          title: "Watch",
          description:
            " Apart from video games another favorite way of spending time is watching movies and TV series online or either in Cinema with friends. I am a sucker for Action thrillers along with Sci-fi and Comedy genre. All time favorites include titles like FRIENDS, Big Bang Theory, Game of Thrones, movies and shows from MARVEL and DC comics.",
          image: 'movies.svg',
        },
      ],
    };
  },
};
</script>
