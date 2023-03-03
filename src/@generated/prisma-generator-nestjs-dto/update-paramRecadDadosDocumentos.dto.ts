
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadDadosDocumentosDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
