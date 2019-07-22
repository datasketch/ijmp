<template>
  <div class="home">
    <p>home</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'News',
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
