<template>
  
  <div class="padding-30" id="formulario-cadastro-os">
    <v-alert transition="slide-y-transition" v-model="alertSucesso" type="success" class="mb-4">    
        O.S cadastrada com sucesso    
    </v-alert>

    <v-alert transition="slide-y-transition" v-model="alertErro" type="error" class="mb-4">    
       Erro ao cadastrada O.S
    </v-alert>
      
    <v-form  
        ref="form"
        v-model="valid"
        :lazy-validation="true"
        @submit.prevent="cadastrar" >

        <v-layout wrap>

            <v-flex xs12 pa-1>
                <h3>Ordem do Serviço nº {{ numeroOS }}</h3>
            </v-flex>

            <v-flex xs12 sm6 md4 lg3 pa-2>
                <v-text-field v-model="cliente.nome"
                    label="Name"
                    :rules="campoObrigatorio"
                    required/>
            </v-flex>
            
            <v-flex xs12 sm6 md4 lg3 pa-2>
                <v-text-field 
                    :rules="campoObrigatorio"
                    v-model="cliente.rg"
                    v-mask="'##.###.###-##'"
                    label="RG"
                    required />    
            </v-flex>          

            <v-flex xs12 sm6 md4 lg3 pa-2>   
                <v-text-field v-model="cliente.telefone"
                    v-mask="'(##) ####-####'"
                    label="Telefone"
                    required />    
            </v-flex>
            
            <v-flex xs12 sm6 md4 lg3 pa-2>   
                <v-text-field v-model="cliente.celular"
                    v-mask="'(##) #####-####'"
                    label="Celular"
                    :rules="campoObrigatorio"
                    required />    
            </v-flex>
            
            <v-flex xs12 sm4 md4 lg3 pa-2>   
                <v-text-field v-model="cliente.falarCom"
                    label="Falar Com"
                    :rules="campoObrigatorio"
                    required />    
            </v-flex>            
                
            <v-flex xs12 sm8 md8 lg9 pa-2>   
                <v-text-field v-model="cliente.endereco"
                    label="Endereco"
                    required /> 
            </v-flex>
            
            <v-flex xs12 pa-1>
                <h3>Dados do aparelho</h3>
            </v-flex>

            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field v-model="aparelho.modelo"
                    label="Modelo"
                    :rules="campoObrigatorio"
                    required/>
            </v-flex>

            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field v-model="aparelho.marca"
                    label="Marca"
                    :rules="campoObrigatorio"
                    required /> 
            </v-flex>
            
            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field v-model="aparelho.cor"
                    label="Cor"
                    required />  
            </v-flex>

            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field 
                    v-model="aparelho.imei"
                    v-mask="'######-##-######-#'"
                    label="IMEI"
                    :rules="campoObrigatorio"
                    required />   
            </v-flex>

            <v-flex xs12 pa-1>
                <h3>Acessórios</h3>       
            </v-flex>

            <v-flex xs12 sm6 md4 lg2 pa-2>
                <v-text-field v-model="acessorios.chip"
                    label="Chip"
                    :rules="campoObrigatorio"
                    required/>   
            </v-flex>

            <v-flex xs12 sm6 md4 lg2 pa-2>
                <v-text-field v-model="acessorios.cartaoSd"
                    label="Cartao SD"
                    required /> 
            </v-flex>

            <v-flex xs12 sm6 md4 lg2 pa-2>
                <v-text-field v-model="acessorios.capa"
                    label="Capa"
                    required />    
            </v-flex>

            <v-flex xs12 pa-1>
                <h3>Danos</h3>       
            </v-flex>

            <v-flex xs12 md4 lg3>
                <v-radio-group row wraper>
                    <v-switch v-model="danos.falanteAuricular" label="Falante Auricular" class="mx-2"/>
                    <v-switch v-model="danos.entradaCuricular" label="Entrada Curicular" class="mx-2"/>
                    <v-switch v-model="danos.falanteSom"       label="Falante Som"       class="mx-2"/>
                </v-radio-group>
            </v-flex>

            <v-flex xs12 md3 lg2>
                <v-radio-group row wraper>                    
                    <v-switch v-model="danos.sinalWifi"  label="Sinal Wifi"  class="mx-5"/>                
                    <v-switch v-model="danos.alguma"     label="Alguma"      class="mx-5"/>
                    <v-switch v-model="danos.display"    label="Display"     class="mx-5"/>
                </v-radio-group>
            </v-flex>

            <v-flex xs12 md3 lg2>
                <v-radio-group row wraper>
                    <v-switch v-model="danos.microfone"  label="Microfone"  class="mx-5"/>
                    <v-switch v-model="danos.Vibracall"  label="Vibra Call" class="mx-5"/>
                    <v-switch v-model="danos.sinalChip"  label="Sinal Chip" class="mx-5"/>
                </v-radio-group>
            </v-flex>

            <v-flex xs12 md3 lg2>
                <v-radio-group row wraper>
                    <v-switch v-model="danos.frontal"    label="Frontal"   class="mx-5"/>
                    <v-switch v-model="danos.conector"   label="Conector"  class="mx-5"/>
                    <v-switch v-model="danos.toch"       label="Toch"      class="mx-5"/>   
                </v-radio-group>
            </v-flex>


            <v-flex xs12 md3 lg2>
                <v-radio-group row wraper>          
                    <v-switch v-model="danos.conector"   label="Conector"  class="mx-5"/>                    
                    <v-switch v-model="danos.camera"     label="Camera"    class="mx-5"/>
                </v-radio-group>
            </v-flex>
            
            <template v-if="acao === 'incluir'">
                <v-flex xs6 sm6 md4 >
                    <v-text-field
                        v-model="danos.valorTotal"
                        v-money="money"
                        label="Valor Total"
                        class="mx-5"/>
                </v-flex>
            </template>

            <template v-else>
                <v-flex xs6 sm6 md4 >
                    <v-text-field
                        v-model="danos.valorTotal"
                        label="Valor Total"
                        class="mx-5"/>
                </v-flex>
            </template>

            <v-flex xs12 lg12 pa-2>
                <v-layout align-content-center justify-center>
                    <v-btn color="success"
                        @click="cadastrar"
                        class="mr-4">
                        cadastrar
                    </v-btn>

                    <v-btn color="error"
                        @click="resetar"
                        class="mr-4">
                        Resetar Campos
                    </v-btn>
                </v-layout>
            </v-flex>

        </v-layout>         
    </v-form>
    
    <v-alert transition="slide-y-transition" v-model="alertSucesso" type="success" class="mb-4">    
        O.S cadastrada com sucesso    
    </v-alert>

    <v-alert transition="slide-y-transition" v-model="alertErro" type="error" class="mb-4">    
       Erro ao cadastrada O.S
    </v-alert>
  </div>    
</template>

<script>
import OS from '../models/OS'
import { mask } from 'vue-the-mask'
import { VMoney } from 'v-money'

export default {

    directives: { mask, money: VMoney },

    data: () => ({
        acao : 'incluir',
        idOS: '',
        OSAlterada: '',
        numeroOS: '',
        campoObrigatorio: [valor => !!valor || 'Campo obrigatorio'],
        alertSucesso: false,
        alertErro: false,
        valid: false,
        money:{
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            precision: 2,
            masked: false,
        },
        cliente:{		
            nome: '',				
            endereco: '' ,
            telefone : '' ,
            falarCom: '' ,
            rg: '' ,
            celular: '',
        },
        aparelho:{		
            modelo: "",
            marca: "",
            cor: "",
            imei: "",
        },
        acessorios:{		
            chip: "",
            cartaoSd: "",
            capa: "",
        },
        danos:{
            toch: false,
            falanteAuricular: false,
            entradaCuricular: false,
            alguma: false,
            display: false,
            falanteSom: false,
            camera: false,
            sinalWifi: false,
            vibracall: false,
            sinalChip: false,
            microfone: false,
            valorTotal: 0,
            frontal: false,
            conector: false,
        }
    }),

    methods:{
        resetar(){
            this.$refs.form.reset()
            this.acao = 'incluir'
            this.idOS = ''
        },

        async cadastrar(){

            if(!this.$refs.form.validate()) return false;

            const cliente    = this.cliente
            const aparelho   = this.aparelho
            const acessorios = this.acessorios
            const danos      = this.danos
            const numero     = this.numeroOS.toString()

            const ordemSistema = {
                ...cliente,
                ...aparelho,
                ...acessorios,
                ...danos,
                numero
            }

            let result = { }

            // eslint-disable-next-line
            result = this.acao === 'incluir'
                ?  await OS.cadastrar( ordemSistema ).catch( () => this.alertErro = true )
                :  await OS.alterar( { _id: this.idOS }, ordemSistema  ).catch( () => this.alertErro = true )
            
            const chave_id = Object.keys(result).includes("_id")
            
            chave_id || result
                ? this.alertSucesso = true
                : this.alertErro = true

            return this.resetar()
        },

        async gerarNumeroOS(){
            
            const resultado = await OS.buscarTodos().catch( console.log )
            
            const apenasNumero =  OSS => OSS.map( a=> a.numero )
            
            const maiorNumeroOS = OSS => OSS.reduce( ( a, b ) => a > b ? a : b )
                        
            if(resultado.length > 0){

                const maiorNumero = maiorNumeroOS( apenasNumero(resultado) )
                
                this.numeroOS = parseInt(maiorNumero) + 1;
            
            }else{
                this.numeroOS = 1
            }   
        },

        setarData(osAlterada){
            
            const os = osAlterada

            for( let prop in os ){
                                
                this.cliente[prop]    !== undefined ? this.cliente[prop]    = os[prop] : ''
                this.aparelho[prop]   !== undefined ? this.aparelho[prop]   = os[prop] : ''
                this.acessorios[prop] !== undefined ? this.acessorios[prop] = os[prop] : ''
                this.danos[prop]      !== undefined ? this.danos[prop]      = os[prop] : ''
            }
        }
    },

    async mounted(){  
        const { id } = this.$route.params      
        
        if( id ){

            const osAlterada = await OS.buscar({ _id: id })
            
            const { numero, valorTotal } = osAlterada

            this.acao = 'editar' 
            
            this.idOS = id
            
            this.numeroOS = numero

            // const dropReal = valor => valor.replace('R$ ', '')

            // const dropPontos =  valor => valor.replace(/\./g,'').replace(/,/g,'.')

            // const compose = ( f,h ) => x => f( h(x) )

            // const vTotal = compose( dropReal, dropPontos )( valorTotal )
                                   
            this.danos.valorTotal = valorTotal
            
            this.setarData(osAlterada)

        }else{

            this.gerarNumeroOS()

        }
            
    }
}

</script>

<style>
    #formulario-cadastro-os{
        background-color: #fff;
    }
    .padding-30{
        padding: 30px;
    }
</style>
