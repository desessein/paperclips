
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateDocumentacaoServidorAWSDto {
  filename: string;
originalname: string;
mimeType: string;
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
