
import {TipoBeneficio} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateBeneficiosDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
createdAt?: Date;
Matricula?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataConcessao?: Date;
DocumentoConcessorio?: string;
DocumentoConcessorioNum?: string;
Orgao?: string;
@ApiProperty({
  enum: TipoBeneficio,
})
TipoBeneficio?: TipoBeneficio;
@ApiProperty({
  type: `number`,
  format: `float`,
})
ValorBeneficio?: number;
salvoTemporariamente?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt?: Date;
userIdAudit?: string;
}
