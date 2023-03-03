
import {InformacaoDeclarante} from '@prisma/client'
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateCheckListRepresentanteLegalDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
nome: string;
@ApiProperty({
  enum: InformacaoDeclarante,
isArray: true,})
informacaoDeclarante: InformacaoDeclarante[];
}
