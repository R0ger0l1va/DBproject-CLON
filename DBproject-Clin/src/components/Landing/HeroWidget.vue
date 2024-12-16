<template>
  <main class="max-w-[1920px] mx-auto bg-white overflow-hidden">
    <!-- GRID IMAGE -->
    <div class="fixed top-0 bottom-0 left-0 right-0 z-10 xl:bg-none xl:bg-center xl:bg-repeat-y"/>
    <!-- BG IMAGE -->
    <section class="relative z-20  xl:rounded-bl-[290px] bg-hero1 h-[540px] bg-center bg-no-repeat bg-fixed xl:h-[570px] lg:bg-cover">
      <div class="container flex items-center justify-center h-full mx-auto xl:mx-36 xl:justify-start">
      <div v-animateonscroll="{enterClass: 'animate-fadeindown', leaveClass:'animate-fadeout'}"    class=" hero_text w-[567px] flex flex-col items-center text-center xl:text-left xl:items-start">
        <h1 class="h1">Let Your Home be Unique</h1>
        <p class="mt-2 mb-8 text-yellow-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint autem molestias </p>
        <Button raised label="Get Started"  size="large" icon-pos="right" icon="pi pi-arrow-right" class="!text-[23px]   !text-white  !border-none hover:!bg-fuchsia-800 !bg-violet-700 xl:!rounded-bl-3xl"/>
      </div>
    </div>
    </section>



  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {


    return {}
  }
})
</script>

<style scoped>

</style>
