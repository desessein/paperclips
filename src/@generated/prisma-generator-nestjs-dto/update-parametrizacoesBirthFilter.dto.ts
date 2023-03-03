
import {modeParametrizacoesBirthFilter} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateParametrizacoesBirthFilterDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
mesAniversarioInicio?: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
mesAniversarioFim?: number;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
mesAniversarioReferencia?: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataInicialReferencia?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataFinalReferencia?: Date;
@ApiProperty({
  enum: modeParametrizacoesBirthFilter,
isArray: true,})
modeBirthFilter?: modeParametrizacoesBirthFilter[];
}
