import {
  Column,
  PrimaryColumn,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Pedido from "./Pedido";
import Usuario from "./Usuario";

@Entity("Cartao")
export default class Cartao {
  @PrimaryColumn()
  numero: string;

  @Column()
  cvv: string;

  @Column()
  status: boolean;

  @Column()
  nome: string;

  @Column()
  vencimento: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cartao, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email" })
  pedidos: Pedido[];

  @ManyToOne(() => Usuario, (usuario: Usuario) => usuario.cartoes, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "email" })
  usuario: Usuario;
}
