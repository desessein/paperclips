
import {ApiProperty} from '@nestjs/swagger'
import {InstitutoLogo} from './institutoLogo.entity'
import {Orgao} from './orgao.entity'
import {User} from './user.entity'
import {GrupoAcesso} from './grupoAcesso.entity'
import {Servidor} from './servidor.entity'
import {ImportSisprev} from './importSisprev.entity'
import {Documento} from './documento.entity'
import {CheckList} from './checkList.entity'
import {DocumentoProvaVida} from './documentoProvaVida.entity'
import {CheckListProvaVida} from './checkListProvaVida.entity'
import {AnexoProvaVida} from './anexoProvaVida.entity'
import {Parametrizacoes} from './parametrizacoes.entity'
import {MotivoRecusa} from './motivoRecusa.entity'
import {TipoRecadastramento} from './tipoRecadastramento.entity'
import {DocumentoInstrucao} from './documentoInstrucao.entity'
import {DocumentoProtocolo} from './documentoProtocolo.entity'
import {RegistroProvaVida} from './registroProvaVida.entity'
import {ProtocoloFinalizado} from './protocoloFinalizado.entity'
import {ProtocoloAprovado} from './protocoloAprovado.entity'
import {ProtocoloRejeitado} from './protocoloRejeitado.entity'
import {CheckListRepresentanteLegal} from './checkListRepresentanteLegal.entity'
import {DocumentoRepresentanteLegal} from './documentoRepresentanteLegal.entity'


export class Instituto {
  id: string ;
nome: string  | null;
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
logo?: InstitutoLogo  | null;
razaoSocial: string  | null;
cnpj: string  | null;
sigla: string  | null;
nomeResponsavel: string  | null;
cpfResponsavel: string  | null;
cargoResponsavel: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dtInicioGestao: Date  | null;
emailResponsavel: string  | null;
telefone: string  | null;
cep: string  | null;
logradouro: string  | null;
bairro: string  | null;
numero: string  | null;
complemento: string  | null;
uf: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
cidade: number  | null;
orgao?: Orgao[] ;
user?: User[] ;
userId: string[] ;
grupoAcesso?: GrupoAcesso[] ;
servidor?: Servidor[] ;
importSisprev?: ImportSisprev[] ;
msgVigenciaAnteriorPendente: string  | null;
msgVigenciaAtualPendente: string  | null;
msgVigenciaPosteriorPendente: string  | null;
msgStatusAguardaAnalise: string  | null;
msgStatusRejeitado: string  | null;
msgStatusReprovado: string  | null;
msgStatusAprovado: string  | null;
msgProtocoloEmAnalise: string  | null;
msgProtocoloAprovado: string  | null;
msgFormConfirmacao: string  | null;
msgFormFinalizacao: string  | null;
msgFormContinuaDepois: string  | null;
documento?: Documento[] ;
checkList?: CheckList[] ;
documentoProvaVida?: DocumentoProvaVida[] ;
checkListProvaVida?: CheckListProvaVida[] ;
anexoProvaVida?: AnexoProvaVida[] ;
parametrizacao?: Parametrizacoes[] ;
motivoRecusa?: MotivoRecusa[] ;
tipoRecadastramento?: TipoRecadastramento[] ;
documentoInstrucaoId?: DocumentoInstrucao[] ;
documentoProtocoloId?: DocumentoProtocolo[] ;
registroProvaVida?: RegistroProvaVida[] ;
protocoloFinalizado?: ProtocoloFinalizado[] ;
protocoloAprovado?: ProtocoloAprovado[] ;
protocoloRejeitado?: ProtocoloRejeitado[] ;
CheckListRepresentanteLegal?: CheckListRepresentanteLegal[] ;
DocumentoRepresentanteLegal?: DocumentoRepresentanteLegal[] ;
}
