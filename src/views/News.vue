<template>
  <div class="py-4 grid">
    <template v-if="news.length">
      <NewsCard v-for="n in news" :key="`news-${n.id}`" :n="n"/>
    </template>
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
