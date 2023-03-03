
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoServidor} from './documentoServidor.entity'


export class DocumentoServidorCertidaoNascimentoCasamento {
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
livro: string  | null;
folhas: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
numero_certidao_nascimentoCasamento: number  | null;
matricula: string  | null;
servidorId: string  | null;
documentoServidor?: DocumentoServidor[] ;
}
