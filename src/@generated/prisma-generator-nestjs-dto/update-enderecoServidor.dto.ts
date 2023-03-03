
import {simNao,estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateEnderecoServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  enum: simNao,
})
resideOutroPais?: simNao;
CEP?: string;
logradouro?: string;
bairro?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero?: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numeroExterior?: number;
complemento?: string;
@ApiProperty({
  enum: estados,
})
uf?: estados;
cidade?: string;
servidorId?: string;
estadoExterior?: string;
tipoLogradouroExterior?: string;
descricao?: string;
pontoReferencia?: string;
}
