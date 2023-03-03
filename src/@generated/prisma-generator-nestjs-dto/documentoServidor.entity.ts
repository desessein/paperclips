
import {ApiProperty} from '@nestjs/swagger'
import {DocumentoServidorTituloEleitor} from './documentoServidorTituloEleitor.entity'
import {DocumentoServidorCertidaoNascimentoCasamento} from './documentoServidorCertidaoNascimentoCasamento.entity'
import {DocumentoServidorReservista} from './documentoServidorReservista.entity'
import {DocumentoServidorRG} from './documentoServidorRG.entity'
import {DocumentoServidorCNH} from './documentoServidorCNH.entity'
import {DocumentoServidorPassaporte} from './documentoServidorPassaporte.entity'
import {DocumentoServidorCTPS} from './documentoServidorCTPS.entity'
import {DocumentoServidorCarteiraDeClasse} from './documentoServidorCarteiraDeClasse.entity'
import {DocumentoServidorPortadorDeficiencia} from './documentoServidorPortadorDeficiencia.entity'


export class DocumentoServidor {
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
tituloEleitor?: DocumentoServidorTituloEleitor  | null;
tituloEleitorId: string  | null;
certidaoNascimentoCasamento?: DocumentoServidorCertidaoNascimentoCasamento  | null;
certidaoNascimentoCasamentoId: string  | null;
documentoServidorReservista?: DocumentoServidorReservista  | null;
documentoServidorReservistaId: string  | null;
registroGeral?: DocumentoServidorRG  | null;
registroGeralId: string  | null;
carteiraNacionalHabilitacao?: DocumentoServidorCNH  | null;
carteiraNacionalHabilitacaoId: string  | null;
documentoPassaporte?: DocumentoServidorPassaporte  | null;
documentoPassaporteId: string  | null;
documentoCTPS?: DocumentoServidorCTPS  | null;
documentoCTPSId: string  | null;
documentoServidorCarteiraDeClasse?: DocumentoServidorCarteiraDeClasse  | null;
documentoServidorCarteiraDeClasseId: string  | null;
documentoServidorPortadorDeficiencia?: DocumentoServidorPortadorDeficiencia  | null;
documentoServidorPortadorDeficienciaId: string  | null;
salvoTemporariamente: boolean  | null;
servidorId: string ;
}
