<template>
  <div class="py-4">
    <div v-if="news.length" class="grid">
      <NewsCard v-for="n in news" :key="`news-${n.id}`" :n="n"/>
    </div>
    <grid-loader v-else color="#319795" class="mx-auto absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%)"></grid-loader>
  </div>
</template>

<script>
import axios from 'axios'
import NewsCard from '@/components/NewsCard'

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
      news: []
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
      this.news = response.data.data
    } catch (error) {
      alert('Oops :(')
      console.error(error)
    }
  }
}
</script>
