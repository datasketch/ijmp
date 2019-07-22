<template>
  <div id="app" class="h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: { Header }
}
</script>

<style>
@import url('./assets/base.css');
</style>
