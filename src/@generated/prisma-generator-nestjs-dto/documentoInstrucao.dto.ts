
import {ApiProperty} from '@nestjs/swagger'


export class DocumentoInstrucaoDto {
  id: string ;
nome: string ;
fileName: string ;
originalName: string ;
mimeType: string ;
s3Etag: string  | null;
s3Key: string  | null;
s3url: string  | null;
s3Bucket: string  | null;
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
}
