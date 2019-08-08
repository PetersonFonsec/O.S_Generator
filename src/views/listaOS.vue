<template>
    <Table :headers="headers" :desserts="desserts" title="Lista O.S">    
        <template v-slot>
            <router-link to="/cadastrarOS" tag="span">
                <v-btn  color="info" style="margin-left: 50px;">
                    Nova O.S
                </v-btn>
            </router-link>
        </template>
    </Table>
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
                { text: 'RG', value: 'rg' },
                {
                    text: 'Nome',
                    align: 'left',
                    sortable: false,
                    value: 'nome',
                },
                { text: 'Marca', value: 'marca' },
                { text: 'Modelo', value: 'modelo' },
                { text: 'Falar Com', value: 'falarCom' },
                { text: 'imprimir', value: '' },
            ]
        }),
        methods:{
            fildesHeader( obj ){
                const { marca, modelo } = obj.aparelho
                const { rg, nome,  falarCom } = obj.cliente
                const { _id } = obj
                return { marca, modelo, rg, nome,  falarCom, _id }
            }
        },
        async mounted(){
            const result = await OS.buscarTodos().catch( err => console.log(err) )

            Array.isArray(result) && result.length > 0 
                ? this.desserts = result.map( item => this.fildesHeader(item) )
                : this.desserts = []             
        }
    }
</script>
