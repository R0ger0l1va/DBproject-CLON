<template>
  <section class=" relative z-20 mt-[80px] xl:mt-[200px] ">
    <div v-animateonscroll="{enterClass: 'animate-fadeinup', leaveClass:'animate-fadeout'}"   class="flex flex-col justify-center mx-auto mb-8 text-center">
      <h2 class="h2">PRICING</h2>
      <h3 class="h3">Prices of the Polizes</h3>
    </div>
    <div class=" whitespace-nowrap grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
      <!-- STANDARD -->
      <Card v-animateonscroll="{enterClass: 'animate-fadeinleft'}"    class=" mx-auto !p-[40px] w-full !bg-black !rounded-[62px] max-h-full max-w-[360px]">
        <template #header>
          <div class="flex flex-col items-center justify-center">
            <h3>STANDARD</h3>
            <img src="/public/PricingImage/vecteezy_insurance-object-insurance-policy-illustration-3d_19019822.png" alt="">
          </div>          <Divider class="w-full"></Divider>
        </template>


        <template #content>

          <div class="flex justify-center ">
            <h3 class="pb-6 text-8xl">$10</h3>
            <p>per month</p>
          </div>
          <Divider class="w-full"></Divider>

        </template>

        <template #footer>
          <div class="flex justify-center sm:flex-wrap sm:whitespace-nowrap">
            <!-- Lista de Beneficios Standard -->
            <ul>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span >Limites Basicos de Cobertura</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span>Atencion estandar</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span>Pocos Beneficios</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span> Tiempo de Respuesta Estandar </span>
              </li>
            </ul>
          </div>
        </template>
      </Card>
      <!-- PREMIUM -->
      <Card v-animateonscroll="{enterClass: 'animate-fadeinup'}"   class="  mx-auto !p-[40px] w-full !bg-black !rounded-[62px] max-h-full max-w-[360px]">
        <template #header>
          <div class="flex flex-col items-center justify-center">
            <h3>PREMIUM</h3>
            <img src="/public/PricingImage/vecteezy_umbrella-computer-icons-ai-generative_28720524.png" alt="">

          </div>
          <Divider class="w-full"></Divider>
        </template>


        <template #content>

          <div class="flex justify-center ">
            <h3 class="pb-6 text-8xl">$50</h3>
            <p>per month</p>
          </div>
          <Divider class="w-full"></Divider>

        </template>

        <template #footer>
          <div class="flex justify-center sm:flex-wrap">
            <!-- Lista de Beneficios Standard -->
            <ul>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span >Limites Superiores de cobertura</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span>Atencion Personalizada </span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span>Beneficios Adicionales</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span> Tiempo de Respuesta Rapido </span>
              </li>
            </ul>
          </div>
        </template>
      </Card>
      <!-- VIP -->
      <Card v-animateonscroll="{enterClass: 'animate-fadeinright'}"   class=" mx-auto !p-[20px] w-full !bg-black !rounded-[62px] max-h-full max-w-[360px]">
        <template #header>
          <div class="flex flex-col items-center justify-center">
            <h3 class="mt-4 mb-8">VIP</h3>
            <img src="/public/PricingImage/vecteezy_a-house-and-a-paper-with-a-house-icon_51683931.png" alt="">
          </div>          <Divider class="w-full"></Divider>
        </template>


        <template #content>

          <div class="flex justify-center ">
            <h3 class="pb-6 text-8xl">$100</h3>
            <p>per month</p>

          </div>
          <Divider class="w-full"></Divider>

        </template>

        <template #footer>
          <div class="flex justify-center sm:flex-wrap sm:whitespace-nowrap">
            <!-- Lista de Beneficios Standard -->
            <ul>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span >Limites Maximos de Cobertura</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span>Servicio VIP con linea directa</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span>Maximos  Beneficios Adicionales</span>
              </li>
              <li>
                <i class="mr-2 pi pi-check text-cyan-500"></i>
                <span> Tiempo de Respuesta Inmediato </span>
              </li>
            </ul>
          </div>
        </template>
      </Card>
    </div>
  </section>

</template>

<script lang="ts" setup>


</script>

<style scoped></style>
