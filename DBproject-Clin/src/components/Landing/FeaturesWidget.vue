<template>
<section class="relative z-20 mt-[80px] xl:mt-[200px]">
    <div class="container mx-auto xl:px-0">
      <div class="flex flex-col items-center justify-between gap-8 text-center xl:text-left xl:flex-row xl:gap-[74px]">
        <!-- TEXT -->
        <div v-animateonscroll="{enterClass: 'animate-fadeinleft', leaveClass:'animate-fadeoutleft'}"  class="flex flex-col items-center flex-1 order-2 gap-8 xl:order-none xl:items-start xl:max-w-[530px]">
          <h2 class="h2">We Create de Styling of Imagination. We are Gods</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            laborum dignissimos rerum reprehenderit ex, earum totam, ipsa inventore amet
            hic quis ut vitae exercitationem saepe cumque aliquid nobis voluptatum esse!</p>
            <!-- PHONE -->
            <div class="flex items-center justify-center gap-4 ml-3 xl:justify-start">
              <div class="flex mx-auto items-center justify-center w-[93px] h-[93px] rounded-full bg-black">
                <i class="text-4xl bi bi-telephone text-cyan-400"></i>

              </div>
              <div class="text-left ">
                  <div class="text-2xl font-bold"> +53 5 6383797 </div>
                  <div>Call Us Anytime</div>
                </div>
            </div>
        </div>
      <!-- IMAGE -->
      <div v-animateonscroll="{enterClass: 'animate-fadeinright', leaveClass:'animate-fadeoutright'}"   class=" mx-auto  xl:max-h-none xl:mx-0  max-w-xl xl:max-w-[750px]">
        <img class="md:rounded-tr-[200px] md:rounded-bl-[200px]" src="/public/Bg-Image/heroWindows2.jpg" alt="Imagen de Muestra 2">
      </div>
      </div>


    </div>
  </section>
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
