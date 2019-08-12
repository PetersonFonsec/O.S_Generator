<template>
  <v-card>
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
            <td class="text-xs-left" width="10%">{{ item.rg }}</td>
            <td class="text-xs-left" width="20%">{{ item.nome }}</td>
            <td class="text-xs-left" width="20%">{{ item.marca }}</td>
            <td class="text-xs-left" width="20%">{{ item.modelo }}</td>
            <td class="text-xs-left" width="20%">{{ item.falarCom }}</td>
            <td class="text-xs-center" width="25%">
            
              <router-link :to="`/imprimir/${item._id}`" tag="span">
                <v-btn color="info">
                  <v-icon>print</v-icon>
                </v-btn>
              </router-link>
            
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
    }),
  }
</script>
<style>

</style>
