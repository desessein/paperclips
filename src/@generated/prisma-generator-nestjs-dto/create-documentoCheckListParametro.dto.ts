
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoCheckListParametroDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
