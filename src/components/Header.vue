<template>
  <header class="p-4 bg-white shadow z-50">
    <nav class="container mx-auto flex items-center justify-between">
      <div class="nav-left">
        <router-link to="/" class="tracking-wider mr-4" exact-active-class
  ="text-teal-600">Noticias</router-link>
        <router-link to="/medios" class="tracking-wider" exact-active-class
  ="text-teal-600">Medios</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/agregar-medio" class="bg-white hover:bg-teal-800 bg-teal-600 font-semibold py-2 px-4 rounded shadow text-xs uppercase inline-block leading-none text-white">Agregar mi medio</router-link>
      </div>
    </nav>
  </header>
</template>
