<template>
  <div class="py-4 grid">
    <template v-if="media.length">
      <MediaCard v-for="m in media" :key="`media-${m.id}`" :media="m"/>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import MediaCard from '@/components/MediaCard'

export default {
  name: 'Media',
  components: { MediaCard },
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
