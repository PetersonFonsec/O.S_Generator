<template>
    <div style="padding: 20px;">
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
			toch: "",
			falanteAuricular: "",
			entradaCuricular: "",
			alguma: "",
			display: "",
			falanteSom: "",
			camera: "",
			sinalWifi: "",
			conector: "",
			vibracall: "",
            sinalChip: "",
            microfone: "",
            valorTotal: "",
			frontal: "",
        }),
        async mounted(){
            const { id } = this.$route.params
            const response = await OS.buscar({ _id: id }).catch( err => console.log(err) )
            const result = {
                ...response.acessorios,
                ...response.cliente,
                ...response.aparelho,
            }
            

            if( result.length > 0 ){                
                this.nome = result.nome
                this.endereco = result.endereco
                this.telefone  = result.telefone
                this.falarCom = result.falarCom
                this.rg = result.rg
                this.modelo = result.modelo
                this.marca = result.marca
                this.cor = result.cor
                this.imei = result.imei                
                this.chip = result.chip
                this.cartaoSd = result.cartaoSd
                this.capa = result.capa
                this.defeito = result.defeito
                this.numero = result.numero
                this.celular = result.celular
                this.solucao = result.solucao
                this.toch = result.toch
                this.falanteAuricular = result.falanteAuricular
                this.entradaCuricular = result.entradaCuricular
                this.alguma = result.alguma
                this.display = result.display
                this.falanteSom = result.falanteSom
                this.camera = result.camera
                this.sinalWifi = result.sinalWifi
                this.conector = result.conector
                this.vibracall = result.vibracall
                this.sinalChip = result.sinalChip
                this.valorTotal = result.valorTotal
                this.frontal = result.frontal
                this.conector = result.conector
            }
        }
    }
</script>

<style>
</style>
