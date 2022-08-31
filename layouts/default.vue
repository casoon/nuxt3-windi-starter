<script setup>
useHead({
  titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'bg-slate-900 flex h-full'
  },
  htmlAttrs: {
    lang: 'de'
  }
})
</script>

<template>
  <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>