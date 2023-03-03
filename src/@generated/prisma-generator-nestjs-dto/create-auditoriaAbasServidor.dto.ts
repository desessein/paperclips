
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateAuditoriaAbasServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
acao?: string;
abaAnalisada?: string;
motivo?: string;
}
