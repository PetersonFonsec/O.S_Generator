<template>
  <v-app>
    <v-content>

      <particleJS />

      <Menu/>
        
      <div id="limitador">
        
        <transition mode="out-in"      
            enter-active-class="animated slideInUp"  
            leave-active-clasnos="animated slideOutBottom">
          <router-view/>

        </transition>

      </div>

    </v-content>
  </v-app>
</template>

<script>
  import  '@/plugins/animate.css'
  import particleJS from '@/components/Particle-JS.vue'
  import Menu from '@/components/menu.vue'

  export default {
    name: 'App',
    components: {  Menu, particleJS },
    data: () => ({
      //
    }),
  };
</script>

<style>
#limitador{
  width: 80%;
  margin: 100px auto; 
  padding-top: 30px;
  position: inherit;
}
</style>
