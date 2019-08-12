<template>
    <div>
        <Table :headers="headers" :desserts="desserts" title="Lista O.S">    
            <template v-slot>
                <router-link to="/cadastrarOS" tag="span">
                    <v-btn  color="info" style="margin-left: 50px;">
                        Nova O.S
                    </v-btn>
                </router-link>
            </template>
        </Table>
    </div>
</template>

<script>
    import Table from '@/components/listOS'
    import OS from '@/models/OS'
    
    export default {
        name:"OS",
        components : { Table },
        data: () => ({
            desserts:[],
            headers: [                
                { text: 'Numero', value: 'numero' },
                {
                    text: 'Nome',
                    align: 'left',
                    sortable: false,
                    value: 'nome',
                },
                { text: 'Marca', value: 'marca' },
                { text: 'Modelo', value: 'modelo' },
                { text: 'Falar Com', value: 'falarCom' },
                { text: 'Telefone', value: 'telefone' },
                { text: 'imprimir', value: '' },
                { text: 'editar', value: '' },
            ]
        }),
        async mounted(){
            const result = await OS.buscarTodos().catch( err => console.log(err) )

            Array.isArray(result) && result.length > 0 
                ? this.desserts = result
                : this.desserts = []             
        }
    }
</script>
