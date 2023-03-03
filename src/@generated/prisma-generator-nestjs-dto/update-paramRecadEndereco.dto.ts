
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParamRecadEnderecoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
