
import {simNao,estados,TipoLogradouro} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class EnderecoServidorDto {
  id: string ;
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
@ApiProperty({
  enum: simNao,
})
resideOutroPais: simNao  | null;
CEP: string  | null;
logradouro: string  | null;
bairro: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero: number  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numeroExterior: number  | null;
complemento: string  | null;
@ApiProperty({
  enum: estados,
})
uf: estados  | null;
cidade: string  | null;
servidorId: string ;
estadoExterior: string  | null;
@ApiProperty({
  enum: TipoLogradouro,
})
tipoLogradouro: TipoLogradouro ;
tipoLogradouroExterior: string  | null;
descricao: string  | null;
pontoReferencia: string  | null;
}
