
import {ApiProperty} from '@nestjs/swagger'


export class GrupoAcessoDto {
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
