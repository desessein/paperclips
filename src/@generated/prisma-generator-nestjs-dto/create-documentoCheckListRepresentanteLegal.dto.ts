
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentoCheckListRepresentanteLegalDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
  default: 0,
})
numOrdem?: number;
}
