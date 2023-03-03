
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoServidorPortadorDeficienciaDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
possui_necessidade?: boolean;
possui_molestia_grave?: boolean;
possui_doenca_incapacitante?: boolean;
invalidez_trabalho?: boolean;
tipo_necessidade?: string;
cid_necessidade: string[];
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
data_laudo_necessidade?: Date;
servidorId: string;
}
