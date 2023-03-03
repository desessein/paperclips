
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoCheckListParametroRepresentanteLegalDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
