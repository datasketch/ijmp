<template>
  <div class="py-4">
    <div v-if="news.length" class="grid">
      <NewsCard v-for="n in news" :key="`news-${n.id}`" :n="n"/>
    </div>
    <grid-loader v-else color="#319795" class="mx-auto absolute top-1/2 left-1/2" style="transform: translate(-50%, -50%)"></grid-loader>
    <div class="text-center" v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NewsCard from '@/components/NewsCard'
import shuffle from 'lodash.shuffle'

export default {
  name: 'News',
  components: { NewsCard },
  metaInfo: {
    title: 'Noticias',
    titleTemplate: '%s · IJMP'
  },
  data () {
    return {
      section: 'noticias',
      news: [],
      error: null
    }
  },
  computed: {
    url () {
      return `${this.$data.$baseURL}?sheet=${this.section}`
    }
  },
  async created () {
    try {
      const response = await axios.get(this.url)
      this.news = shuffle(response.data.data)
    } catch (error) {
      this.error = 'Algo ha salido mal. Por favor, abre este sitio web en una ventana de incógnito o desactiva todos los ad blockers en tu navegador'
    }
  }
}
</script>
