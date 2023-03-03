
import {estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoDependente} from './documentoDependente.entity'


export class DocumentoDependenteCarteiraDeClasse {
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
carteira_classe: string  | null;
orgao_de_classe: string  | null;
@ApiProperty({
  enum: estados,
})
uf_de_classe: estados  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero_inscricao_orgao: number  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_expedicao_cdc: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_validade_cdc: Date  | null;
servidorId: string  | null;
documentoDependente?: DocumentoDependente  | null;
documentoDependenteId: string  | null;
}
