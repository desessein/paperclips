
import {ApiProperty} from '@nestjs/swagger'
import {Instituto} from './instituto.entity'
import {User} from './user.entity'


export class GrupoAcesso {
  id: string ;
nome: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date ;
instituto?: Instituto  | null;
institutoId: string  | null;
user?: User[] ;
userId: string[] ;
CadastroServidor: boolean ;
CadastroUsuario: boolean ;
CadastroOrgao: boolean ;
CadastroInstituto: boolean ;
Auditoria: boolean ;
Relatorios: boolean ;
ImportarExportar: boolean ;
ConfiguracoesSistema: boolean ;
ConfiguracoesParametrizacao: boolean ;
ConfiguracoesWorkflor: boolean ;
ConfiguracoesPerfil: boolean ;
CriarCadastroServidor: boolean ;
CriarCadastroUsuario: boolean ;
EditarAuditoria: boolean ;
EditarRecadPV: boolean ;
}
