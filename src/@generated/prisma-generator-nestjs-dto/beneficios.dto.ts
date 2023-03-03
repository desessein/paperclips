
import {TipoBeneficio,statusRegistroAudit} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class BeneficiosDto {
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
Matricula: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataConcessao: Date  | null;
DocumentoConcessorio: string  | null;
DocumentoConcessorioNum: string  | null;
Orgao: string  | null;
@ApiProperty({
  enum: TipoBeneficio,
})
TipoBeneficio: TipoBeneficio  | null;
@ApiProperty({
  type: `number`,
  format: `float`,
})
ValorBeneficio: number  | null;
salvoTemporariamente: boolean  | null;
@ApiProperty({
  enum: statusRegistroAudit,
})
statusRegistroAudit: statusRegistroAudit ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
auditAt: Date  | null;
userIdAudit: string  | null;
}
