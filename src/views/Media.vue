<template>
  <div class="media">
    <p>medios</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Media',
  metaInfo: {
    title: 'Medios',
    titleTemplate: '%s · IJMP'
  },
  data () {
    return {
      section: 'medios',
      media: []
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
      this.media = response.data.data
    } catch (error) {
      alert('Oops :(')
      console.error(error)
    }
  }
}
</script>
