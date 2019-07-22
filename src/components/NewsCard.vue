<template>
  <div class="w-full rounded overflow-hidden shadow-md bg-white px-6 py-4">
    <small class="text-xs text-gray-600 uppercase">{{ n.medio }}</small>
    <h1 class="font-bold text-xl mb-2">{{ n.titulo }}</h1>
    <p class="text-gray-800 mb-4">{{ n.descripcion }}</p>
    <a :href="n.link" rel="noopener noreferrer" target="_blank" class="bg-white hover:bg-gray-100 text-teal-600 font-semibold py-2 px-4 rounded shadow text-xs uppercase inline-block leading-none">leer más</a>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    n: {
      type: Object,
      required: true
    }
  }
}
</script>
