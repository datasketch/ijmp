<template>
  <div class="py-4">
    <div v-if="media.length" class="grid">
      <MediaCard v-for="m in media" :key="`media-${m.id}`" :media="m"/>
    </div>
    <grid-loader v-else color="#319795" class="mx-auto absolute top-1/2 left-1/2" style="transform: translate(-50%, -50%)"></grid-loader>
    <div class="text-center" v-if="error">
      <p>{{ error }}</p>
    </div>
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
      media: [],
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
      this.media = response.data.data
    } catch (error) {
      this.error = 'Algo ha salido mal. Por favor, abre este sitio web en una ventana de incógnito o desactiva todos los ad blockers en tu navegador'
    }
  }
}
</script>
