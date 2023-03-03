
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoCheckListProvaVidaParametroDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
