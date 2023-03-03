
import {Role} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {UserFoto} from './userFoto.entity'
import {Instituto} from './instituto.entity'
import {GrupoAcesso} from './grupoAcesso.entity'
import {Notificacoes} from './notificacoes.entity'
import {DocumentacaoServidor} from './documentacaoServidor.entity'
import {DocumentacaoServidorAWS} from './documentacaoServidorAWS.entity'
import {AuditoriaAbasServidor} from './auditoriaAbasServidor.entity'
import {AuditoriaResponsavel} from './auditoriaResponsavel.entity'
import {ProtocoloAprovado} from './protocoloAprovado.entity'
import {ProtocoloRejeitado} from './protocoloRejeitado.entity'
import {Servidor} from './servidor.entity'


export class User {
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
email: string ;
password: string ;
name: string  | null;
foto?: UserFoto  | null;
avatar: string  | null;
genero: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
dataNascimento: Date  | null;
telefone: string  | null;
bio: string  | null;
cargo: string  | null;
@ApiProperty({
  enum: Role,
})
role: Role ;
isActive: boolean ;
instituto?: Instituto[] ;
institutoId: string[] ;
grupoAcesso?: GrupoAcesso[] ;
grupoAcessoId: string[] ;
Notificacoes?: Notificacoes[] ;
documentacaoServidor?: DocumentacaoServidor[] ;
documentacaoServidorAWS?: DocumentacaoServidorAWS[] ;
auditoriaAbasServidor?: AuditoriaAbasServidor[] ;
auditoriaResponsavel?: AuditoriaResponsavel[] ;
protocoloAprovado?: ProtocoloAprovado[] ;
protocoloRejeitado?: ProtocoloRejeitado[] ;
servidorRecadRejeitado?: Servidor[] ;
servidorRecadReprovado?: Servidor[] ;
servidorRecadAprovado?: Servidor[] ;
}
