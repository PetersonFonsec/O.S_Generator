<template>
  <v-app>
    <v-content>

      <bg>
        <div id="limitador">
          <transition mode="out-in"      
              enter-active-class="animated slideInUp"  
              leave-active-clasnos="animated slideOutBottom">
            <router-view/>
          </transition>
        </div>
      </bg>

    </v-content>
  </v-app>
</template>

<script>
  import  '@/plugins/animate.css'
  import bg from  '@/components/background.vue'
  export default {
    name: 'App',
    components: { bg },
    data: () => ({
      //
    }),
  };
</script>

<style>
#limitador{
  width: 80%;
  margin: 0 auto; 
  padding-top: 30px;
}
</style>
