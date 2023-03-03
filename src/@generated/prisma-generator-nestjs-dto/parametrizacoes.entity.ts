
import {situacao_previdenciaria} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {ParametrizacoesBirthFilter} from './parametrizacoesBirthFilter.entity'
import {Instituto} from './instituto.entity'
import {ParamRecadDadosBasicos} from './paramRecadDadosBasicos.entity'
import {ParamRecadDadosDocumentos} from './paramRecadDadosDocumentos.entity'
import {ParamRecadEndereco} from './paramRecadEndereco.entity'
import {ParamRecadCargos} from './paramRecadCargos.entity'
import {ParamRecadTempoCont} from './paramRecadTempoCont.entity'
import {ParamRecadDependente} from './paramRecadDependente.entity'
import {ParamRecadBeneficio} from './paramRecadBeneficio.entity'
import {ParamRecadInstituidor} from './paramRecadInstituidor.entity'
import {CheckList} from './checkList.entity'
import {Documento} from './documento.entity'
import {CheckListRepresentanteLegal} from './checkListRepresentanteLegal.entity'
import {DocumentoRepresentanteLegal} from './documentoRepresentanteLegal.entity'
import {DocumentoProvaVida} from './documentoProvaVida.entity'
import {CheckListProvaVida} from './checkListProvaVida.entity'
import {AnexoProvaVida} from './anexoProvaVida.entity'


export class Parametrizacoes {
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
parametrizacoesBirthFilter?: ParametrizacoesBirthFilter[] ;
instituto?: Instituto ;
institutoId: string ;
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
paramRecadDadosBasicos?: ParamRecadDadosBasicos  | null;
paramRecadDadosDocumentos?: ParamRecadDadosDocumentos  | null;
paramRecadEndereco?: ParamRecadEndereco  | null;
paramRecadCargos?: ParamRecadCargos  | null;
paramRecadTempoCont?: ParamRecadTempoCont  | null;
paramRecadDependente?: ParamRecadDependente  | null;
paramRecadBeneficio?: ParamRecadBeneficio  | null;
paramRecadInstituidor?: ParamRecadInstituidor  | null;
CheckList?: CheckList[] ;
Documento?: Documento[] ;
CheckListRepresentanteLegal?: CheckListRepresentanteLegal[] ;
DocumentoRepresentanteLegal?: DocumentoRepresentanteLegal[] ;
documentoProvaVida?: DocumentoProvaVida[] ;
checkListProvaVida?: CheckListProvaVida[] ;
anexoProvaVida?: AnexoProvaVida[] ;
}
