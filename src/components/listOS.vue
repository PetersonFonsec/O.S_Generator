<template>
  <v-card>
    
    <v-alert transition="slide-y-transition" v-model="success" type="success" class="mb-4">    
        O.S excluida com sucesso    
    </v-alert>

    <v-alert transition="slide-y-transition" v-model="fail" type="error" class="mb-4">    
       Erro ao excluir O.S
    </v-alert>

    <v-card-title>
      {{ title }}

      <v-spacer/>

      <v-text-field
        v-model="search"
        label="Filtrar"
        single-line
        hide-details/>
      
      <slot></slot>  

    </v-card-title>
    
    <v-data-table :headers="headers" :items="desserts" :search="search">

      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.name">
            <td class="text-xs-left" >{{ item.numero }}</td>
            <td class="text-xs-left" >{{ item.nome }}</td>
            <td class="text-xs-left" >{{ item.marca }}</td>
            <td class="text-xs-left" >{{ item.modelo }}</td>
            <td class="text-xs-left" >{{ item.falarCom }}</td>
            <td class="text-xs-left" >{{ item.telefone }}</td>

            <td class="text-xs-center" width="5%">
            
              <router-link :to="`/imprimir/${item._id}`" tag="span">
                <v-btn color="info">
                  <v-icon>print</v-icon>
                </v-btn>
              </router-link>
            
            </td>

            <td class="text-xs-center" width="5%">
            
              <router-link :to="`/cadastrarOS/${item._id}`" tag="span">
                <v-btn color="info">
                  <v-icon>edit</v-icon>
                </v-btn>
              </router-link>
            
            </td>

            <td class="text-xs-center" width="5%">
                <v-btn color="error" @click="excluirOS(item._id)">
                  <v-icon>delete</v-icon>
                </v-btn>            
            </td>

          </tr>
        </tbody>
      </template>

      <template v-slot:no-data>
          <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
          </v-alert>
      </template>
      
      <template v-slot:no-results>
          <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
          </v-alert>
      </template>

  </v-data-table>

  </v-card>
</template>

<script>
  import OS from '../models/OS'
import { setTimeout } from 'timers';
  export default {
    name:"ListaOs",
    props:{
      headers:{
        type: Array,
        required: true,
      },
      title:{
        type: String,
        required: true,
      },
      desserts:{
        type: Array,
        required: true,
      }
    },
    data: () => ({
      search:'',
      singleSelect: false,
      items: {},
      selected: [],
      fail: false,
      success: false,
    }),
    methods:{
      droparItemTabela(_id){

        this.desserts = this.desserts.filter( item => item._id !== _id )

      },
      toggleAlert(result){

        result ? this.success = true : this.fail = true

        setTimeout( ()=>{
          result ? this.success = false : this.fail = false
        },3000)

      },
      async excluirOS(_id){
        // const result = await OS.excluir({ _id })
        const result = 1
        
        this.toggleAlert(result)

        this.droparItemTabela( _id )

      }
    }
  }
</script>
<style>

</style>
