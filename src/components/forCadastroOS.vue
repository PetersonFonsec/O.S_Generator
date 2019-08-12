<template>
  
  <div class="padding-30" id="formulario-cadastro-os">
    <v-alert transition="slide-y-transition" v-model="alertSucesso" type="success" class="mb-4">    
        O.S cadastrada com sucesso    
    </v-alert>

    <v-alert transition="slide-y-transition" v-model="alertErro" type="error" class="mb-4">    
       Erro ao cadastrada O.S
    </v-alert>

    <v-form @submit.prevent="cadastrar"
        v-model="valid">

        <v-layout wrap>

            <v-flex xs12 pa-1>
                <h3>Ordem do Serviço nº {{ numeroOS }}</h3>
            </v-flex>

            <v-flex xs12 sm6 md4 lg3 pa-2>
                <v-text-field v-model="cliente.nome"
                    label="Name"
                    required/>
            </v-flex>
            
            <v-flex xs12 sm6 md4 lg3 pa-2>
                <v-text-field v-model="cliente.rg"
                    label="RG"
                    required />    
            </v-flex>          

            <v-flex xs12 sm6 md4 lg3 pa-2>   
                <v-text-field v-model="cliente.telefone"
                    label="Telefone"
                    required />    
            </v-flex>
            
            <v-flex xs12 sm6 md4 lg3 pa-2>   
                <v-text-field v-model="cliente.celular"
                    label="Celular"
                    required />    
            </v-flex>
            
            <v-flex xs12 sm4 md4 lg3 pa-2>   
                <v-text-field v-model="cliente.falarCom"
                    label="Falar Com"
                    required />    
            </v-flex>            
                
            <v-flex xs12 sm8 md8 lg12 pa-2>   
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
                    required/>
            </v-flex>

            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field v-model="aparelho.marca"
                    label="Marca"
                    required /> 
            </v-flex>
            
            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field v-model="aparelho.cor"
                    label="Cor"
                    required />  
            </v-flex>

            <v-flex xs12 sm8 md4 lg3 pa-2>
                <v-text-field v-model="aparelho.imei"
                    label="IMEI"
                    required />   
            </v-flex>

            <v-flex xs12 pa-1>
                <h3>Acessórios</h3>       
            </v-flex>

            <v-flex xs12 sm6 md4 lg2 pa-2>
                <v-text-field v-model="acessorios.chip"
                    label="Chip"
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

            <v-flex xs12 pa-1>
                <v-radio-group row wraper>
                    <v-switch v-model="danos.toch" label="Toch" class="mx-4"/>
                    <v-switch v-model="danos.falanteAuricular" label="Falante Auricular" class="mx-4"/>
                    <v-switch v-model="danos.entradaCuricular" label="Entrada Curicular" class="mx-4"/>
                    <v-switch v-model="danos.alguma" label="Alguma" class="mx-4"/>
                    <v-switch v-model="danos.display" label="Display" class="mx-4"/>
                    <v-switch v-model="danos.falanteSom" label="Falante Som" class="mx-4"/>
                    <v-switch v-model="danos.camera" label="Camera" class="mx-4"/>
                    <v-switch v-model="danos.sinalWifi" label="Sinal Wifi" class="mx-4"/>
                    <v-switch v-model="danos.conector" label="Conector" class="mx-4"/>
                    <v-switch v-model="danos.Vibracall" label="Vibra Call" class="mx-4"/>
                    <v-switch v-model="danos.sinalChip" label="Sinal Chip" class="mx-4"/>
                    <v-switch v-model="danos.microfone" label="Microfone" class="mx-4"/>
                    <v-switch v-model="danos.valorTotal" label="Valor Total" class="mx-4"/>
                    <v-switch v-model="danos.frontal" label="Frontal" class="mx-4"/>
                    <v-switch v-model="danos.conector" label="Conector" class="mx-4"/>
                </v-radio-group>
            </v-flex>

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

  </div>    
</template>

<script>
import OS from '../models/OS'

export default {
    data: ()=> ({
        numeroOS: '01',
        alertSucesso: false,
        alertErro: false,
        valid: false,
        cliente:{		
            nome: '',				
            endereco: '' ,
            telefone : '' ,
            falarCom: '' ,
            RG: '' ,
            celular: '',
        },
        aparelho:{		
            modelo: "",
            marca: "",
            Cor: "",
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
            conector: false,
            vibracall: false,
            sinalChip: false,
            microfone: false,
            valorTotal: false,
            frontal: false,
            conectorv: false,
        }
    }),
    methods:{
        resetar(){
            this.cliente = {		
                nome: '',				
                endereco: '' ,
                telefone : '' ,
                falarCom: '' ,
                RG: '' ,
            }

            this.aparelho = {		
                modelo: "",
                marca: "",
                Cor: "",
                imei: "",
            }

            this.acessorios = {		
                chip: "",
                cartaoSd: "",
                capa: "",
            }

            this.danos = {
                toch: false,
                falanteAuricular: false,
                entradaCuricular: false,
                alguma: false,
                display: false,
                falanteSom: false,
                camera: false,
                sinalWifi: false,
                conector: false,
                vibracall: false,
                sinalChip: false,
                microfone: false,
                valorTotal: false,
                frontal: false,
                conectorv: false,
            }

        },
        async cadastrar(){
            const cliente = this.cliente
            const aparelho = this.aparelho
            const acessorios = this.acessorios
            const danos = this.danos
            const ordemSistema = {
                ...cliente,
                ...aparelho,
                ...acessorios,
                ...danos
            }
            // eslint-disable-next-line
            await OS.cadastrar(ordemSistema).catch( _ => this.alertErro = true )

            if(!this.alertErro && !this.alertSucesso){
                this.alertSucesso = true
                this.resetar()
            }
                
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
