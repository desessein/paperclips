
import {modeParametrizacoesBirthFilter} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ParametrizacoesBirthFilterDto {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
mesAniversarioInicio: number  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
mesAniversarioFim: number  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
mesAniversarioReferencia: number  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataInicialReferencia: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataFinalReferencia: Date  | null;
@ApiProperty({
  enum: modeParametrizacoesBirthFilter,
isArray: true,})
modeBirthFilter: modeParametrizacoesBirthFilter[] ;
}
