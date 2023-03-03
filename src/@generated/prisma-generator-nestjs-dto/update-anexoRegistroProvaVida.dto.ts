
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAnexoRegistroProvaVidaDto {
  nome?: string;
foto?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
tipo?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
