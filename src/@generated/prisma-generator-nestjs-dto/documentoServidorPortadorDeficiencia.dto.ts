
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoServidorPortadorDeficienciaDto {
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
possui_necessidade: boolean  | null;
possui_molestia_grave: boolean  | null;
possui_doenca_incapacitante: boolean  | null;
invalidez_trabalho: boolean  | null;
tipo_necessidade: string  | null;
cid_necessidade: string[] ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_laudo_necessidade: Date  | null;
servidorId: string ;
}
