<script lang="ts" setup>
import FeaturesWidget from '@/components/Landing/FeaturesWidget.vue';
import FooterWidget from '@/components/Landing/FooterWidget.vue';
import HeroWidget from '@/components/Landing/HeroWidget.vue';
import PricingWidget from '@/components/Landing/PricingWidget.vue';


</script>



<template>
    <!-- Fade Left -->
  <div class="bg-white sticky top-0 z-30 flex justify-between w-full shadow-xl bg-primary h-[80px]">
    <TopBarWidget/>
  </div>
<!-- Fade In -->
  <div >
  <HeroWidget/>
  </div>
<!-- Flyp Y -->
  <div>
    <FeaturesWidget/>
  </div>
<!-- Scale In -->
  <div>
    <PricingWidget/>
  </div>
<!-- Fade In -->
  <div>
    <FooterWidget/>
  </div>










</template>



