
import {ApiProperty} from '@nestjs/swagger'




export class UpdateDocumentoProtocoloDto {
  nome?: string;
fileName?: string;
originalName?: string;
mimeType?: string;
s3Etag?: string;
s3Key?: string;
s3url?: string;
s3Bucket?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
}
