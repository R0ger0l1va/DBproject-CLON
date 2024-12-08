<template>
 <section class="container">
  <h2>{{ userName }}</h2>
 </section>
</template>

<script lang="ts">
import { ref } from 'vue';

export default{
setup(){
 const uName = ref("Roger");

 return{userName: uName}
}
}
</script>

<style  scoped>

</style>
