
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateAuditoriaCampoServidorDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
aprova?: boolean;
reprova?: boolean;
campo?: string;
dadoAnalisado?: string;
motivo?: string;
descricao?: string;
usrRecusou?: string;
}
