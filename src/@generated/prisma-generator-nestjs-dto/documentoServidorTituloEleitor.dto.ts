
import {estados} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoServidorTituloEleitorDto {
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
numero_do_titulo_eleitor: string  | null;
zona_eleitoral: string  | null;
secao_eleitoral: string  | null;
@ApiProperty({
  enum: estados,
})
UF_eleitoral: estados  | null;
cidade_eleitoral: string  | null;
servidorId: string  | null;
}
