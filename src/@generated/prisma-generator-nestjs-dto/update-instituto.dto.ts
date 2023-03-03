
import {ApiProperty} from '@nestjs/swagger'




export class UpdateInstitutoDto {
  nome?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
razaoSocial?: string;
cnpj?: string;
sigla?: string;
nomeResponsavel?: string;
cpfResponsavel?: string;
cargoResponsavel?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dtInicioGestao?: Date;
emailResponsavel?: string;
telefone?: string;
cep?: string;
logradouro?: string;
bairro?: string;
numero?: string;
complemento?: string;
uf?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
cidade?: number;
msgVigenciaAnteriorPendente?: string;
msgVigenciaAtualPendente?: string;
msgVigenciaPosteriorPendente?: string;
msgStatusAguardaAnalise?: string;
msgStatusRejeitado?: string;
msgStatusReprovado?: string;
msgStatusAprovado?: string;
msgProtocoloEmAnalise?: string;
msgProtocoloAprovado?: string;
msgFormConfirmacao?: string;
msgFormFinalizacao?: string;
msgFormContinuaDepois?: string;
}
