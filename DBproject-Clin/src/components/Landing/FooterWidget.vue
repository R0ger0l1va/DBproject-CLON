<template>
  <footer class="mt-[80px]    rounded-tr-full xl:mt-[150px]  relative z-20  w-full  ">
    <div class="flex flex-col  items-center max-w-full pb-[100px] text-center" >
      <div v-animateonscroll="{enterClass: 'animate-fadeinup', leaveClass:'animate-fadeout'}">
        <img class="transform scale-150" src="/public/LogoImage/a58f1d5757b347028424ee3cec35a2e8-free.png" alt="">
      </div>
      <div  v-animateonscroll="{enterClass: 'animate-scalein', leaveClass:'animate-fadeout'}" class="z-10 ">
        <h2 class="text-3xl">Contact</h2>
        <span>Its Clear of the first thing u will see is this because is amazing</span>
      </div>
      <div v-animateonscroll="{enterClass: 'animate-zoomin', leaveClass:'animate-fadeout'}"  class="flex text-[10px] pt-4">
        <Button class="!text-[30px] hover:!bg-white !text-blue-600 bi bi-facebook" variant="text"/>
        <Button class="!text-[30px] hover:!bg-white !text-pink-600 bi bi-instagram" variant="text"/>
        <Button class="!text-[30px]  hover:!bg-white bi bi-whatsapp" variant="text"/>
        <Button class="!text-[30px] hover:!bg-white !text-black bi bi-github" variant="text"/>
      </div>

    </div>
    <div v-animateonscroll="{enterClass: 'animate-fadeinup', leaveClass:'animate-fadeout'}"   class="items-center mb-10 text-sm text-center ">
      Page Free of Copyright 2024. All rights reserverd
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
