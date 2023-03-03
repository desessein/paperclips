
import {ApiProperty} from '@nestjs/swagger'


export class InstitutoDto {
  id: string ;
nome: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date  | null;
razaoSocial: string  | null;
cnpj: string  | null;
sigla: string  | null;
nomeResponsavel: string  | null;
cpfResponsavel: string  | null;
cargoResponsavel: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dtInicioGestao: Date  | null;
emailResponsavel: string  | null;
telefone: string  | null;
cep: string  | null;
logradouro: string  | null;
bairro: string  | null;
numero: string  | null;
complemento: string  | null;
uf: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
cidade: number  | null;
msgVigenciaAnteriorPendente: string  | null;
msgVigenciaAtualPendente: string  | null;
msgVigenciaPosteriorPendente: string  | null;
msgStatusAguardaAnalise: string  | null;
msgStatusRejeitado: string  | null;
msgStatusReprovado: string  | null;
msgStatusAprovado: string  | null;
msgProtocoloEmAnalise: string  | null;
msgProtocoloAprovado: string  | null;
msgFormConfirmacao: string  | null;
msgFormFinalizacao: string  | null;
msgFormContinuaDepois: string  | null;
}
