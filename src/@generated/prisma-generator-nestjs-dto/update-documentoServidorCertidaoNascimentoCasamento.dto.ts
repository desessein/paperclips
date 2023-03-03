
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoServidorCertidaoNascimentoCasamentoDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
livro?: string;
folhas?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero_certidao_nascimentoCasamento?: number;
matricula?: string;
servidorId?: string;
}
