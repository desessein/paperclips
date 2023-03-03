
import {ApiProperty} from '@nestjs/swagger'


export class DocumentacaoServidorDto {
  id: string ;
filename: string ;
originalname: string ;
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
