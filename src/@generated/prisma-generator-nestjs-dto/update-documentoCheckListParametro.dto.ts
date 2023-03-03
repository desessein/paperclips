
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoCheckListParametroDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
