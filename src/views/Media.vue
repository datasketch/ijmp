<template>
  <div class="py-4">
    <div v-if="media.length" class="grid">
      <MediaCard v-for="m in media" :key="`media-${m.id}`" :media="m"/>
    </div>
    <grid-loader v-else color="#319795" class="mx-auto absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%)"></grid-loader>
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
