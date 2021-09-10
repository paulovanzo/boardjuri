import { Entity, OneToMany, JoinColumn, Index } from "typeorm";
import Pessoa from "./Pessoa";
import Endereco from "./Endereco";
import Cartao from "./Cartao";
import Avalia from "./Avalia";
import ListaInteresse from "./ListaInteresse";

@Entity("Usuario")
export default class Usuario extends Pessoa {
  @OneToMany(() => Endereco, (endereco: Endereco) => endereco.usuario, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email" })
  enderecos: Endereco[];

  @OneToMany(() => Cartao, (cartao: Cartao) => cartao.usuario, {
    cascade: ["insert", "update"],
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "email" })
  cartoes: Cartao[];

  @OneToMany(() => Avalia, (avalia: Avalia) => avalia.usuario, {
    cascade: ["insert", "update"],
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "email" })
  avaliacoes: Avalia[];

  @OneToMany(() => ListaInteresse, (lista: ListaInteresse) => lista.usuario, {
    cascade: ["insert", "update"],
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "email" })
  listas: ListaInteresse[];
}
