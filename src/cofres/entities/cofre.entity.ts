import {Cofre} from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library";

export class Cofres implements  Cofre{
    id: number;
    filial: string;
    saldo: Decimal;
    sangria: Decimal;
    outras_entradas: Decimal;
    despesas: Decimal;
    deposito: Decimal;
    dateSaldo: Date;
    
}
