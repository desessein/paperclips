
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoCheckListParametroRepresentanteLegalDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
