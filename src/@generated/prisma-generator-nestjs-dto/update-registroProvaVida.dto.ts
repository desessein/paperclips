
import {sexo} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRegistroProvaVidaDto {
  cpf?: string;
nome?: string;
dataNascimento?: string;
nomeMae?: string;
@ApiProperty({
  enum: sexo,
})
sexo?: sexo;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ano?: number;
confirmado?: string;
dataConfirmou?: string;
usrConfirmou?: string;
recusado?: string;
usrRecusou?: string;
dataRecusou?: string;
atualizadoAutomaticamente?: string;
obs?: string;
tipoRecusa?: string;
@ApiProperty({
  type: `number`,
  format: `float`,
})
percentualComparacaoSelfieXDocFrente?: number;
@ApiProperty({
  type: `number`,
  format: `float`,
})
percentualComparacaoSelfieXSelfieSorrindo?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
