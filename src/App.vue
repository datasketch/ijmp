<template>
  <div id="app" class="min-h-screen flex flex-col font-raleway">
    <Header />
    <main class="flex-grow bg-gray-100 px-4">
      <div class="container mx-auto">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
@import url('./assets/base.css');
</style>
