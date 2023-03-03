
import {sexo,MotivoInicioDependencia,statusRegistroAudit} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class InstituidorDto {
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
CPF: string  | null;
NomeInstituidor: string  | null;
@ApiProperty({
  enum: sexo,
})
SexoInstituidor: sexo  | null;
@ApiProperty({
  enum: MotivoInicioDependencia,
})
MotivoInicioDependencia: MotivoInicioDependencia  | null;
MotivoDependenciaEscrita: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataNascimentoInstituidor: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataFalecimentoInstituidor: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataInicioDependencia: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
DataFimDependencia: Date  | null;
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
