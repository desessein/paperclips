
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ParametrizacoesDto {
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
titulo: string  | null;
isActive: boolean ;
@ApiProperty({
  enum: situacao_previdenciaria,
isArray: true,})
situacaoPrevidenciaria: situacao_previdenciaria[] ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataVigenteInicio: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataVigenteFim: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataLimiteImplantacao: Date  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
anoReferencia: number  | null;
msgVigenciaAnteriorPendente: string  | null;
msgVigenciaAtualPendente: string  | null;
msgVigenciaPosteriorPendente: string  | null;
ativarAllByBirth: boolean ;
ativarFormRecad: boolean ;
ativarDadosBasicos: boolean ;
ativarDadosDocumentos: boolean ;
ativarEndereco: boolean ;
ativarCargos: boolean ;
ativarTempoCont: boolean ;
ativarDependente: boolean ;
ativarInstituidor: boolean ;
ativarBeneficios: boolean ;
ativarAnexarDocumentos: boolean ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ativarLimiteIdadeFilho: number ;
ativarFoto: boolean ;
tabelaSisprev: boolean ;
ativarProvaVida: boolean ;
ativarComparaSelfieFoto: boolean ;
ativarSelfieSorrindo: boolean ;
ativarDeteccaoMovimento: boolean ;
ativarAprovacaoAutomatica: boolean ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
ativarPercentualAprovacao: number ;
}
