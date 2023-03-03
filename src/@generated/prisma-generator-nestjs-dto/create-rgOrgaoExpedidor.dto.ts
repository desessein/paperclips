
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRgOrgaoExpedidorDto {
  nome: string;
orgao_classe: string;
sigla: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
tipo: number;
}
