
import {sexo} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class RegistroProvaVidaDto {
  id: string ;
cpf: string ;
nome: string ;
dataNascimento: string ;
nomeMae: string  | null;
@ApiProperty({
  enum: sexo,
})
sexo: sexo ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ano: number ;
confirmado: string  | null;
dataConfirmou: string  | null;
usrConfirmou: string  | null;
recusado: string  | null;
usrRecusou: string  | null;
dataRecusou: string  | null;
atualizadoAutomaticamente: string  | null;
obs: string  | null;
tipoRecusa: string  | null;
@ApiProperty({
  type: `number`,
  format: `float`,
})
percentualComparacaoSelfieXDocFrente: number  | null;
@ApiProperty({
  type: `number`,
  format: `float`,
})
percentualComparacaoSelfieXSelfieSorrindo: number  | null;
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
}
