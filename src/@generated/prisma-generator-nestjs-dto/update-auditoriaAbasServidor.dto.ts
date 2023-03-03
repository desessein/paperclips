
import {ApiProperty} from '@nestjs/swagger'




export class UpdateAuditoriaAbasServidorDto {
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
