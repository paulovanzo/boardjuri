import { Entity, OneToMany, JoinColumn, OneToOne } from "typeorm";
import Pessoa from "./Pessoa";
import Endereco from "./Endereco";

@Entity("Usuario")
export default class Usuario extends Pessoa {
  @OneToMany(() => Endereco, (endereco: Endereco) => endereco.usuario, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email_usuario" })
  enderecos: Endereco[];
}
