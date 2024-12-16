<template>
<div class="flex items-center justify-between w-full pt-3 mx-1 overflow-hidden ">
  <a href="#" class="mb-3 ">
    <img src="/public/LogoImage/a58f1d5757b347028424ee3cec35a2e8-free.png" alt="Logo de Poliza">
  </a>
<nav>
  <!-- TOOLBAR MOBILE -->
   <div class="h-2 cursor-pointer lg:hidden"  @click="toogleNavMobile">
    <i class="text-4xl text-primary bi bi-list"></i>
   </div>
   <!-- TOOLBAR DESKTOP -->
  <Toolbar  style="border-width: 0; color: red;  "  class="flex mb-3" >
    <template #start>
        <div :class="[' overflow-hidden  transition-all rounded-bl-full lg:rounded-none rounded-br-full duration-300 ', showNavMobile ? 'h-52' : 'lg:h-6 h-0  ']"   class=" fixed border-t p-0  left-0 right-0 flex flex-col bg-white w-full gap-3  lg:p-0 lg:top-0 lg:border-none top-[80px] lg:relative lg:flex-row ">
            <Button  label="Home " class="hover:!bg-white" text plain />
            <Button label="About" class="hover:!bg-white" text plain />
            <Button label="Buy" class="hover:!bg-white" text plain />
            <Button label="Contact" class="hover:!bg-white" text plain />
        </div>
    </template>
</Toolbar>

</nav>
</div>


</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showNavMobile = ref(false)
function toogleNavMobile(){
  showNavMobile.value = !showNavMobile.value;
}


</script>

<style scoped>

</style>
