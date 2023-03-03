
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoDependenteDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
servidorId: string;
}
