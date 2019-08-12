<template>
    <div style=" background-color: #fff; padding: 20px;">
        <tabela 
            :nome="nome"
            :endereco="endereco"
            :telefone="telefone"
            :falarCom="falarCom"
            :rg="rg"
            :modelo="modelo"
            :marca="marca"
            :cor="cor"
            :imei="imei"           
            :chip="chip"
            :cartaoSd="cartaoSd"
            :capa="capa"
            :defeito="defeito"
			:numero="numero"
			:celular="celular"
			:solucao="solucao"
			:toch="toch"
			:falanteAuricular="falanteAuricular"
			:entradaCuricular="entradaCuricular"
			:alguma="alguma"
			:display="display"
			:falanteSom="falanteSom"
			:camera="camera"
			:sinalWifi="sinalWifi"
			:conector="conector"
			:vibracall="vibracall"
            :sinalChip="sinalChip"
            :microfone="microfone"
            :valorTotal="valorTotal"
			:frontal="frontal"/>
    </div>
</template>

<script>
   import tabela from '@/components/tabela.vue'
    import OS from '@/models/OS'
    export default {
        components: { tabela },
        data: ()=>({
            nome:"",
            endereco:"",
            telefone :"",
            falarCom:"",
            rg:"",
            modelo:"",
            marca:"",
            cor:"",
            imei:"",            
            chip:"",
            cartaoSd:"",
            capa:"",
            defeito: "",
			numero: "",
			celular: "",
			solucao: "",
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
            valorTotal: 0,
			frontal: false,
        }),
        async mounted(){
            const { id } = this.$route.params
            const response = await OS.buscar({ _id: id }).catch( err => console.log(err) )
            
            if( response ){                
                this.nome       = response.nome
                this.endereco   = response.endereco
                this.telefone   = response.telefone
                this.falarCom   = response.falarCom
                this.rg         = response.rg
                this.modelo     = response.modelo
                this.marca      = response.marca
                this.cor        = response.cor
                this.imei       = response.imei                
                this.chip       = response.chip
                this.cartaoSd   = response.cartaoSd
                this.capa       = response.capa
                this.defeito    = response.defeito
                this.numero     = response.numero
                this.celular    = response.celular
                this.solucao    = response.solucao
                this.toch       = response.toch
                this.alguma     = response.alguma
                this.display    = response.display
                this.camera     = response.camera
                this.sinalWifi  = response.sinalWifi
                this.falanteSom = response.falanteSom
                this.conector   = response.conector
                this.vibracall  = response.vibracall
                this.sinalChip  = response.sinalChip
                this.valorTotal = response.valorTotal
                this.frontal    = response.frontal
                this.conector   = response.conector
                this.falanteAuricular = response.falanteAuricular
                this.entradaCuricular = response.entradaCuricular
            }
        }
    }
</script>

<style>
</style>
