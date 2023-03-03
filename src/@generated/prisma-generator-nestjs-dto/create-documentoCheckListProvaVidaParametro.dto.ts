
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoCheckListProvaVidaParametroDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
