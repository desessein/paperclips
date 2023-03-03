
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
salvoTemporariamente?: boolean;
servidorId: string;
}
