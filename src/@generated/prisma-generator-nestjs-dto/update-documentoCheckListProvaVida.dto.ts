
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoCheckListProvaVidaDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}