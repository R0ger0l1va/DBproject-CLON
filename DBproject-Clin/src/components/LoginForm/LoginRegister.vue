<template>
    <div class="flex flex-col items-center justify-center h-screen gap-4 card">
  <div class="border-2 border-red-700 rounded-full">  <span class="p-6 text-red-600 font-monospace size-5">LOGIN REGISTER</span> </div>
    <div class="flex flex-row items-center gap-4">
      <div class="flex flex-col items-center gap-4">
    <InputText v-model="user.email" placeholder="EMAIL" type="text" ></InputText>
  <InputText  v-model="user.contrasenna" placeholder="PASSWORD" type="text"  ></InputText>
    <Button @click="register" label="SUBMIT" icon="pi pi-check" iconPos="right"></Button>
  </div >
  <div class="flex flex-col items-center gap-4">
    <InputText v-model="user.email" placeholder="EMAIL" type="text" ></InputText>
  <InputText  v-model="user.contrasenna" placeholder="PASSWORD" type="text"  ></InputText>
    <Button @click="register" label="SUBMIT" icon="pi pi-check" iconPos="right"></Button>
  </div>
    </div>

 </div>
</template>

<script setup lang="ts">
   import axios from 'axios';
import { reactive } from 'vue';

//INTERFACES>>
interface User {
  contrasenna: string
  email: string
  rol: string
  nombre_usuario: string

}

//VARIABLES>>
 const user = reactive<User>({
  email:'',
  contrasenna:'',
  rol:'Cliente',
  nombre_usuario:'Test'
 })


 //FUNCIONES>>
const register = async (): Promise<void> => {
  try{
    const response  = await axios.post('/create',{
      email:user.email,
  contrasenna:user.contrasenna,
  rol:user.rol,
  nombre_usuario:user.nombre_usuario
    })
    console.log("la Password fue: " + response.data.encriptedPassword);
    console.log("El token fue:" + response.data.msg);
    console.log("El user es:"+ response.data.user);

    console.log("el resultado fue:" + response.data.ok);

  }
  catch(error){console.log("El ERROR fue: "+ error);
  }
}
</script>

<style lang="scss" scoped>

</style>
