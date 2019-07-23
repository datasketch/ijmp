<template>
  <div class="w-full max-w-lg mx-auto py-16">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" name="request">
      <h1 class="text-center mb-8 text-xl font-bold">Háblanos de tu medio</h1>
      <input type="hidden" name="form-name" value="request" />
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="media">
          Nombre
        </label>
        <input class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="media" type="text" placeholder="Acme News" name="name" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email de contacto
        </label>
        <input class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="acme@news.com" name="email" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
          Descripción
        </label>
        <textarea class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Acme News es un medio de noticias explosivas" name="description" required></textarea>
      </div>
      <div class="mb-6">
        <label for="website" class="block text-gray-700 text-sm font-bold md">
          Website
        </label>
        <input type="url" class="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="https://acme.news" name="website" required>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-teal-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Request',
  metaInfo: {
    title: 'Agregar mi medio',
    titleTemplate: '%s · IJMP'
  }
}
</script>
