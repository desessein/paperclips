
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoCheckListProvaVidaDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
