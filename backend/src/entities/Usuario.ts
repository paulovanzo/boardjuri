import { Entity, Column } from "typeorm";
import Pessoa from "./Pessoa";

@Entity("Usuario")
export default class Usuario extends Pessoa {
  @Column()
  rua: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  numero: number;

  @Column()
  cep: number;
}
