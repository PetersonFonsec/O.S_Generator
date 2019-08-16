<template>
	<table>
		<thead>
			<th colspan="2">
				<img src="" alt="logo">
			</th>
			<th  colspan="2">
				<span class="red bold font25"> Fast Cell Assistência </span>
				
				<p class="bold font20">
					Rua Doutor João Carlos de azevedo<br> 

					Jardim maringá mauá-sp<br>

					lojas 15 e 16 @fastcell <br>
				</p>
			</th>
		</thead>

		<tbody>
			<tr class="bg-cinza">
				<td colspan="4" class="bold font20 bg-cinza center">Ordem do Serviço nº {{ numero }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Nome:</td>
				<td colspan="3">{{ nome }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold" >Endereço:</td>
				<td colspan="3">{{ endereco }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Telefone(fixo):</td>
				<td colspan="1">{{ telefone }}</td>
				<td colspan="1" class="bold">Celular:</td>
				<td colspan="1">{{ celular }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Falar Com:</td>
				<td colspan="3">{{ falarCom }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Endereço:</td>
				<td colspan="3">{{ endereco }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">RG:</td>
				<td colspan="3">{{ rg }}</td>
			</tr>
			<tr class="bg-cinza">
				<td colspan="4" class="bold font20 bg-cinza center">Dados do aparelho</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Modelo:</td>
				<td colspan="3">{{ modelo }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Marca:</td>
				<td colspan="3">{{ marca }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Cor:</td>
				<td colspan="3">{{ cor }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">IMEI:</td>
				<td colspan="3">{{ imei }}</td>
			</tr>
			<tr class="bg-cinza">
				<td colspan="4" class="bold font20 bg-cinza center">Acessórios</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Chip:</td>
				<td colspan="3">{{ chip }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Cartao SD:</td>
				<td colspan="3">{{ cartaoSd }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Capa:</td>
				<td colspan="3">{{ capa }}</td>
			</tr>
			<tr class="bg-cinza">
				<td colspan="4" class="bold font20 bg-cinza center" >Defeito/Problema relatado pelo Cliente</td>
			</tr>
			<tr>
				<td colspan="4">{{ defeito }}</td>
			</tr>
			<tr>
				<td colspan="4">  linha em branca </td>
			</tr>
			<tr class="bg-cinza">
				<td colspan="4" class="bold font20 bg-cinza center" >Solução previamente constatada</td>
			</tr>
			<tr>
				<td colspan="4">{{ solucao }}</td>
			</tr>
			<tr class="bg-cinza">
				<td colspan="4" class="bold font20 bg-cinza">Valor Total: {{ valorTotal }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Toch {{ toch | defeito }}</td>
				<td colspan="1" class="bold">Falante auricular {{ falanteAuricular | defeito }}</td>
				<td colspan="1" class="bold">Entrada de chip {{ entradaCuricular | defeito }}</td>
				<td colspan="1" class="bold">sis alguma coisa {{ alguma | defeito }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Display {{ display | defeito }}</td>
				<td colspan="1" class="bold">Falante de som {{ falanteSom | defeito }}</td>
				<td colspan="1" class="bold">Camera {{ camera | defeito }}</td>
				<td colspan="1" class="bold">sis alguma coisa {{ alguma | defeito }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Frontal {{ frontal | defeito }}</td>
				<td colspan="1" class="bold">Microfone {{ microfone | defeito }}</td>
				<td colspan="1" class="bold">sinal de wifi {{ sinalWifi | defeito }}</td>
				<td colspan="1" class="bold">sis alguma coisa {{ alguma | defeito }}</td>
			</tr>
			<tr>
				<td colspan="1" class="bold">Conector {{ conector | defeito }}</td>
				<td colspan="1" class="bold">vibracall {{ vibracall | defeito }}</td>
				<td colspan="1" class="bold">sinal de chip {{ sinalChip | defeito }}</td>
				<td colspan="1" class="bold">sis alguma coisa {{ alguma | defeito }}</td>
			</tr>
		</tbody>

		<tfoot>
			<tr>
				<td colspan="4" class="bold font18 red center">
					EMPRESA FEST CELL SÓ IRA SE RESPONSABILIZAR PELOS ITENS MARCADOS [...]
					SERVIÇO PRESTADO E/OU PEÇAS TROCADAS PELA LOJA
				</td>
			</tr>
		</tfoot>
	</table>
</template>

<script>
    const formatoString = {
        type: String,
        require: true,
        default: '',
	}

	const formatoBoolean = {
		type: Boolean,
        require: true,
        default: false,
	}
	
    export default {
        props:{
			numero: {
				type: String,
				require: true,
				default: '0'
			},
            nome: formatoString,				
            endereco: formatoString,
            telefone : formatoString,
            falarCom: formatoString,
            rg:  formatoString,
            modelo: formatoString,
            marca: formatoString,
            cor: formatoString,
            imei: formatoString,
            chip: formatoString,
            cartaoSd: formatoString,
            capa: formatoString,
			defeito: formatoString,
			celular: formatoString,
			solucao: formatoString,
			toch: formatoBoolean,
			falanteAuricular: formatoBoolean,
			entradaCuricular: formatoBoolean,
			alguma: formatoBoolean,
			display: formatoBoolean,
			falanteSom: formatoBoolean,
			camera: formatoBoolean,
			sinalWifi: formatoBoolean,
			vibracall: formatoBoolean,
			sinalChip: formatoBoolean,
			microfone: formatoBoolean,
			frontal: formatoBoolean,
			conector: formatoBoolean,
			valorTotal: formatoString
		},
		filters:{
			defeito: valor => valor ? 'X' : '' ,
		}
    }
</script>

<style scoped>
.v-application .red{
	background: #fff !important;
	border: none;
}
.bold{
    font-weight: bold;				
}
.center{
    text-align: center;				
}
.red{
    color: red;				
}
.font20{
    font-size: 20px;

}
.font25{
    font-size: 25px;				
}
.font18{
    font-size: 18px;					
}
.bg-cinza{
    background-color: #999;
}
table, tr, td, th, tfoot {
	background-color: #fff;
    border-collapse: collapse;
    border: 1px solid #000;
    text-align: center;
    padding: 3px;
}
table{
    margin: 20px auto;
}
</style>
