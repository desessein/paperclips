
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRgOrgaoExpedidorDto {
  nome?: string;
orgao_classe?: string;
sigla?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
tipo?: number;
}
