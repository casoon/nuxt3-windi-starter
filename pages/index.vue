<script setup lang="ts">

</script>

<template>
  <main id="content" role="main">
    <div class="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 class="block text-2xl font-bold text-white sm:text-4xl">First Page</h1>
      <p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
      <nuxt-img src="/images/test1.jpg" />
      <nuxt-img src="/images/test1.jpg" sizes="sm:100vw md:50vw lg:400px" format="webp" loading="lazy" />
    </div>
  </main>
</template>