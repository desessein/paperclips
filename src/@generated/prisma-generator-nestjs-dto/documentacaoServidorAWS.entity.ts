
import {ApiProperty} from '@nestjs/swagger'
import {User} from './user.entity'
import {Servidor} from './servidor.entity'
import {Documento} from './documento.entity'
import {DocumentoProvaVida} from './documentoProvaVida.entity'
import {DocumentoRepresentanteLegal} from './documentoRepresentanteLegal.entity'


export class DocumentacaoServidorAWS {
  id: string ;
filename: string ;
originalname: string ;
mimeType: string ;
s3Etag: string  | null;
s3Key: string  | null;
s3url: string  | null;
s3Bucket: string  | null;
user?: User  | null;
userId: string  | null;
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
servidor?: Servidor ;
servidorId: string ;
documento?: Documento  | null;
documentoId: string  | null;
documentoProvaVida?: DocumentoProvaVida  | null;
documentoProvaVidaId: string  | null;
DocumentoRepresentanteLegal?: DocumentoRepresentanteLegal  | null;
documentoRepresentanteLegalId: string  | null;
}
